import { knowledgeBase, KnowledgeChunk } from "./knowledge";

import Fuse from "fuse.js";

// ─── Fuse.js Configuration ────────────────────────────────────────────────────

const fuseOptions = {
  keys: [
    { name: "keywords", weight: 0.5 },
    { name: "topic", weight: 0.3 },
    { name: "content", weight: 0.2 },
  ],
  includeScore: true,
  threshold: 0.6, // 0.0 requires perfect match, 1.0 matches anything
  ignoreLocation: true,
};

const fuse = new Fuse(knowledgeBase, fuseOptions);

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Search the knowledge base for the most relevant chunks using Fuse.js.
 * Returns formatted context string to inject into the system prompt.
 */
export function searchKnowledge(query: string, topK = 3): string {
  if (!query || query.trim().length === 0) return "";

  const results = fuse.search(query);

  if (results.length === 0) return "";

  // Get the highest scoring results
  const topResults = results.slice(0, Math.min(topK, results.length));

  return topResults
    .map(({ item }) => `[${item.topic}]\n${item.content}`)
    .join("\n\n---\n\n");
}

/**
 * Get a single best-matching chunk (for targeted lookups).
 */
export function getBestMatch(query: string): KnowledgeChunk | null {
  if (!query || query.trim().length === 0) return null;

  const results = fuse.search(query);

  if (results.length > 0) {
    return results[0].item;
  }

  return null;
}
