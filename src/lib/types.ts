// ─── Chat Types ──────────────────────────────────────────────────────────────

export type Language = "en" | "hi";

export type ChatMode = "FLOW" | "AI";

export type FlowStep =
  | "language"
  | "service"
  | "lead_name"
  | "lead_phone"
  | "lead_city"
  | "solar_type"
  | "solar_details"
  | "solar_units"
  | "civil_type"
  | "it_type"
  | "recommendation"
  | "ai_chat";

export interface Message {
  id: string;
  role: "bot" | "user";
  content: string;
  /** Optional quick-reply buttons rendered below the message */
  options?: QuickReply[];
}

export interface QuickReply {
  label: string;
  value: string;
}

// ─── Lead Types ───────────────────────────────────────────────────────────────

export interface LeadData {
  name?: string;
  phone?: string;
  city?: string;
  email?: string;
  language: Language;
  service?: string;
  solarType?: "home" | "commercial";
  hasSpace?: boolean;
  monthlyUnits?: number;
  recommendedKw?: number;
  estimatedPrice?: number;
  subsidyAmount?: number;
  message?: string;
  projectType?: string;
  digitalNeed?: string;
}

// ─── Handler Types ────────────────────────────────────────────────────────────

export interface HandlerResult {
  /** Messages to append (bot replies) */
  replies: string[];
  /** Next step in the flow */
  nextStep: FlowStep;
  /** Updated lead data (partial merge) */
  leadUpdate?: Partial<LeadData>;
  /** Should save the lead now? */
  saveLead?: boolean;
}

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}
