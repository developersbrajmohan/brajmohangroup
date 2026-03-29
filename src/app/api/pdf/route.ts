import { NextRequest, NextResponse } from "next/server";
import { generateQuotationPDF } from "@/lib/pdf.service";
import { getSession } from "@/lib/session.service";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("sessionId");

    if (!sessionId) {
      return NextResponse.json({ error: "missing sessionId" }, { status: 400 });
    }

    const session = getSession(sessionId);
    const pdfBuffer = await generateQuotationPDF(session.lead);

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="BMD_Quotation_${session.lead.name || "Customer"}.pdf"`,
      },
    });
  } catch (err) {
    console.error("PDF Gen Error:", err);
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 });
  }
}
