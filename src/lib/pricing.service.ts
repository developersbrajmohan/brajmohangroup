export function calcPrice(kw: number, type: "home" | "commercial"): number {
  if (type === "home") {
    if (kw === 1) return 75000;
    if (kw === 2) return 140000;
    if (kw === 3) return 210000;
    return kw * 65000;
  }
  if (kw <= 1) return 65000;
  if (kw <= 2) return 120000;
  if (kw <= 3) return 180000;
  if (kw <= 4) return 220000;
  if (kw <= 10) return kw * 50000;
  if (kw <= 20) return kw * 45000;
  if (kw <= 30) return kw * 43000;
  if (kw <= 40) return kw * 42000;
  return kw * 40000;
}

export function calcSubsidy(kw: number): number {
  if (kw === 1) return 30000;
  if (kw === 2) return 60000;
  if (kw >= 3) return 78000;
  return 0;
}
