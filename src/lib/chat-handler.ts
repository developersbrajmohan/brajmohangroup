import { FlowStep, HandlerResult, Language, LeadData, ChatSession } from "./types";
import { normalizeInput, detectInputType, validateCity } from "./utils";
import { calcPrice, calcSubsidy } from "./pricing.service";
import { incrementInvalidAttempt, clearInvalidAttempts } from "./session.service";
import { queryPageIndex } from "./retrieval.service";
import { askOpenRouter } from "./ai.service";

// ─── TRANSLATIONS ─────────────────────────────────────────────

const t = {
  en: {
    welcome: "Welcome to Brajmohan Group (BMD)! ☀️ How can I help you today?",
    selectLang: "Please select your language:",
    services: "What are you interested in?",
    askName: "What's your name?",
    askPhone: "Great! Please share your 10-digit phone number.",
    invalidPhone: "❌ That doesn't look like a valid phone number. Please enter a 10-digit mobile number.",
    askCity: "Which city are you from?",
    invalidCity: "That doesn’t look like a city. Try: Ranchi, Delhi, Patna",
    phoneGivenForCity: "You entered a phone number instead of a city. Which city are you from?",
    textGivenForPhone: "Please enter a valid 10-digit mobile number.",
    thankYou: (name: string) => `Thanks, ${name}! 🎉 Our expert will reach out to you shortly.`,
    solarTypePrompt: "Is this for your Home or Commercial property?",
    civilTypePrompt: "What type of construction do you need?",
    itTypePrompt: "What kind of digital service are you looking for?",
    gridTypePrompt: "Do you want an On-Grid, Hybrid, or Off-Grid system?",
    panelPrompt: "Which Solar Panel brand do you prefer?",
    inverterPrompt: "Which Inverter brand do you prefer?",
    batteryPrompt: "Which Battery brand do you prefer?",
    terracePrompt: "Do you have rooftop/terrace space available?",
    askUnits: "What's your average monthly electricity usage? (in units, e.g. 150)",
    invalidUnits: "Please enter a valid number (e.g. 150, 300).",
    wantQuote: "Would you like to download your customized quotation as a PDF?",
    finishChat: "Great! Our team will contact you soon. 🚀 Meanwhile, feel free to ask me anything."
  },
  hi: {
    welcome: "ब्रजमोहन ग्रुप (BMD) में आपका स्वागत है! ☀️ आज हम आपकी क्या मदद कर सकते हैं?",
    selectLang: "कृपया अपनी भाषा चुनें:",
    services: "आप किसमें रुचि रखते हैं?",
    askName: "आपका नाम क्या है?",
    askPhone: "बहुत अच्छा! कृपया अपना 10 अंकों का मोबाइल नंबर दें।",
    invalidPhone: "❌ यह सही नहीं लगता। कृपया 10 अंकों का मान्य नंबर दर्ज करें।",
    askCity: "आप किस शहर से हैं?",
    invalidCity: "वह शहर नहीं लगता। उदाहरण: रांची, दिल्ली, पटना",
    phoneGivenForCity: "आपने शहर के बजाय फोन नंबर दर्ज किया है। आप किस शहर से हैं?",
    textGivenForPhone: "कृपया 10 अंकों का मान्य मोबाइल नंबर दर्ज करें।",
    thankYou: (name: string) => `धन्यवाद, ${name} जी! 🎉 हमारे एक्सपर्ट जल्दी ही आपसे संपर्क करेंगे।`,
    solarTypePrompt: "यह घर के लिए है या कमर्शियल के लिए?",
    civilTypePrompt: "आपको किस प्रकार के निर्माण की आवश्यकता है?",
    itTypePrompt: "आप किस तरह की डिजिटल सेवा ढूंढ रहे हैं?",
    gridTypePrompt: "क्या आप ऑन-ग्रिड, हाइब्रिड या ऑफ-ग्रिड सिस्टम चाहते हैं?",
    panelPrompt: "आप कौन सा सोलर पैनल ब्रांड पसंद करेंगे?",
    inverterPrompt: "आप कौन सा इन्वर्टर ब्रांड पसंद करेंगे?",
    batteryPrompt: "आप कौन सा बैटरी ब्रांड पसंद करेंगे?",
    terracePrompt: "क्या आपके पास छत की जगह उपलब्ध है?",
    askUnits: "आपकी औसत मासिक बिजली खपत कितनी है? (यूनिट में, जैसे 150)",
    invalidUnits: "कृपया एक मान्य संख्या दर्ज करें (जैसे 150, 300)।",
    wantQuote: "क्या आप अपना कस्टम कोटेशन PDF में डाउनलोड करना चाहते हैं?",
    finishChat: "बहुत बढ़िया! हमारी टीम जल्द ही आपसे संपर्क करेगी। 🚀 इस बीच, बेझिझक कुछ भी पूछें।"
  },
};

function getNextServiceStep(service?: string): FlowStep {
  if (service === "civil") return "civil_type";
  if (service === "it") return "it_type";
  return "solar_type";
}

function getNextLeadStep(lead: LeadData): FlowStep {
  if (!lead.name) return "lead_name";
  if (!lead.phone) return "lead_phone";
  if (!lead.city) return "lead_city";
  return getNextServiceStep(lead.service);
}

// ─── HANDLERS ─────────────────────────────────────────────

type Context = { session: ChatSession; input: string; normInput: string; inputType: string; lang: Language };
type LogicHandler = (ctx: Context) => HandlerResult | null;

const handlers: Partial<Record<FlowStep, LogicHandler>> = {
  language({ session, normInput }) {
    const isHi = normInput.toLowerCase() === "hi" || normInput.toLowerCase() === "hindi" || normInput.includes("हिंदी") || normInput.includes("हिं");
    const lang = isHi ? "hi" : "en";
    return {
      replies: [t[lang].services],
      nextStep: "service",
      leadUpdate: { language: lang },
      options: [
        { label: lang === "en" ? "☀️ Solar Energy" : "☀️ सौर ऊर्जा", value: "solar" },
        { label: lang === "en" ? "🏗️ Civil Construction" : "🏗️ सिविल कंस्ट्रक्शन", value: "civil" },
        { label: lang === "en" ? "💻 IT/Web Dev" : "💻 वेब/ऐप डेवलपमेंट", value: "it" }
      ]
    };
  },

  service({ normInput, session, lang }) {
    const s = normInput.toLowerCase();
    let service = "solar";
    if (s.includes("civil") || s.includes("construction") || s.includes("सिविल") || s.includes("निर्माण")) service = "civil";
    if (s.includes("it") || s.includes("web") || s.includes("app") || s.includes("वेब") || s.includes("ऐप")) service = "it";

    const next = getNextLeadStep({ ...session.lead, service });
    const res: HandlerResult = {
      replies: [t[lang].askName],
      nextStep: next,
      leadUpdate: { service },
    };
    if (next !== "lead_name") {
      res.replies = [t[lang].thankYou(session.lead.name || "Friend")];
      _appendOptionsForFlow(next, lang, res);
    }
    return res;
  },

  lead_name({ normInput, session, lang }) {
    const name = normInput || "Friend";
    if (!normInput) return { replies: [t[lang].askName], nextStep: "lead_name" };

    const updated = { ...session.lead, name };
    const next = getNextLeadStep(updated);
    const isServiceNext = next === "solar_type" || next === "civil_type" || next === "it_type";
    
    const res: HandlerResult = {
      replies: isServiceNext ? [t[lang].thankYou(name)] : [t[lang].askPhone],
      nextStep: next,
      leadUpdate: { name },
    };
    if (isServiceNext) _appendOptionsForFlow(next, lang, res);
    clearInvalidAttempts(session.id, "lead_name");
    return res;
  },

  lead_phone({ input, normInput, inputType, session, lang }) {
    const attempts = incrementInvalidAttempt(session.id, "lead_phone");
    let phone = input.replace(/\D/g, "");
    
    if (attempts > 2) {
       clearInvalidAttempts(session.id, "lead_phone");
       const fallbackPhone = inputType === "numeric" ? normInput.slice(0, 10) : "Unknown";
       const next = getNextLeadStep({ ...session.lead, phone: fallbackPhone });
       return {
         replies: [t[lang].askCity],
         nextStep: next,
         leadUpdate: { phone: fallbackPhone },
       };
    }

    if (inputType !== "phone") {
       return { replies: [t[lang].textGivenForPhone], nextStep: "lead_phone" };
    }

    const updated = { ...session.lead, phone };
    const next = getNextLeadStep(updated);
    const isServiceNext = next === "solar_type" || next === "civil_type" || next === "it_type";
    
    const res: HandlerResult = {
      replies: isServiceNext ? [t[lang].thankYou(session.lead.name || "Friend")] : [t[lang].askCity],
      nextStep: next,
      leadUpdate: { phone },
    };
    if (isServiceNext) _appendOptionsForFlow(next, lang, res);
    clearInvalidAttempts(session.id, "lead_phone");
    return res;
  },

  lead_city({ normInput, inputType, session, lang }) {
    const attempts = incrementInvalidAttempt(session.id, "lead_city");

    if (attempts > 2) {
       clearInvalidAttempts(session.id, "lead_city");
       const fallbackCity = normInput || "Unknown";
       const next = getNextServiceStep(session.lead.service);
       const res: HandlerResult = {
         replies: [t[lang].thankYou(session.lead.name || "Friend")],
         nextStep: next,
         leadUpdate: { city: fallbackCity },
         saveLead: true,
       };
       _appendOptionsForFlow(next, lang, res);
       return res;
    }

    if (inputType === "phone") {
      return { replies: [t[lang].phoneGivenForCity], nextStep: "lead_city" };
    }

    if (!validateCity(normInput)) {
      return { replies: [t[lang].invalidCity], nextStep: "lead_city" };
    }

    const next = getNextServiceStep(session.lead.service);
    const res: HandlerResult = {
      replies: [t[lang].thankYou(session.lead.name || "Friend")],
      nextStep: next,
      leadUpdate: { city: normInput },
      saveLead: true,
    };
    _appendOptionsForFlow(next, lang, res);
    clearInvalidAttempts(session.id, "lead_city");
    return res;
  },

  solar_type({ normInput, lang }) {
    const isCommercial = normInput.toLowerCase().includes("commercial") || normInput.includes("कमर्शियल");
    const solarType = isCommercial ? "commercial" : "home";
    return {
      replies: [t[lang].gridTypePrompt],
      nextStep: "solar_grid_type",
      leadUpdate: { solarType },
      options: [
        { label: lang === "en" ? "On Grid" : "ऑन-ग्रिड", value: "On Grid" },
        { label: lang === "en" ? "Hybrid" : "हाइब्रिड", value: "Hybrid" },
        ...(isCommercial ? [{ label: lang === "en" ? "Off Grid" : "ऑफ-ग्रिड", value: "Off Grid" }] : [])
      ]
    };
  },

  solar_grid_type({ normInput, lang }) {
    let gridType = "On Grid";
    const s = normInput.toLowerCase();
    if (s.includes("hybrid") || s.includes("हाइब्रिड")) gridType = "Hybrid";
    if (s.includes("off") || s.includes("ऑफ")) gridType = "Off Grid";

    return {
      replies: [t[lang].panelPrompt],
      nextStep: "solar_panel_brand",
      leadUpdate: { gridType },
      options: ["Waaree", "Vikram", "Adani", "Tata", "Luminous", "Goldi", "RenewSys", "Panasonic", "Trina", "Jinko"].map(l => ({ label: l, value: l }))
    };
  },

  solar_panel_brand({ normInput, session, lang }) {
    const s = normInput.toLowerCase();
    let inverterBrand = "Microtek";
    if (s.includes("tata")) inverterBrand = "Tata";
    else if (s.includes("loom")) inverterBrand = "Microtek";
    else if (s.includes("luminous")) inverterBrand = "Luminous";
    else if (s.includes("livguard")) inverterBrand = "Livguard";

    const updated = { ...session.lead, panelBrand: normInput, inverterBrand };

    if (updated.gridType === "Hybrid" || updated.gridType === "Off Grid") {
      return {
        replies: [t[lang].batteryPrompt],
        nextStep: "solar_battery_brand",
        leadUpdate: updated,
        options: ["Exide", "Luminous", "Okaya", "Amaron", "Eastman"].map(l => ({ label: l, value: l }))
      };
    }
    return {
      replies: [t[lang].terracePrompt],
      nextStep: "solar_details",
      leadUpdate: updated,
      options: [
        { label: lang === "en" ? "Yes" : "हाँ", value: "yes" },
        { label: lang === "en" ? "No" : "नहीं", value: "no" }
      ]
    };
  },

  solar_battery_brand({ normInput, lang }) {
    return {
      replies: [t[lang].terracePrompt],
      nextStep: "solar_details",
      leadUpdate: { batteryBrand: normInput },
      options: [
        { label: lang === "en" ? "Yes" : "हाँ", value: "yes" },
        { label: lang === "en" ? "No" : "नहीं", value: "no" }
      ]
    };
  },

  solar_details({ normInput, lang }) {
    const hasSpace = normInput.toLowerCase() === "yes" || normInput.includes("हाँ") || normInput.includes("yes");
    return {
      replies: [t[lang].askUnits],
      nextStep: "solar_units",
      leadUpdate: { hasSpace }
    };
  },

  solar_units({ normInput, inputType, session, lang }) {
    const attempts = incrementInvalidAttempt(session.id, "solar_units");
    
    const unitsMatch = normInput.match(/\d+/);
    const units = unitsMatch ? parseInt(unitsMatch[0], 10) : NaN;

    if (isNaN(units) || units <= 0) {
      if (attempts > 2) {
         clearInvalidAttempts(session.id, "solar_units");
         return { replies: [t[lang].finishChat], nextStep: "ai_chat" };
      }
      return { replies: [t[lang].invalidUnits], nextStep: "solar_units" };
    }

    const kw = Math.max(1, Math.round(units / 100));
    const solType = session.lead.solarType ?? "home";
    const price = calcPrice(kw, solType);
    const subsidy = solType === "home" ? calcSubsidy(kw) : 0;
    const score = units >= 300 ? "hot" : units >= 150 ? "warm" : "cold";

    const recMsg = `⚡ Based on **${units} units/month**, we recommend a **${kw}kW ${solType === "home" ? "Residential" : "Commercial"}** system.`;
    const priceLines = [
      `💰 **Estimated Cost:** ₹${price.toLocaleString("en-IN")}`,
      session.lead.panelBrand ? `🔋 **Components:** ${session.lead.panelBrand} Panels, ${session.lead.inverterBrand} Inverter${session.lead.batteryBrand ? `, ${session.lead.batteryBrand} Battery` : ''}` : null,
      subsidy > 0 ? `🏛️ **PM Surya Ghar Subsidy:** ₹${subsidy.toLocaleString("en-IN")} *(Net: ₹${(price - subsidy).toLocaleString("en-IN")})*` : null,
      `🏦 Easy loan options available at low interest rates.`,
    ].filter(Boolean).join("\n");

    clearInvalidAttempts(session.id, "solar_units");
    return {
      replies: [recMsg, priceLines, t[lang].wantQuote],
      nextStep: "solar_quotation",
      leadUpdate: { monthlyUnits: units, recommendedKw: kw, estimatedPrice: price, subsidyAmount: subsidy, score },
      saveLead: true,
      options: [
        { label: lang === "en" ? "✅ Yes, Download PDF" : "✅ हाँ, डाउनलोड करें", value: "yes" },
        { label: lang === "en" ? "❌ No, Thanks" : "❌ नहीं, धन्यवाद", value: "no" }
      ]
    };
  },

  solar_quotation({ normInput, lang }) {
    const isYes = normInput.toLowerCase() === "yes" || normInput.includes("हाँ") || normInput.includes("yes");
    return {
       // Flag UI to orchestrate background async PDF trigger
       replies: isYes ? ["Generating your tailored Quotation PDF..."] : [t[lang].finishChat],
       nextStep: "ai_chat",
       options: isYes ? [{ label: "TRIGGER_PDF", value: "TRIGGER_PDF" }] : [],
    }
  },

  civil_type({ normInput, lang }) {
    const s = normInput.toLowerCase();
    let ctype = "Residential";
    if (s.includes("commer") || s.includes("कमर्")) ctype = "Commercial";
    else if (s.includes("infra") || s.includes("बुनि")) ctype = "Infrastructure";
    return {
      replies: [t[lang].finishChat],
      nextStep: "ai_chat",
      leadUpdate: { projectType: ctype },
      saveLead: true
    };
  },

  it_type({ normInput, lang }) {
    const s = normInput.toLowerCase();
    let itype = "Website";
    if (s.includes("app") || s.includes("ऐप")) itype = "App";
    else if (s.includes("soft") || s.includes("सॉफ्")) itype = "Software";
    return {
      replies: [t[lang].finishChat],
      nextStep: "ai_chat",
      leadUpdate: { digitalNeed: itype },
      saveLead: true
    };
  },
};

// ─── THREE-LAYER PIPELINE ENTRY ───────────────────────────────────────

export async function processChatOrchestrator(
  session: ChatSession,
  rawInput: string,
  fullHistoryContext: any[]
): Promise<HandlerResult> {
  const normInput = normalizeInput(rawInput);
  const inputType = detectInputType(rawInput);
  const lang = session.lead.language || "en";

  // LAYER 1: DETERMINISTIC FLOW ENGINE
  if (session.step !== "ai_chat" && session.step !== "done") {
     const handler = handlers[session.step];
     if (handler) {
         // Attempt to process within the step. 
         // Invalid attempts within step bounds do not escape to AI.
         const result = handler({ session, input: rawInput, normInput, inputType, lang });
         if (result) return result;
     }
  }

  // LAYER 2: PAGE INDEX RAG
  const pageIndexAnswer = queryPageIndex(rawInput);
  if (pageIndexAnswer) {
      return {
          replies: [pageIndexAnswer],
          nextStep: session.step // Remain wherever they are
      };
  }

  // LAYER 3: OPENROUTER AI
  const fallbackAnswer = await askOpenRouter(session.id, session, rawInput, fullHistoryContext);
  return {
     replies: [fallbackAnswer],
     nextStep: session.step
  };
}

function _appendOptionsForFlow(nextStep: FlowStep, lang: Language, res: HandlerResult) {
   if (nextStep === "solar_type") {
      res.replies.push(t[lang].solarTypePrompt);
      res.options = [
        { label: lang === "en" ? "Home" : "घर", value: "home" },
        { label: lang === "en" ? "Commercial" : "कमर्शियल", value: "commercial" }
      ];
   } else if (nextStep === "civil_type") {
      res.replies.push(t[lang].civilTypePrompt);
      res.options = [
        { label: lang === "en" ? "Residential" : "आवासीय", value: "Residential" },
        { label: lang === "en" ? "Commercial" : "व्यावसायिक", value: "Commercial" },
        { label: lang === "en" ? "Infrastructure" : "इन्फ्रास्ट्रक्चर", value: "Infrastructure" }
      ];
   } else if (nextStep === "it_type") {
      res.replies.push(t[lang].itTypePrompt);
       res.options = [
        { label: lang === "en" ? "Website" : "वेबसाइट", value: "Website" },
        { label: lang === "en" ? "Mobile App" : "मोबाइल ऐप", value: "App" },
        { label: lang === "en" ? "Custom Software" : "कस्टम सॉफ्टवेयर", value: "Software" }
      ];
   }
}
