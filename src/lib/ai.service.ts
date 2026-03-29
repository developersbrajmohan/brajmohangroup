import { ChatMessage, ChatSession } from "./types";
import { incrementAiCall } from "./session.service";

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";
const MAX_AI_CALLS_PER_SESSION = 10;

const MODELS = [
  "google/gemini-2.0-flash-lite-preview-02-05:free",
  "meta-llama/llama-3.3-70b-instruct:free",
  "openrouter/free"
];

// Exact match FAQ & intent caching to prevent LLM spin-up
const aiCache = new Map<string, string>();

/**
 * Normalizes query string for cache keys
 */
function normalizeQuery(q: string): string {
  return q.toLowerCase().replace(/[^a-z0-9]/g, "").trim();
}

const safeFallbackMessage = "I'm having a bit of trouble retrieving that right now. Could you please rephrase, or would you like me to connect you with an expert? 👨‍💼";

export async function askOpenRouter(
  sessionId: string,
  session: ChatSession,
  query: string,
  messages: ChatMessage[]
): Promise<string> {
  const normQuery = normalizeQuery(query);

  if (aiCache.has(normQuery)) {
     return aiCache.get(normQuery)!;
  }

  // Cost bounding check
  if (session.aiCallCount >= MAX_AI_CALLS_PER_SESSION) {
     return "I've reached my automated conversation limit for this session! 😅 Please contact us on WhatsApp or call our support line directly to proceed.";
  }

  // Record attempting AI
  incrementAiCall(sessionId);

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    console.warn("Missing OPENROUTER_API_KEY!");
    return safeFallbackMessage;
  }

  const systemParams = `You are BMD AI Assistant. Be extremely concise. Max 3 sentences. You handle ONLY questions that the predefined deterministic flow and document index cannot. You represent Brajmohan Group (BMD). Never hallucinate pricing or stats. If you do not know, state you'll connect them with a human.`;

  const fullMessages = [{ role: "system" as const, content: systemParams }, ...messages.slice(-5)];

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
          max_tokens: 200,
          temperature: 0.5,
        }),
      });

      if (!response.ok) continue;

      const data = await response.json();
      const content = data?.choices?.[0]?.message?.content;
      
      if (content) {
         if (content.length > 10) aiCache.set(normQuery, content);
         return content;
      }
    } catch (err) {
      console.error(`AI Fetch Error with ${model}`, err);
    }
  }

  return safeFallbackMessage;
}
