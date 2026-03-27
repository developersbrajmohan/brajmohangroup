"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare, X, Send, Sun, Bot, Home, Building2, Globe, Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { processMessage, extractLeadFromText } from "@/lib/chat-handler";
import type { FlowStep, Language, LeadData, Message } from "@/lib/types";
import type { ChatMessage } from "@/lib/types";

// ─── Translations ──────────────────────────────────────────────────────────────

const t = {
  en: {
    welcome: "Welcome to Brajmohan Group (BMD)! ☀️ How can I help you today?",
    selectLang: "Please select your language:",
    services: "What are you interested in?",
    solar: "Solar Energy (PM Surya Ghar)",
    construction: "Civil Construction",
    it: "Web & App Development",
    aiPlaceholder: "Ask me anything…",
    proactivePopup: "Hi! Ask about Solar Energy? ☀️",
    solarTypePrompt: "Is this for your Home or Commercial property?",
    civilTypePrompt: "What type of construction do you need?",
    itTypePrompt: "What kind of digital service are you looking for?",
    home: "Home",
    commercial: "Commercial",
    terracePrompt: "Do you have rooftop/terrace space available?",
    yes: "Yes",
    no: "No",
    residential: "Residential",
    infrastructure: "Infrastructure",
    website: "Website",
    app: "Mobile App",
    software: "Custom Software",
  },
  hi: {
    welcome: "ब्रजमोहन ग्रुप (BMD) में आपका स्वागत है! ☀️ आज हम आपकी क्या मदद कर सकते हैं?",
    selectLang: "कृपया अपनी भाषा चुनें:",
    services: "आप किसमें रुचि रखते हैं?",
    solar: "सौर ऊर्जा (पीएम सूर्य घर)",
    construction: "सिविल कंस्ट्रक्शन",
    it: "वेब और ऐप डेवलपमेंट",
    aiPlaceholder: "कुछ भी पूछें…",
    proactivePopup: "नमस्ते! सोलर के बारे में पूछें? ☀️",
    solarTypePrompt: "यह घर के लिए है या कमर्शियल के लिए?",
    civilTypePrompt: "आपको किस प्रकार के निर्माण की आवश्यकता है?",
    itTypePrompt: "आप किस तरह की डिजिटल सेवा ढूंढ रहे हैं?",
    home: "घर",
    commercial: "कमर्शियल",
    terracePrompt: "क्या आपके पास छत की जगह उपलब्ध है?",
    yes: "हाँ",
    no: "नहीं",
    residential: "आवासीय (रेसिडेंशियल)",
    infrastructure: "बुनियादी ढांचा (इन्फ्रास्ट्रक्चर)",
    website: "वेबसाइट",
    app: "मोबाइल ऐप",
    software: "कस्टम सॉफ्टवेयर",
  },
} as const;

// ─── Helper ────────────────────────────────────────────────────────────────────

function makeId() {
  return Math.random().toString(36).slice(2, 9);
}

function makeMsg(role: Message["role"], content: string): Message {
  return { id: makeId(), role, content };
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function SolarChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [step, setStep] = useState<FlowStep>("language");
  const [language, setLanguage] = useState<Language>("en");
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [lead, setLead] = useState<LeadData>({ language: "en" });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // ── Scroll ──────────────────────────────────────────────────────────────────

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // ── Proactive Popup ─────────────────────────────────────────────────────────

  useEffect(() => {
    const timer = setTimeout(() => { if (!isOpen) setShowPopup(true); }, 3000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  // ── Init Chat on Open ───────────────────────────────────────────────────────

  useEffect(() => {
    if (isOpen) {
      setShowPopup(false);
      if (messages.length === 0) {
        setMessages([
          makeMsg("bot", t[language].welcome),
          makeMsg("bot", t[language].selectLang),
        ]);
      }
    }
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Message helpers ─────────────────────────────────────────────────────────

  const addBot = useCallback((text: string) => {
    setMessages(prev => [...prev, makeMsg("bot", text)]);
  }, []);

  const addUser = useCallback((text: string) => {
    setMessages(prev => [...prev, makeMsg("user", text)]);
  }, []);

  const addBotDelayed = useCallback((text: string, delay = 500) => {
    setTimeout(() => addBot(text), delay);
  }, [addBot]);

  // ── Save Lead ───────────────────────────────────────────────────────────────

  const saveLead = useCallback(async (data: LeadData) => {
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.error("Failed to save lead:", err);
    }
  }, []);

  // ── AI Chat ─────────────────────────────────────────────────────────────────

  const callAIChat = useCallback(async (userInput: string, history: Message[]) => {
    setIsTyping(true);
    try {
      const chatMessages: ChatMessage[] = history
        .filter(m => typeof m.content === "string")
        .map(m => ({ role: m.role === "bot" ? "assistant" : "user", content: m.content as string }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...chatMessages, { role: "user", content: userInput }],
          query: userInput,
        }),
      });

      const data = await res.json();
      addBot(data.content ?? "I'm having trouble right now. Please try again! 🙏");
    } catch {
      addBot("I'm having trouble right now. Please try again! 🙏");
    } finally {
      setIsTyping(false);
    }
  }, [addBot]);

  // ── Language Select ─────────────────────────────────────────────────────────

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    setLead(prev => ({ ...prev, language: lang }));
    addUser(lang === "en" ? "English" : "हिंदी");
    setStep("service");
    setTimeout(() => addBot(t[lang].services), 500);
  };

  // ── Service Select ──────────────────────────────────────────────────────────

  const handleServiceSelect = (label: string, serviceKey: string) => {
    addUser(label);
    setLead(prev => ({ ...prev, service: serviceKey }));
    setStep("lead_name");
    setTimeout(() => addBot(language === "en" ? "What's your name?" : "आपका नाम क्या है?"), 500);
  };

  // ── Solar Type Select ───────────────────────────────────────────────────────

  const handleSolarType = (type: "home" | "commercial") => {
    addUser(t[language][type]);
    setLead(prev => ({ ...prev, solarType: type }));
    setStep("solar_details");
    setTimeout(() => addBot(t[language].terracePrompt), 500);
  };

  const handleCivilType = (type: "Residential" | "Commercial" | "Infrastructure") => {
    addUser(type === "Residential" ? t[language].residential : type === "Commercial" ? t[language].commercial : t[language].infrastructure);
    const newLead = { ...lead, projectType: type };
    setLead(newLead);
    setStep("ai_chat");
    setTimeout(() => addBot(language === "en" ? "Great! Our team will contact you soon. 🚀 Meanwhile, feel free to ask me anything." : "बहुत बढ़िया! हमारी टीम जल्द ही आपसे संपर्क करेगी। 🚀 इस बीच, बेझिझक कुछ भी पूछें।"), 500);
    saveLead(newLead);
  };

  const handleItType = (type: "Website" | "App" | "Software") => {
    addUser(type === "Website" ? t[language].website : type === "App" ? t[language].app : t[language].software);
    const newLead = { ...lead, digitalNeed: type };
    setLead(newLead);
    setStep("ai_chat");
    setTimeout(() => addBot(language === "en" ? "Great! Our team will contact you soon. 🚀 Meanwhile, feel free to ask me anything." : "बहुत बढ़िया! हमारी टीम जल्द ही आपसे संपर्क करेगी। 🚀 इस बीच, बेझिझक कुछ भी पूछें।"), 500);
    saveLead(newLead);
  };

  // ── Terrace Select ──────────────────────────────────────────────────────────

  const handleTerraceSelect = (hasSpace: boolean) => {
    addUser(hasSpace ? t[language].yes : t[language].no);
    setLead(prev => ({ ...prev, hasSpace }));
    setStep("solar_units");
    setTimeout(() => {
      addBot(language === "en"
        ? "What's your average monthly electricity usage? (in units, e.g. 200)"
        : "आपकी औसत मासिक बिजली खपत कितनी है? (यूनिट में, जैसे 200)");
    }, 500);
  };

  // ── Text Input Handler ──────────────────────────────────────────────────────

  const handleInput = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const val = inputValue.trim();
    if (!val || isTyping) return;
    setInputValue("");
    addUser(val);

    // Always try to extract lead info from free text (cheap regex, no AI call)
    const extracted = extractLeadFromText(val);
    const updatedLead = { ...lead };
    if (extracted.name && !updatedLead.name) updatedLead.name = extracted.name;
    if (extracted.phone && !updatedLead.phone) updatedLead.phone = extracted.phone;
    setLead(updatedLead);

    // Route to handler or AI
    if (step === "ai_chat" || step === "recommendation" || step === "language" || step === "service") {
      if (step !== "ai_chat") setStep("ai_chat");
      await callAIChat(val, messages);
      return;
    }

    const result = processMessage(step, val, updatedLead);
    if (!result) {
      // Fallback to AI if no handler
      setStep("ai_chat");
      await callAIChat(val, messages);
      return;
    }

    // Apply lead updates
    if (result.leadUpdate) {
      const newLead = { ...updatedLead, ...result.leadUpdate };
      setLead(newLead);

      if (result.saveLead) {
        await saveLead(newLead as LeadData);
      }

      // If non-solar service and we just got city, save and transition
      if (result.saveLead && result.nextStep === "ai_chat") {
        // Already handled
      }
      
      const stepPromptMap: Record<string, string> = {
        solar_type: t[language].solarTypePrompt,
        civil_type: t[language].civilTypePrompt,
        it_type: t[language].itTypePrompt
      };

      if (result.nextStep in stepPromptMap) {
        setStep(result.nextStep);
        result.replies.forEach((r, i) => addBotDelayed(r, 500 + i * 400));
        setTimeout(() => addBot(stepPromptMap[result.nextStep]), 500 + result.replies.length * 400);
        return;
      }
    }

    // Advance step and post replies
    setStep(result.nextStep);
    result.replies.forEach((r, i) => addBotDelayed(r, 500 + i * 600));
  };

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end">
      {/* ── Chat Window ───────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 14 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="mb-4 w-[calc(100vw-2rem)] sm:w-[390px] h-[580px] flex flex-col rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.55)] border border-white/[0.08] origin-bottom-right"
            style={{ background: "linear-gradient(160deg,#0e1e35 0%,#091422 100%)" }}
          >
            {/* ── Header ─────────────────────────────────────────── */}
            <div
              className="flex items-center justify-between px-5 py-4 border-b border-white/[0.07] flex-shrink-0"
              style={{ background: "linear-gradient(135deg,rgba(212,175,55,0.15) 0%,rgba(212,175,55,0.03) 100%)" }}
            >
              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-bmd-gold to-[#B8860B] flex items-center justify-center text-[#091422] shadow-md shadow-bmd-gold/25">
                    <Bot className="w-5 h-5" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-[#091422] rounded-full" />
                </div>
                <div>
                  <p className="text-white text-sm font-bold leading-tight">BMD Assistant</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400/90 text-[10px] font-medium tracking-wide">Online · Replies instantly</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* ── Messages ───────────────────────────────────────── */}
            <div className="flex-1 overflow-y-auto px-4 py-5 space-y-3 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18 }}
                  className={cn("flex items-end gap-2", msg.role === "bot" ? "justify-start" : "justify-end")}
                >
                  {msg.role === "bot" && (
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-bmd-gold to-[#B8860B] flex items-center justify-center text-[#091422] flex-shrink-0 mb-0.5 shadow-sm">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}
                  <div
                    className={cn(
                      "max-w-[76%] px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line",
                      msg.role === "bot"
                        ? "bg-white/[0.07] text-white/92 border border-white/[0.08] rounded-2xl rounded-bl-md"
                        : "bg-gradient-to-br from-bmd-gold to-[#c8960c] text-[#091422] font-semibold rounded-2xl rounded-br-md shadow-md shadow-bmd-gold/20"
                    )}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {/* ── Quick-reply buttons ─────────────────────────── */}
              <AnimatePresence>
                {step === "language" && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex gap-2 ml-9 pt-1">
                    <QuickBtn onClick={() => handleLanguageSelect("en")}>🇬🇧 English</QuickBtn>
                    <QuickBtn onClick={() => handleLanguageSelect("hi")}>🇮🇳 हिंदी</QuickBtn>
                  </motion.div>
                )}

                {step === "service" && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 gap-2 ml-9 pt-1">
                    {[
                      { id: "solar", label: t[language].solar, emoji: "☀️" },
                      { id: "civil", label: t[language].construction, emoji: "🏗️" },
                      { id: "it", label: t[language].it, emoji: "💻" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleServiceSelect(item.label, item.id)}
                        className="flex items-center gap-3 px-4 py-3 bg-white/[0.05] border border-white/[0.09] rounded-xl text-white/90 text-sm hover:border-bmd-gold/60 hover:bg-white/[0.09] transition-all text-left"
                      >
                        <span className="text-base leading-none">{item.emoji}</span>
                        <span className="font-medium">{item.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}

                {step === "solar_type" && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex gap-2 ml-9 pt-1">
                    <QuickBtn icon={<Home className="w-3.5 h-3.5" />} onClick={() => handleSolarType("home")}>{t[language].home}</QuickBtn>
                    <QuickBtn icon={<Building2 className="w-3.5 h-3.5" />} onClick={() => handleSolarType("commercial")}>{t[language].commercial}</QuickBtn>
                  </motion.div>
                )}

                {step === "civil_type" && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap gap-2 ml-9 pt-1">
                    <QuickBtn onClick={() => handleCivilType("Residential")}>{t[language].residential}</QuickBtn>
                    <QuickBtn onClick={() => handleCivilType("Commercial")}>{t[language].commercial}</QuickBtn>
                    <QuickBtn onClick={() => handleCivilType("Infrastructure")}>{t[language].infrastructure}</QuickBtn>
                  </motion.div>
                )}

                {step === "it_type" && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap gap-2 ml-9 pt-1">
                    <QuickBtn onClick={() => handleItType("Website")}>{t[language].website}</QuickBtn>
                    <QuickBtn onClick={() => handleItType("App")}>{t[language].app}</QuickBtn>
                    <QuickBtn onClick={() => handleItType("Software")}>{t[language].software}</QuickBtn>
                  </motion.div>
                )}

                {step === "solar_details" && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex gap-2 ml-9 pt-1">
                    <QuickBtn onClick={() => handleTerraceSelect(true)}>{t[language].yes}</QuickBtn>
                    <QuickBtn onClick={() => handleTerraceSelect(false)}>{t[language].no}</QuickBtn>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ── Typing indicator ────────────────────────────── */}
              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-end gap-2">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-bmd-gold to-[#B8860B] flex items-center justify-center text-[#091422] flex-shrink-0 shadow-sm">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-white/[0.07] border border-white/[0.08] px-4 py-3 rounded-2xl rounded-bl-md flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-bmd-gold/60 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-2 h-2 bg-bmd-gold/60 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-2 h-2 bg-bmd-gold/60 rounded-full animate-bounce" />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* ── Input ──────────────────────────────────────────── */}
            <div className="px-4 pb-4 pt-3 border-t border-white/[0.06] flex-shrink-0" style={{ background: "rgba(255,255,255,0.015)" }}>
              <form onSubmit={handleInput} className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={t[language].aiPlaceholder}
                  className="flex-1 bg-white/[0.06] border border-white/[0.09] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-bmd-gold/40 focus:bg-white/[0.09] transition-all"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="w-10 h-10 flex-shrink-0 rounded-xl bg-gradient-to-br from-bmd-gold to-[#B8860B] flex items-center justify-center text-[#091422] disabled:opacity-25 disabled:grayscale transition-all hover:scale-105 active:scale-95 shadow-md shadow-bmd-gold/20"
                >
                  {isTyping ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Proactive Popup ──────────────────────────────────────────────── */}
      <AnimatePresence>
        {showPopup && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 10, scale: 0.9, filter: "blur(10px)" }}
            className="absolute bottom-[4.5rem] right-0 bg-bmd-navy/80 backdrop-blur-xl text-white px-6 py-3 rounded-[1.5rem] rounded-br-none shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-white/10 whitespace-nowrap z-50 pointer-events-none ring-1 ring-white/10 origin-bottom-right"
          >
            <p className="text-xs font-bold flex items-center gap-3 tracking-wide">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
              {t[language].proactivePopup}
            </p>
            <div className="absolute -bottom-2 right-4 w-4 h-4 bg-bmd-navy/90 border-r border-b border-white/10 rotate-45 backdrop-blur-xl" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Toggle Button ────────────────────────────────────────────────── */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-2xl flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-colors duration-200",
          isOpen
            ? "bg-white/90 text-bmd-navy"
            : "bg-gradient-to-br from-bmd-gold via-[#DAA520] to-[#B8860B] text-bmd-navy"
        )}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <div className="relative">
            <Bot className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 border border-bmd-gold rounded-full" />
          </div>
        )}
      </motion.button>
    </div>
  );
}

// ─── QuickBtn Sub-component ────────────────────────────────────────────────────

function QuickBtn({
  onClick,
  children,
  icon,
}: {
  onClick: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 px-4 py-2 bg-white/[0.06] border border-white/[0.1] rounded-full text-white/85 text-xs hover:bg-bmd-gold/10 hover:border-bmd-gold/50 hover:text-white transition-all font-semibold"
    >
      {icon}
      {children}
    </button>
  );
}
