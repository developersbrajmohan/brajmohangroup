// ─── Chat Types ──────────────────────────────────────────────────────────────

export type Language = "en" | "hi";

export type FlowStep =
  | "language"
  | "service"
  | "lead_name"
  | "lead_phone"
  | "lead_city"
  | "solar_type"
  | "solar_grid_type"
  | "solar_panel_brand"
  | "solar_battery_brand"
  | "solar_details"
  | "solar_units"
  | "solar_quotation"
  | "civil_type"
  | "it_type"
  | "ai_chat"
  | "done";

export interface Message {
  id: string;
  role: "bot" | "user";
  content: string;
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
  language: Language;
  service?: string;
  solarType?: "home" | "commercial";
  gridType?: string;
  panelBrand?: string;
  inverterBrand?: string;
  batteryBrand?: string;
  hasSpace?: boolean;
  monthlyUnits?: number;
  recommendedKw?: number;
  estimatedPrice?: number;
  subsidyAmount?: number;
  score?: "hot" | "warm" | "cold";
  projectType?: string;
  digitalNeed?: string;
  email?: string;
  message?: string;
}

// ─── Session Handling ───────────────────────────────────────────────────────

export interface ChatSession {
  id: string;
  step: FlowStep;
  language: Language;
  lead: LeadData;
  invalidAttempts: Record<string, number>; // Track attempts per step id
  aiCallCount: number;
  lastUpdated: number;
}

// ─── Handler Types ────────────────────────────────────────────────────────────

export interface HandlerResult {
  replies: string[];
  nextStep: FlowStep;
  leadUpdate?: Partial<LeadData>;
  saveLead?: boolean;
  options?: QuickReply[];
}

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}
