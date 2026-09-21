"use server";

import { headers } from "next/headers";
import { z } from "zod";

import { db } from "@/lib/db";
import { pruneRateLimits, rateLimit } from "@/lib/rate-limit";
import { LeadType } from "@/generated/prisma/enums";

/** Minimum time a human needs to fill the form; anything faster is a bot. */
const MIN_FILL_MS = 3000;

const schema = z.object({
  type: z.enum(["DEMO", "CONTACT", "CALLBACK", "PRICING", "TOOL"]),
  name: z.string().trim().min(2).max(120),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  phone: z
    .string()
    .trim()
    .min(7)
    .max(32)
    .regex(/^[\d\s+()-]+$/),
  email: z.string().trim().email().max(160).optional().or(z.literal("")),
  employees: z.string().trim().max(32).optional().or(z.literal("")),
  sector: z.string().trim().max(64).optional().or(z.literal("")),
  modules: z.array(z.string().max(32)).max(12).optional(),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  locale: z.string().trim().max(8),
  sourcePath: z.string().trim().max(512),
  utmSource: z.string().trim().max(120).optional().or(z.literal("")),
  utmMedium: z.string().trim().max(120).optional().or(z.literal("")),
  utmCampaign: z.string().trim().max(160).optional().or(z.literal("")),
});

export type LeadState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; reason: "validation" | "rate" | "tooFast" | "server" };

function clean(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value : "";
}

export async function submitLead(
  _previous: LeadState,
  formData: FormData,
): Promise<LeadState> {
  // Honeypot: a real person never sees or fills this field.
  if (clean(formData.get("website")).length > 0) return { status: "success" };

  const startedAt = Number.parseInt(clean(formData.get("startedAt")), 10);
  if (Number.isFinite(startedAt) && Date.now() - startedAt < MIN_FILL_MS) {
    return { status: "error", reason: "tooFast" };
  }

  const parsed = schema.safeParse({
    type: clean(formData.get("type")) || "CONTACT",
    name: clean(formData.get("name")),
    company: clean(formData.get("company")),
    phone: clean(formData.get("phone")),
    email: clean(formData.get("email")),
    employees: clean(formData.get("employees")),
    sector: clean(formData.get("sector")),
    modules: formData.getAll("modules").map((value) => String(value)),
    message: clean(formData.get("message")),
    locale: clean(formData.get("locale")) || "az",
    sourcePath: clean(formData.get("sourcePath")) || "/",
    utmSource: clean(formData.get("utmSource")),
    utmMedium: clean(formData.get("utmMedium")),
    utmCampaign: clean(formData.get("utmCampaign")),
  });

  if (!parsed.success) return { status: "error", reason: "validation" };

  const headerList = await headers();
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headerList.get("x-real-ip") ??
    "unknown";

  pruneRateLimits();
  if (!rateLimit(`lead:${ip}`).ok) return { status: "error", reason: "rate" };

  const data = parsed.data;

  try {
    await db.lead.create({
      data: {
        type: data.type as LeadType,
        name: data.name,
        company: data.company || null,
        phone: data.phone,
        email: data.email || null,
        employees: data.employees || null,
        sector: data.sector || null,
        modules: data.modules ?? [],
        message: data.message || null,
        locale: data.locale,
        sourcePath: data.sourcePath,
        utmSource: data.utmSource || null,
        utmMedium: data.utmMedium || null,
        utmCampaign: data.utmCampaign || null,
      },
    });
  } catch (error) {
    console.error("[lead] could not be saved", error);
    return { status: "error", reason: "server" };
  }

  return { status: "success" };
}
