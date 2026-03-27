import { NextRequest, NextResponse } from "next/server";
import { LeadData } from "@/lib/types";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<LeadData>;

    // Basic validation
    if (!body.name || !body.phone || !body.city) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: name, phone, city" },
        { status: 400 }
      );
    }

    const data = body as LeadData;

    // Console log for dev / server logs
    console.log("─────────────────────────────────");
    console.log("🚀 NEW CHATBOT LEAD");
    console.log(`   Name:    ${data.name}`);
    console.log(`   Phone:   ${data.phone}`);
    console.log(`   City:    ${data.city}`);
    console.log(`   Service: ${data.service ?? "N/A"}`);
    console.log(`   Solar:   ${data.solarType ?? "N/A"} | ${data.recommendedKw ?? "–"}kW`);
    console.log(`   Civil:   ${data.projectType ?? "N/A"}`);
    console.log(`   IT:      ${data.digitalNeed ?? "N/A"}`);
    console.log(`   Price:   ₹${data.estimatedPrice?.toLocaleString("en-IN") ?? "–"}`);
    console.log("─────────────────────────────────");

    // Forward to Google Sheets webhook if configured
    const webhookUrl = process.env.CHATBOT_GOOGLE_SHEETS_URL;
    if (webhookUrl) {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          city: data.city,
          service: data.service,
          language: data.language,
          solarType: data.solarType,
          monthlyUnits: data.monthlyUnits,
          recommendedKw: data.recommendedKw,
          estimatedPrice: data.estimatedPrice,
          subsidyAmount: data.subsidyAmount,
          projectType: data.projectType,
          digitalNeed: data.digitalNeed,
          message: data.message,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!res.ok) {
        console.warn("⚠️ Google Sheets webhook returned:", res.status);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ /api/leads error:", err);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}
