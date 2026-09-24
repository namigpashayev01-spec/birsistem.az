import "server-only";

import type { Prisma } from "@/generated/prisma/client";
import type { LeadStatus, LeadType } from "@/generated/prisma/enums";
import { isStatus, isType } from "./labels";

export const PAGE_SIZE = 50;

export type LeadFilters = {
  status?: LeadStatus;
  type?: LeadType;
  q?: string;
  page: number;
};

type Params = Record<string, string | string[] | undefined>;

function first(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

/** Filters live in the URL, so a filtered view can be bookmarked or shared. */
export function parseFilters(params: Params): LeadFilters {
  const status = first(params.status);
  const type = first(params.type);
  const q = first(params.q)?.trim().slice(0, 120);
  const page = Math.max(1, Number.parseInt(first(params.page) ?? "1", 10) || 1);
  return {
    status: isStatus(status) ? status : undefined,
    type: isType(type) ? type : undefined,
    q: q || undefined,
    page,
  };
}

export function whereFor(filters: LeadFilters, { withStatus = true } = {}): Prisma.LeadWhereInput {
  const where: Prisma.LeadWhereInput = {};
  if (withStatus && filters.status) where.status = filters.status;
  if (filters.type) where.type = filters.type;
  if (filters.q) {
    const contains = { contains: filters.q, mode: "insensitive" as const };
    where.OR = [
      { name: contains },
      { company: contains },
      { phone: contains },
      { email: contains },
      { message: contains },
    ];
  }
  return where;
}

/** Rebuild a query string from filters, dropping what is empty. */
export function queryFor(filters: Partial<LeadFilters>) {
  const search = new URLSearchParams();
  if (filters.status) search.set("status", filters.status);
  if (filters.type) search.set("type", filters.type);
  if (filters.q) search.set("q", filters.q);
  if (filters.page && filters.page > 1) search.set("page", String(filters.page));
  const text = search.toString();
  return text ? `?${text}` : "";
}
