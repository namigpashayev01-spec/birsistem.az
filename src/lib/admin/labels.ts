import type { LeadStatus, LeadType } from "@/generated/prisma/enums";

/** The panel is used by the team in Baku, so it speaks Azerbaijani only. */
export const STATUS_LABEL: Record<LeadStatus, string> = {
  NEW: "Yeni",
  CONTACTED: "Əlaqə saxlanılıb",
  QUALIFIED: "Uyğundur",
  WON: "Müştəri oldu",
  LOST: "İtirildi",
  SPAM: "Spam",
};

/** Order of work: a lead moves left to right, and spam sits apart at the end. */
export const STATUS_ORDER: LeadStatus[] = ["NEW", "CONTACTED", "QUALIFIED", "WON", "LOST", "SPAM"];

export const TYPE_LABEL: Record<LeadType, string> = {
  DEMO: "Demo",
  CONTACT: "Əlaqə",
  CALLBACK: "Zəng sifarişi",
  PRICING: "Qiymət təklifi",
  TOOL: "Kalkulyator",
};

export const TYPE_ORDER: LeadType[] = ["DEMO", "PRICING", "CONTACT", "CALLBACK", "TOOL"];

/**
 * One tone per stage. Red is kept for "needs you now" — a new, unanswered
 * lead — which is the only thing in the list that should pull the eye.
 */
export const STATUS_TONE: Record<LeadStatus, string> = {
  NEW: "bg-brand text-white",
  CONTACTED: "bg-cloud-deep text-ink",
  QUALIFIED: "bg-brand-soft text-brand-ink",
  WON: "bg-ok-soft text-ok",
  LOST: "bg-cloud text-ink-50",
  SPAM: "bg-cloud text-ink-50 line-through",
};

export function isStatus(value: unknown): value is LeadStatus {
  return typeof value === "string" && value in STATUS_LABEL;
}

export function isType(value: unknown): value is LeadType {
  return typeof value === "string" && value in TYPE_LABEL;
}

/** Day-first with time, in Baku time — how the team reads a timestamp. */
export function formatWhen(date: Date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Baku",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);
  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? "";
  return `${get("day")}.${get("month")}.${get("year")} ${get("hour")}:${get("minute")}`;
}
