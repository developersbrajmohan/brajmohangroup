import { NextRequest, NextResponse } from "next/server";
import { processChatOrchestrator } from "@/lib/chat-handler";
import { getSession, updateSession } from "@/lib/session.service";
import { ChatMessage } from "@/lib/types";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as { sessionId: string; input: string; messages: ChatMessage[] };

    if (!body.sessionId || body.input === undefined) {
      return NextResponse.json({ error: "sessionId and input are required" }, { status: 400 });
    }

    // 1. Recover authoritative session
    const session = getSession(body.sessionId);

    // 2. Pass execution to 3-Layer Orchestrator
    const handlerResult = await processChatOrchestrator(session, body.input, body.messages || []);

    // 3. Mutate internal session state securely
    if (handlerResult.leadUpdate) {
        updateSession(body.sessionId, {
            step: handlerResult.nextStep,
            lead: { ...session.lead, ...handlerResult.leadUpdate } as any
        });
    } else {
        updateSession(body.sessionId, { step: handlerResult.nextStep });
    }

    // 4. Handle side-effects (e.g. Save final Lead Data to external DB)
    if (handlerResult.saveLead) {
       const leadData = getSession(body.sessionId).lead;
       console.log("🚀 LEAD CAPTURED COMPLETELY:", leadData);
       
       const webhookUrl = process.env.CHATBOT_GOOGLE_SHEETS_URL;
       if (webhookUrl) {
         try {
           const res = await fetch(webhookUrl, {
             method: "POST",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify({
               ...leadData,
               timestamp: new Date().toISOString(),
             }),
           });
           if (!res.ok) console.warn("⚠️ Google Sheets webhook returned:", res.status);
         } catch(e) {
           console.error("Failed to forward lead to webhook:", e);
         }
       }
    }

    // Return the purely reactive constraints back to the Dumb Client
    return NextResponse.json({
       replies: handlerResult.replies,
       nextStep: handlerResult.nextStep,
       options: handlerResult.options || [],
       leadState: getSession(body.sessionId).lead // pass back for UI pdf generation if needed
    });
    
  } catch (err) {
    console.error("❌ /api/chat error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
