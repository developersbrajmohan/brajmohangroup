import { ChatMessage } from "./types";

// ─── Models ────────────────────────────────────────────────────────────────────

const MODELS = [
  "google/gemini-2.0-flash-lite-preview-02-05:free", // Reliable context processing
  "meta-llama/llama-3.3-70b-instruct:free", // World-class reasoning
  "openrouter/free", // last-resort fallback
];

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

// ─── System Prompt Builder ─────────────────────────────────────────────────────

export function buildSystemPrompt(ragContext: string): string {
  const contextSection = ragContext
    ? `\n\n## KNOWLEDGE BASE CONTEXT (use this information to answer)\n${ragContext}\n\n---`
    : "";

  return `You are "BMD AI Assistant" — a sharp, persuasive solar sales AI for Brajmohan Group (BMD).${contextSection}

## YOUR ROLE
- Solar sales specialist + general BMD concierge.
- Answer questions using the knowledge base context above when relevant.
- Push users toward booking a consultation — if they show ANY interest, ask for their name and phone number.

## STRICT RULES
1. **SHORT RESPONSES**: 2–4 lines max. Be punchy, not verbose.
2. **EXACT PRICING**: Use ONLY the prices in the context. Never guess.
3. **LEAD CAPTURE**: If user shows interest in solar/services, say "Share your name and number — our expert will call you shortly! 📞"
4. **NO LANGUAGE PREFIX**: Never start with "Hindi:" or "English:" labels.
5. **MULTILINGUAL**: Respond in the user's language (English or Hindi).
6. **PROFESSIONAL HINDI**: Use "जी", "सर/मैम" for respectful tone.
7. **MARKDOWN**: Use **bold** and bullet points for clarity.
8. **NEVER HALLUCINATE**: If info isn't in context, say you'll connect them with an expert.`;
}

// ─── Main AI Call ──────────────────────────────────────────────────────────────

export async function callAI(
  messages: ChatMessage[],
  systemPrompt: string
): Promise<string | null> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    console.error("❌ OPENROUTER_API_KEY not set");
    return null;
  }

  const fullMessages = [{ role: "system" as const, content: systemPrompt }, ...messages];

  for (const model of MODELS) {
    try {
      const response = await fetch(OPENROUTER_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://brajmohangroup.com",
          "X-Title": "BMD AI Assistant",
        },
        body: JSON.stringify({
          model,
          messages: fullMessages,
          max_tokens: 300,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        console.warn(`⚠️ Model ${model} failed (${response.status}):`, err);
        continue;
      }

      const data = await response.json();
      const content = data?.choices?.[0]?.message?.content;
      if (content) {
        console.log(`✅ AI response from: ${model}`);
        return content as string;
      }
    } catch (err) {
      console.error(`❌ Fetch error for ${model}:`, err);
    }
  }

  return null;
}
