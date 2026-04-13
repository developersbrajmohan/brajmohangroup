"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Language, Message, QuickReply, ChatMessage, LeadData } from "@/lib/types";

// ─── Translations ──────────────────────────────────────────────────────────────

const t = {
  en: {
    welcome: "Welcome to Brajmohan Group (BMD)! ☀️ How can I help you today?",
    selectLang: "Please select your language:",
    aiPlaceholder: "Ask me anything…",
    proactivePopup: "Hi! Ask about Solar Energy? ☀️",
  },
  hi: {
    welcome: "ब्रजमोहन ग्रुप (BMD) में आपका स्वागत है! ☀️ आज हम आपकी क्या मदद कर सकते हैं?",
    selectLang: "कृपया अपनी भाषा चुनें:",
    aiPlaceholder: "कुछ भी पूछें…",
    proactivePopup: "नमस्ते! सोलर के बारे में पूछें? ☀️",
  },
} as const;

// ─── Helper ────────────────────────────────────────────────────────────────────

function makeId() {
  return Math.random().toString(36).slice(2, 9);
}

function makeMsg(role: Message["role"], content: string, options?: QuickReply[]): Message {
  return { id: makeId(), role, content, options };
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function SolarChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [leadState, setLeadState] = useState<LeadData>({ language: "en" });
  
  const [sessionId] = useState(() => makeId() + Date.now().toString());
  const language = leadState?.language || "en";
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // ── Scroll ──────────────────────────────────────────────────────────────────

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isGeneratingPDF]);

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
          makeMsg("bot", t[language].selectLang, [
             { label: "🇬🇧 English", value: "en" },
             { label: "🇮🇳 हिंदी", value: "hi" }
          ]),
        ]);
      }
    }
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Message helpers ─────────────────────────────────────────────────────────

  const addBot = useCallback((text: string, options?: QuickReply[]) => {
    setMessages(prev => [...prev, makeMsg("bot", text, options)]);
  }, []);

  const addUser = useCallback((text: string) => {
    setMessages(prev => {
      const next = [...prev];
      for (let i = next.length - 1; i >= 0; i--) {
        if (next[i].role === "bot") {
           next[i] = { ...next[i], options: undefined };
           break;
        }
      }
      return [...next, makeMsg("user", text)];
    });
  }, []);

  // ── Text Input Handler ──────────────────────────────────────────────────────

  const handleInput = async (e?: React.FormEvent, directValue?: string, directLabel?: string) => {
    e?.preventDefault();
    const val = directValue || inputValue.trim();
    if (!val || isTyping) return;
    
    addUser(directLabel || val);
    setInputValue("");
    setIsTyping(true);

    try {
      const chatMessages: ChatMessage[] = messages
        .filter(m => m.content && m.content.length > 0)
        .map(m => ({ role: m.role === "bot" ? "assistant" : "user", content: m.content as string }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          input: val,
          messages: chatMessages,
        }),
      });

      const data = await res.json();
      
      if (data.options?.find((o: any) => o.value === "TRIGGER_PDF")) {
         setIsGeneratingPDF(true);
         const currentLead = data.leadState || leadState || {};
         fetch("/api/pdf", {
             method: "POST",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify(currentLead)
         }).then(r => r.blob()).then(blob => {
             const url = window.URL.createObjectURL(blob);
             const a = document.createElement('a');
             a.href = url;
             a.download = `BMD_Quotation.pdf`;
             a.click();
             setIsGeneratingPDF(false);
         }).catch(err => {
             console.error("PDF generation failed:", err);
             setIsGeneratingPDF(false);
         });
         data.options = [];
      }

      if (data.leadState) {
         setLeadState(data.leadState);
      }

      if (data.replies) {
          data.replies.forEach((r: string, i: number) => {
            const isLast = i === data.replies.length - 1;
            setTimeout(() => {
               addBot(r, isLast ? data.options : undefined);
            }, 400 + i * 400);
          });
          
          if (data.replies.length === 0 && data.options) {
             addBot("", data.options);
          }
      }

    } catch (err) {
      console.error(err);
      addBot("I'm having trouble right now. Please try again! 🙏");
    } finally {
      setIsTyping(false);
    }
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
              {messages.map((msg, idx) => {
                 const isLast = idx === messages.length - 1;
                 
                 if (!msg.content && msg.options) {
                    return (
                      <div key={msg.id} className="pt-1 w-full ml-9">
                        {isLast && msg.options && msg.options.length > 0 && (
                            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap gap-2">
                            {msg.options.map((o: any) => (
                                <QuickBtn key={o.value} onClick={() => handleInput(undefined, o.value, o.label)}>{o.label}</QuickBtn>
                            ))}
                            </motion.div>
                        )}
                      </div>
                    )
                 }
                 
                 return (
                  <div key={msg.id} className="space-y-2">
                    <motion.div
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
                          "max-w-[85%] px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line",
                          msg.role === "bot"
                            ? "bg-white/[0.07] text-white/92 border border-white/[0.08] rounded-2xl rounded-bl-md"
                            : "bg-gradient-to-br from-bmd-gold to-[#c8960c] text-[#091422] font-semibold rounded-2xl rounded-br-md shadow-md shadow-bmd-gold/20"
                        )}
                      >
                        {msg.content}
                      </div>
                    </motion.div>
                   
                    {isLast && msg.options && msg.options.length > 0 && (
                      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap gap-2 pt-1 ml-9">
                        {msg.options.map((o: any) => {
                           if (isGeneratingPDF && o.value === "yes") {
                              return (
                                <button key="gen" disabled className="px-4 py-2 bg-gradient-to-r from-bmd-gold to-[#B8860B] text-[#091422] rounded-xl font-bold text-sm flex items-center gap-2 opacity-80">
                                   <Loader2 className="w-4 h-4 animate-spin" />
                                   {language === "en" ? "Generating..." : "बनाया जा रहा है..."}
                                </button>
                              );
                           }
                           return (
                             <QuickBtn 
                               key={o.value} 
                               onClick={() => handleInput(undefined, o.value, o.label)}
                             >
                               {o.label}
                             </QuickBtn>
                           );
                        })}
                      </motion.div>
                    )}
                  </div>
                 );
              })}

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
                  placeholder={t[language]?.aiPlaceholder || t["en"].aiPlaceholder}
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
              {t[language]?.proactivePopup || t["en"].proactivePopup}
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
      className="flex items-center gap-1.5 px-4 py-2 bg-white/[0.06] border border-white/[0.1] rounded-full text-white/85 text-sm hover:bg-bmd-gold/10 hover:border-bmd-gold/50 hover:text-white transition-all font-medium"
    >
      {icon}
      {children}
    </button>
  );
}
