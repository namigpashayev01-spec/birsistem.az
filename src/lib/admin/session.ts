import "server-only";

import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

/**
 * Admin access is one shared password, not user accounts: the panel exists so
 * the sales team can work the enquiries, and a single secret in the server's
 * environment is the whole of the configuration that needs.
 *
 * The session is a stateless cookie — an expiry timestamp signed with HMAC —
 * so there is no session table to keep. Changing ADMIN_SESSION_SECRET signs
 * everyone out at once.
 */
const COOKIE = "bs_admin";
const TTL_MS = 12 * 60 * 60 * 1000;

function secret() {
  const value = process.env.ADMIN_SESSION_SECRET;
  return value && value.length >= 32 ? value : null;
}

/** Both variables must be set; otherwise the panel refuses every login. */
export function adminConfigured() {
  return Boolean(process.env.ADMIN_PASSWORD && secret());
}

function sign(payload: string, key: string) {
  return createHmac("sha256", key).update(payload).digest("base64url");
}

/** Compare as fixed-length digests so neither length nor content leaks through timing. */
function safeEqual(a: string, b: string) {
  const left = createHash("sha256").update(a).digest();
  const right = createHash("sha256").update(b).digest();
  return timingSafeEqual(left, right);
}

export function passwordMatches(candidate: string) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected || !secret()) return false;
  return safeEqual(candidate, expected);
}

export async function createSession() {
  const key = secret();
  if (!key) throw new Error("ADMIN_SESSION_SECRET is not set");

  const expires = Date.now() + TTL_MS;
  const payload = String(expires);
  const store = await cookies();
  store.set(COOKIE, `${payload}.${sign(payload, key)}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/admin",
    expires: new Date(expires),
  });
}

export async function deleteSession() {
  const store = await cookies();
  store.delete({ name: COOKIE, path: "/admin" });
}

export async function isAdmin() {
  const key = secret();
  if (!key || !process.env.ADMIN_PASSWORD) return false;

  const value = (await cookies()).get(COOKIE)?.value;
  if (!value) return false;

  const [payload, signature] = value.split(".");
  if (!payload || !signature || !safeEqual(signature, sign(payload, key))) return false;
  return Number(payload) > Date.now();
}

/**
 * Call at the top of every admin page, route handler and action. Layouts do
 * not re-run on client navigation, so the check cannot live only in one.
 */
export async function requireAdmin() {
  if (!(await isAdmin())) redirect("/admin/login");
}
