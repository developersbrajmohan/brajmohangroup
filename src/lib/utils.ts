import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── UTILITIES & PARSERS ─────────────────────────────────────────────

/** Remove special characters except spaces, english/hindi letters, and digits. Multiple spaces squashed to one. */
export function normalizeInput(input: string): string {
  if (!input) return "";
  // Keeps letters (Latin & Devanagari), digits, spaces.
  const cleaned = input.replace(/[^\w\s\u0900-\u097F]/gu, "");
  return cleaned.replace(/\s+/g, " ").trim();
}

export type InputType = "phone" | "numeric" | "text" | "unknown";

export function detectInputType(input: string): InputType {
  const norm = normalizeInput(input);
  const withoutSpaces = norm.replace(/\s/g, "");
  
  if (/^[6-9]\d{9}$/.test(withoutSpaces)) return "phone";
  if (/^\d+$/.test(withoutSpaces)) return "numeric";
  if (/^[a-zA-Z\u0900-\u097F\s]+$/.test(norm)) return "text";
  
  return "unknown";
}

export function validateCity(input: string): boolean {
  const norm = normalizeInput(input);
  return norm.length >= 2; // Relaxed: multi-word and hindi/unicode accepted
}
