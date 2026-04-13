import { NextRequest, NextResponse } from "next/server";
import { generateQuotationPDF } from "@/lib/pdf.service";

export async function POST(req: NextRequest) {
  try {
    const lead = await req.json();

    if (!lead) {
      return NextResponse.json({ error: "missing lead data" }, { status: 400 });
    }

    const pdfBuffer = await generateQuotationPDF(lead);

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="BMD_Quotation_${lead.name || "Customer"}.pdf"`,
      },
    });
  } catch (err) {
    console.error("PDF Gen Error:", err);
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 });
  }
}
