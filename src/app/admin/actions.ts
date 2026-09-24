"use server";

import { headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import { db } from "@/lib/db";
import { rateLimit } from "@/lib/rate-limit";
import { LeadStatus } from "@/generated/prisma/enums";
import {
  adminConfigured,
  createSession,
  deleteSession,
  passwordMatches,
  requireAdmin,
} from "@/lib/admin/session";

export type LoginState = { error?: "config" | "wrong" | "rate" };

export async function login(_previous: LoginState, formData: FormData): Promise<LoginState> {
  if (!adminConfigured()) return { error: "config" };

  const headerList = await headers();
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headerList.get("x-real-ip") ??
    "unknown";
  // Ten tries per quarter hour is plenty for a person and useless for a script.
  if (!rateLimit(`admin-login:${ip}`, 10, 15 * 60 * 1000).ok) return { error: "rate" };

  const password = formData.get("password");
  if (typeof password !== "string" || !passwordMatches(password)) return { error: "wrong" };

  await createSession();
  redirect("/admin");
}

export async function logout() {
  await deleteSession();
  redirect("/admin/login");
}

const updateSchema = z.object({
  id: z.string().min(1).max(64),
  status: z.enum(LeadStatus),
  note: z.string().max(4000),
});

export type UpdateState = { saved?: boolean; error?: boolean };

export async function updateLead(_previous: UpdateState, formData: FormData): Promise<UpdateState> {
  await requireAdmin();

  const parsed = updateSchema.safeParse({
    id: formData.get("id"),
    status: formData.get("status"),
    note: formData.get("note") ?? "",
  });
  if (!parsed.success) return { error: true };

  const { id, status, note } = parsed.data;
  try {
    await db.lead.update({
      where: { id },
      data: { status, note: note.trim() || null },
    });
  } catch (error) {
    console.error("[admin] lead update failed", error);
    return { error: true };
  }

  revalidatePath("/admin");
  revalidatePath(`/admin/leads/${id}`);
  return { saved: true };
}
