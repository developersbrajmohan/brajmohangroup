import { NextRequest, NextResponse } from "next/server";
import { callAI, buildSystemPrompt } from "@/lib/ai";
import { searchKnowledge } from "@/lib/search";
import { ChatMessage } from "@/lib/types";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as { messages: ChatMessage[]; query?: string };

    if (!body.messages || !Array.isArray(body.messages)) {
      return NextResponse.json({ error: "messages array is required" }, { status: 400 });
    }

    // RAG: search knowledge base using the latest user message as the query
    const query = body.query ?? body.messages.filter(m => m.role === "user").pop()?.content ?? "";
    const ragContext = searchKnowledge(query, 3);

    // Build system prompt with injected context
    const systemPrompt = buildSystemPrompt(ragContext);

    // Call AI
    const content = await callAI(body.messages, systemPrompt);

    if (!content) {
      return NextResponse.json(
        { error: "AI unavailable. Please try again shortly." },
        { status: 503 }
      );
    }

    return NextResponse.json({ content });
  } catch (err) {
    console.error("❌ /api/chat error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
