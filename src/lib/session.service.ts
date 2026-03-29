import { ChatSession, FlowStep } from "./types";

const SESSION_TTL_MS = 60 * 60 * 1000; // 1 hour

// In-memory store for sessions (WARNING: state will reset on server restart)
// For a multi-instance production backend, replace this with Redis.
const memorySessions = new Map<string, ChatSession>();

export function getSession(id: string): ChatSession {
  const existing = memorySessions.get(id);
  const now = Date.now();

  if (existing) {
    // Check TTL
    if (now - existing.lastUpdated > SESSION_TTL_MS) {
      memorySessions.delete(id);
      return createSession(id, now);
    }
    return existing;
  }

  return createSession(id, now);
}

function createSession(id: string, now: number): ChatSession {
  const newSession: ChatSession = {
    id,
    step: "language",
    language: "en",
    lead: { language: "en" },
    invalidAttempts: {},
    aiCallCount: 0,
    lastUpdated: now,
  };
  memorySessions.set(id, newSession);
  return newSession;
}

export function updateSession(id: string, updates: Partial<ChatSession>): ChatSession {
  const session = getSession(id);
  const updated = {
    ...session,
    ...updates,
    // explicitly deep merge the lead if passed, or rely on caller to pass merged lead
    lead: updates.lead ? { ...session.lead, ...updates.lead } : session.lead,
    lastUpdated: Date.now(),
  };
  memorySessions.set(id, updated);
  return updated;
}

export function incrementAiCall(id: string): number {
  const session = getSession(id);
  const count = session.aiCallCount + 1;
  updateSession(id, { aiCallCount: count });
  return count;
}

export function incrementInvalidAttempt(id: string, step: FlowStep): number {
  const session = getSession(id);
  const count = (session.invalidAttempts[step] || 0) + 1;
  updateSession(id, { 
    invalidAttempts: { ...session.invalidAttempts, [step]: count }
  });
  return count;
}

export function clearInvalidAttempts(id: string, step: FlowStep) {
  const session = getSession(id);
  const updatedAttempts = { ...session.invalidAttempts };
  delete updatedAttempts[step];
  updateSession(id, { invalidAttempts: updatedAttempts });
}
