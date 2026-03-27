import { FlowStep, HandlerResult, Language, LeadData } from "./types";

// ─── Translations ──────────────────────────────────────────────────────────────

const t = {
  en: {
    askName: "What's your name?",
    askPhone: "Great! Please share your 10-digit phone number.",
    invalidPhone: "❌ That doesn't look right. Please enter a valid 10-digit phone number.",
    askCity: "Which city are you from?",
    invalidCity: "❌ Please enter a valid city name.",
    thankYou: (name: string) => `Thanks, ${name}! 🎉 Our solar expert will reach out to you shortly.`,
    solarType: "Is this for your **Home** or a **Commercial** property?",
    civilType: "What type of construction do you need?",
    itType: "What kind of digital service are you looking for?",
    askTerrace: "Do you have rooftop/terrace space available for the panels?",
    askUnits: "What's your average monthly electricity consumption? (in units, e.g. 150)",
    invalidUnits: "Please enter a valid number (e.g. 150, 300).",
    finalMsg: "Our team will contact you soon with a detailed quote! 🚀 Meanwhile, feel free to ask me anything.",
    aiError: "I'm having a bit of trouble connecting right now. Please try again in a moment! 🙏",
  },
  hi: {
    askName: "आपका नाम क्या है?",
    askPhone: "बहुत अच्छा! कृपया अपना 10 अंकों का मोबाइल नंबर दें।",
    invalidPhone: "❌ यह सही नहीं लगता। कृपया 10 अंकों का मान्य नंबर दर्ज करें।",
    askCity: "आप किस शहर से हैं?",
    invalidCity: "❌ कृपया मान्य शहर का नाम दर्ज करें।",
    thankYou: (name: string) => `धन्यवाद, ${name} जी! 🎉 हमारे सोलर एक्सपर्ट जल्दी ही आपसे संपर्क करेंगे।`,
    solarType: "यह आपके **घर** के लिए है या **कमर्शियल** प्रॉपर्टी के लिए?",
    civilType: "आपको किस प्रकार के निर्माण की आवश्यकता है?",
    itType: "आप किस तरह की डिजिटल सेवा ढूंढ रहे हैं?",
    askTerrace: "क्या आपके पास सोलर पैनल लगाने के लिए छत की जगह उपलब्ध है?",
    askUnits: "आपकी औसत मासिक बिजली खपत कितनी है? (यूनिट में, जैसे 150)",
    invalidUnits: "कृपया एक मान्य संख्या दर्ज करें (जैसे 150, 300)।",
    finalMsg: "हमारी टीम जल्द ही विस्तृत कोटेशन के साथ संपर्क करेगी! 🚀 इस बीच, बेझिझक कुछ भी पूछें।",
    aiError: "अभी कनेक्ट करने में थोड़ी परेशानी है। कृपया एक पल में फिर से प्रयास करें! 🙏",
  },
};

// ─── Validators ────────────────────────────────────────────────────────────────

const PHONE_RE = /^[0-9]{10}$/;
const CITY_RE = /^[a-zA-Z\u0900-\u097F\s]{2,50}$/;

// ─── Regex-Based Lead Extractor ────────────────────────────────────────────────
// Cheap, instant extraction — no AI API call needed

export function extractLeadFromText(text: string): Partial<LeadData> {
  const extracted: Partial<LeadData> = {};

  const phoneMatch = text.match(/\b([6-9][0-9]{9})\b/);
  if (phoneMatch) extracted.phone = phoneMatch[1];

  const namePatterns = [
    /(?:my name is|i am|i'm|mera naam|naam hai|मेरा नाम|नाम है)\s+([a-zA-Z\u0900-\u097F]+(?:\s[a-zA-Z\u0900-\u097F]+)?)/i,
    /^([A-Z][a-z]+(?:\s[A-Z][a-z]+)*)(?:\s|,)/,
  ];
  for (const pattern of namePatterns) {
    const match = text.match(pattern);
    if (match) { extracted.name = match[1].trim(); break; }
  }

  return extracted;
}

// ─── Solar Calculator ──────────────────────────────────────────────────────────

function calcPrice(kw: number, type: "home" | "commercial"): number {
  if (type === "home") {
    if (kw === 1) return 75000;
    if (kw === 2) return 140000;
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

function calcSubsidy(kw: number): number {
  if (kw === 1) return 30000;
  if (kw === 2) return 60000;
  if (kw >= 3) return 78000;
  return 0;
}

// ─── Handlers ──────────────────────────────────────────────────────────────────

type Handler = (input: string, lead: LeadData) => HandlerResult;

function getNextServiceStep(lead: LeadData): FlowStep {
  if (lead.service === "civil") return "civil_type";
  if (lead.service === "it") return "it_type";
  return "solar_type";
}

const handlers: Record<FlowStep, Handler | null> = {
  language: null, // handled by UI buttons
  service: null,  // handled by UI buttons

  lead_name(input, lead) {
    const lang = lead.language;
    const name = lead.name || input.trim() || "Friend";
    const updatedLead: Partial<LeadData> = { name };

    // Already have phone?
    if (lead.phone) {
      if (lead.city) {
        return { replies: [t[lang].thankYou(name)], nextStep: getNextServiceStep(lead), leadUpdate: updatedLead, saveLead: false };
      }
      return { replies: [t[lang].askCity], nextStep: "lead_city", leadUpdate: updatedLead };
    }

    return { replies: [t[lang].askPhone], nextStep: "lead_phone", leadUpdate: updatedLead };
  },

  lead_phone(input, lead) {
    const lang = lead.language;
    const phone = input.replace(/\s/g, "");

    if (!PHONE_RE.test(phone)) {
      return { replies: [t[lang].invalidPhone], nextStep: "lead_phone" };
    }

    const updatedLead: Partial<LeadData> = { phone };

    if (lead.city) {
      const name = lead.name || "Friend";
      return { replies: [t[lang].thankYou(name)], nextStep: getNextServiceStep(lead), leadUpdate: updatedLead, saveLead: false };
    }

    return { replies: [t[lang].askCity], nextStep: "lead_city", leadUpdate: updatedLead };
  },

  lead_city(input, lead) {
    const lang = lead.language;
    const city = input.trim();

    if (!CITY_RE.test(city)) {
      return { replies: [t[lang].invalidCity], nextStep: "lead_city" };
    }

    const name = lead.name || "Friend";
    const updatedLead: Partial<LeadData> = { city };

    return { replies: [t[lang].thankYou(name)], nextStep: getNextServiceStep(lead), leadUpdate: updatedLead, saveLead: false };
  },

  solar_type: null, // handled by UI buttons
  civil_type: null, // handled by UI buttons
  it_type: null,    // handled by UI buttons

  solar_details: null, // handled by UI buttons

  solar_units(input, lead) {
    const lang = lead.language;
    const units = parseInt(input.trim());

    if (isNaN(units) || units <= 0) {
      return { replies: [t[lang].invalidUnits], nextStep: "solar_units" };
    }

    const kw = Math.max(1, Math.round(units / 100));
    const type = lead.solarType ?? "home";
    const price = calcPrice(kw, type);
    const subsidy = type === "home" ? calcSubsidy(kw) : 0;

    const recMsg = `Based on **${units} units/month**, we recommend a **${kw}kW ${type === "home" ? "Residential" : "Commercial"}** system.`;
    const priceLines = [
      `💰 **Estimated Price:** ₹${price.toLocaleString("en-IN")}`,
      subsidy > 0 ? `🏛️ **PM Surya Ghar Subsidy:** ₹${subsidy.toLocaleString("en-IN")} *(Net: ₹${(price - subsidy).toLocaleString("en-IN")})*` : null,
      `🏦 Easy loan options available at low interest rates.`,
    ].filter(Boolean).join("\n");

    return {
      replies: [recMsg, priceLines, t[lang].finalMsg],
      nextStep: "ai_chat",
      leadUpdate: {
        monthlyUnits: units,
        recommendedKw: kw,
        estimatedPrice: price,
        subsidyAmount: subsidy,
      },
      saveLead: true,
    };
  },

  recommendation: null,
  ai_chat: null, // handled by API route
};

// ─── Public API ────────────────────────────────────────────────────────────────

/**
 * Process a user message within the current flow step.
 * Returns null for steps handled by the UI (buttons) or AI route.
 */
export function processMessage(
  step: FlowStep,
  input: string,
  lead: LeadData
): HandlerResult | null {
  const handler = handlers[step];
  if (!handler) return null;
  return handler(input, lead);
}
