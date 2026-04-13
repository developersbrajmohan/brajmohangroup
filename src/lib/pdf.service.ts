import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { LeadData } from "./types";

export async function generateQuotationPDF(lead: LeadData): Promise<ArrayBuffer> {
  const doc = new jsPDF();
  const kw = lead.recommendedKw ?? 0;
  
  // --- Premium Header / Letterhead ---
  // Navy background for the top header
  doc.setFillColor(14, 30, 53); // BMD Navy
  doc.rect(0, 0, 210, 42, 'F');
  
  // Gold accent line at the very bottom of the header
  doc.setFillColor(212, 175, 55); // BMD Gold
  doc.rect(0, 42, 210, 2, 'F');

  // Company Name
  doc.setFontSize(28);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255); // White
  doc.text("Braj Mohan Group", 14, 22);
  
  // Subtitle / Tagline
  doc.setFontSize(11);
  doc.setFont("helvetica", "italic");
  doc.setTextColor(212, 175, 55); // BMD Gold
  doc.text("Excellence in Solar & Infrastructure", 14, 29);

  // Contact Info in the Header (Right aligned)
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255); // White
  doc.text("Call Us: +91 90310 74805", 196, 18, { align: "right" });

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(200, 200, 200); // Light Gray
  doc.text("Email: info@brajmohangroup.in", 196, 24, { align: "right" });
  doc.text("Web: www.brajmohangroup.in", 196, 29, { align: "right" });
  doc.text("8H/7 Bahadurpur Housing Colony, Patna", 196, 34, { align: "right" });

  // --- Document Title ---
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(14, 30, 53);
  doc.text("SOLAR SYSTEM QUOTATION", 105, 56, { align: "center" });

  // --- Customer details box ---
  doc.setDrawColor(212, 175, 55); // Gold border
  doc.setLineWidth(0.3);
  doc.setFillColor(252, 252, 252);
  doc.roundedRect(14, 62, 182, 26, 2, 2, 'FD');

  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(50);
  doc.text("Prepared For:", 18, 68);
  
  doc.setFont("helvetica", "normal");
  doc.text(`Name: ${lead.name || "Valued Customer"}`, 18, 74);
  doc.text(`Phone: ${lead.phone || "N/A"}`, 18, 79);
  doc.text(`Location: ${lead.city || "N/A"}`, 18, 84);

  // Date and Ref
  doc.setFont("helvetica", "bold");
  doc.text("Quotation Details:", 120, 68);
  
  doc.setFont("helvetica", "normal");
  doc.text(`Date: ${new Date().toLocaleDateString('en-IN')}`, 120, 74);
  doc.text(`Ref ID: BMD-${Math.floor(Math.random() * 10000)}`, 120, 79);
  doc.text(`Valid Until: ${new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN')}`, 120, 84);

  // --- System Specifications ---
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(14, 30, 53);
  doc.text("1. System Specifications", 14, 98);

  const systemData = [
    ["System Type", `${lead.solarType === 'commercial' ? 'Commercial' : 'Residential'} ${lead.gridType || ''}`],
    ["Recommended Capacity", `${kw} kW`],
    ["Solar Panel Brand", lead.panelBrand || "Standard Grade"],
    ["Inverter Brand", lead.inverterBrand || "Standard Grade"],
  ];
  if (lead.batteryBrand) {
    systemData.push(["Battery Backup", lead.batteryBrand]);
  }

  autoTable(doc, {
    startY: 102,
    head: [["Components", "Specification"]],
    body: systemData,
    theme: 'grid',
    headStyles: { fillColor: [14, 30, 53], textColor: [255, 255, 255] },
    alternateRowStyles: { fillColor: [248, 248, 248] },
    styles: { font: "helvetica", fontSize: 10, cellPadding: 4 },
  });

  const finalY = (doc as any).lastAutoTable.finalY + 15;

  // --- Financial Estimate ---
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(14, 30, 53);
  doc.text("2. Commercial Proposal", 14, finalY);

  const price = lead.estimatedPrice || 0;
  const subsidy = lead.subsidyAmount || 0;
  const net = price - subsidy;

  const costData = [
    ["Estimated Gross Project Cost", `Rs. ${price.toLocaleString("en-IN")}`],
  ];
  if (subsidy > 0) {
    costData.push(["Estimated PM Surya Ghar Subsidy (-)", `Rs. ${subsidy.toLocaleString("en-IN")}`]);
    costData.push(["Net Payable Amount (approx)", `Rs. ${net.toLocaleString("en-IN")}`]);
  }

  autoTable(doc, {
    startY: finalY + 4,
    head: [["Description", "Amount (INR)"]],
    body: costData,
    theme: 'grid',
    headStyles: { fillColor: [212, 175, 55], textColor: [255, 255, 255] },
    alternateRowStyles: { fillColor: [253, 251, 247] }, // Very light gold
    styles: { font: "helvetica", fontSize: 10, cellPadding: 5 },
    columnStyles: {
      0: { fontStyle: "bold" },
      1: { fontStyle: "bold", halign: "right" }
    }
  });

  const termsY = (doc as any).lastAutoTable.finalY + 15;
  
  // --- Terms & Conditions ---
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(14, 30, 53);
  doc.text("Terms & Conditions:", 14, termsY);
  
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(100);
  const terms = [
    "1. This is a computer-generated estimated quotation based on initial inputs. Final pricing may vary post site inspection.",
    "2. Subsidies are subject to MNRE / State nodal agency guidelines and customer eligibility.",
    "3. Standard installation & commissioning are included. Additional civil/electrical work will be charged at actuals.",
    "4. Warranties are standard as per OEM policies (e.g., Panels: 25 Yrs Performance, Inverter: 5-10 Yrs).",
    "5. For a finalized commercial agreement, kindly contact our representative to arrange a free site assessment."
  ];
  
  let currentY = termsY + 6;
  terms.forEach(term => {
    doc.text(term, 14, currentY);
    currentY += 4;
  });

  // --- Footer ---
  doc.setLineWidth(0.5);
  doc.setDrawColor(200);
  doc.line(14, 280, 196, 280);
  
  doc.setFontSize(9);
  doc.setFont("helvetica", "italic");
  doc.setTextColor(120);
  doc.text("Thank you for choosing Braj Mohan Group. Together we build a sustainable future.", 105, 285, { align: "center" });

  return doc.output("arraybuffer");
}
