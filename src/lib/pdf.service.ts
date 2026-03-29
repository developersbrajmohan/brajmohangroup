import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { LeadData } from "./types";

export async function generateQuotationPDF(lead: LeadData): Promise<ArrayBuffer> {
  const doc = new jsPDF();
  const kw = lead.recommendedKw ?? 0;
  
  // BMD Branding
  doc.setFontSize(22);
  doc.setTextColor(212, 175, 55); // BMD Gold
  doc.text("Brajmohan Group (BMD)", 14, 20);
  
  doc.setFontSize(14);
  doc.setTextColor(14, 30, 53); // BMD Navy
  doc.text("Solar System Quotation", 14, 28);
  
  doc.setFontSize(10);
  doc.setTextColor(100);
  doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 35);
  doc.text(`Customer Name: ${lead.name || "N/A"}`, 14, 40);
  doc.text(`Phone: ${lead.phone || "N/A"}`, 14, 45);
  doc.text(`City: ${lead.city || "N/A"}`, 14, 50);

  // System Details
  doc.setFontSize(14);
  doc.setTextColor(14, 30, 53);
  doc.text("System Configuration", 14, 65);

  const systemData = [
    ["System Type", `${lead.solarType === 'commercial' ? 'Commercial' : 'Residential'} ${lead.gridType || ''}`],
    ["System Capacity", `${kw} kW`],
    ["Panel Brand", lead.panelBrand || "Standard"],
    ["Inverter Brand", lead.inverterBrand || "Standard"],
  ];
  if (lead.batteryBrand) {
    systemData.push(["Battery Brand", lead.batteryBrand]);
  }

  autoTable(doc, {
    startY: 70,
    head: [["Specification", "Detail"]],
    body: systemData,
    theme: 'grid',
    headStyles: { fillColor: [14, 30, 53] },
    alternateRowStyles: { fillColor: [245, 245, 245] },
  });

  const finalY = (doc as any).lastAutoTable.finalY + 15;

  // Costing Details
  doc.setFontSize(14);
  doc.setTextColor(14, 30, 53);
  doc.text("Pricing Estimate", 14, finalY);

  const price = lead.estimatedPrice || 0;
  const subsidy = lead.subsidyAmount || 0;
  const net = price - subsidy;

  const costData = [
    ["Estimated Gross Price", `Rs. ${price.toLocaleString("en-IN")}`],
  ];
  if (subsidy > 0) {
    costData.push(["PM Surya Ghar Subsidy", `Rs. ${subsidy.toLocaleString("en-IN")}`]);
    costData.push(["Estimated Net Cost", `Rs. ${net.toLocaleString("en-IN")}`]);
  }

  autoTable(doc, {
    startY: finalY + 5,
    head: [["Description", "Amount"]],
    body: costData,
    theme: 'grid',
    headStyles: { fillColor: [212, 175, 55] },
  });

  const costFinalY = (doc as any).lastAutoTable.finalY + 20;
  
  doc.setFontSize(10);
  doc.setTextColor(100);
  doc.text("Thank you for choosing Brajmohan Group (BMD).", 14, costFinalY);
  doc.text("For further assistance, our expert will be in touch shortly.", 14, costFinalY + 5);

  return doc.output("arraybuffer");
}
