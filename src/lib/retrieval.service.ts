import Fuse from "fuse.js";
import { knowledgeBase } from "./knowledge";

const SCORE_THRESHOLD = 0.4; // Valid matches must score better (lower) than 0.4 in Fuse

// In-memory caching for repeatedly asked questions.
const semanticCache = new Map<string, string>();

const fuseOptions = {
  keys: [
    { name: "keywords", weight: 0.6 },
    { name: "topic", weight: 0.3 },
    { name: "content", weight: 0.1 },
  ],
  includeScore: true,
  threshold: 0.6,
  ignoreLocation: true,
};

const fuse = new Fuse(knowledgeBase, fuseOptions);

/**
 * Normalizes query string for cache keys
 */
function normalizeQuery(q: string): string {
  return q.toLowerCase().replace(/[^a-z0-9]/g, "").trim();
}

/**
 * Searches the PageIndex (Fuse.js) for structured document answers.
 * Only returns an answer if the retrieval confidence (score) is strictly better than SCORE_THRESHOLD.
 */
export function queryPageIndex(query: string): string | null {
  if (!query || query.trim().length <= 2) return null;

  const cacheKey = normalizeQuery(query);
  if (semanticCache.has(cacheKey)) {
    return semanticCache.get(cacheKey) || null;
  }

  const results = fuse.search(query);

  if (results.length > 0) {
    const topMatch = results[0];
    // Fuse score is 0.0 (perfect) to 1.0 (mismatch)
    if (topMatch.score !== undefined && topMatch.score < SCORE_THRESHOLD) {
       const answer = `[From our Docs: ${topMatch.item.topic}]\n${topMatch.item.content}`;
       semanticCache.set(cacheKey, answer); // cache the successful retrieval
       return answer;
    }
  }

  return null;
}
