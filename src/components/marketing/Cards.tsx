import {
  BadgePercent,
  BanknoteArrowUp,
  Briefcase,
  Building2,
  CalendarDays,
  ChartColumn,
  Check,
  Factory,
  Landmark,
  Package,
  Pill,
  ReceiptText,
  Stethoscope,
  Store,
  TrendingUp,
  Truck,
  UserCog,
  Users,
  UtensilsCrossed,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

import { Link, type Href } from "@/i18n/navigation";
import type { ModuleSlug } from "@/content/modules";
import type { SectorSlug } from "@/content/sectors";

export const MODULE_ICON: Record<ModuleSlug, LucideIcon> = {
  crm: Users,
  anbar: Package,
  muhasibat: ReceiptText,
  maliyye: Wallet,
  hr: UserCog,
  hesabatlar: ChartColumn,
};

export const TOOL_ICON: Record<string, LucideIcon> = {
  "edv-kalkulyatoru": BadgePercent,
  "emek-haqqi-kalkulyatoru": BanknoteArrowUp,
  "dsmf-kalkulyatoru": Landmark,
  "mezuniyyet-pulu-kalkulyatoru": CalendarDays,
  "xestelik-vereqesi-kalkulyatoru": Stethoscope,
  "roi-kalkulyatoru": TrendingUp,
  "kredit-kalkulyatoru": Wallet,
};

export const SECTOR_ICON: Record<SectorSlug, LucideIcon> = {
  tikinti: Building2,
  restoran: UtensilsCrossed,
  topdansatis: Package,
  istehsal: Factory,
  perakende: Store,
  logistika: Truck,
  aptek: Pill,
  xidmet: Briefcase,
};

/** Rounded, softly tinted icon holder. */
export function IconMark({
  icon: Icon,
  tone = "brand",
  size = "md",
}: {
  icon: LucideIcon;
  tone?: "brand" | "light";
  size?: "sm" | "md";
}) {
  const box = size === "sm" ? "h-9 w-9 rounded-sm" : "h-11 w-11 rounded-md";
  return (
    <span
      aria-hidden="true"
      className={`flex shrink-0 items-center justify-center ${box} ${
        tone === "light" ? "bg-white/12 text-on-oxblood" : "bg-red-soft text-red"
      }`}
    >
      <Icon size={size === "sm" ? 18 : 21} strokeWidth={1.75} />
    </span>
  );
}

const cardBase =
  "flex min-w-0 flex-col rounded-lg border border-rule bg-card p-6 shadow-card transition-shadow duration-200";

/** Module card — icon, name, one line, and the columns a buyer asks about. */
export function ModuleCard({
  href,
  icon,
  name,
  row,
  meta,
}: {
  href: Href;
  icon: LucideIcon;
  name: string;
  row: string;
  meta?: { label: string; value: string }[];
}) {
  return (
    <Link href={href} className={`group ${cardBase} hover:shadow-lift`}>
      <IconMark icon={icon} />
      <h3 className="mt-5 text-h3 font-semibold text-ink group-hover:text-red-ink">{name}</h3>
      <p className="mt-2 leading-relaxed text-ink-70">{row}</p>
      {meta?.length ? (
        <dl className="mt-5 space-y-1.5 border-t border-rule pt-4 text-2xs">
          {meta.map((entry) => (
            <div key={entry.label} className="flex gap-1.5">
              <dt className="shrink-0 text-ink-50">{entry.label}:</dt>
              <dd className="line-clamp-2 min-w-0 text-ink-70">{entry.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
    </Link>
  );
}

/** Compact tile — many items, little to say about each. */
export function Tile({
  href,
  icon,
  name,
  row,
}: {
  href: Href;
  icon: LucideIcon;
  name: string;
  row?: string;
}) {
  return (
    <Link
      href={href}
      className="group flex min-w-0 items-start gap-4 rounded-lg border border-rule bg-card p-5 shadow-card transition-shadow duration-200 hover:shadow-lift"
    >
      <IconMark icon={icon} size="sm" />
      <span className="min-w-0">
        <span className="block font-semibold text-ink group-hover:text-red-ink">{name}</span>
        {row ? <span className="mt-1 block text-sm leading-relaxed text-ink-70">{row}</span> : null}
      </span>
    </Link>
  );
}

/** Static card for problems, checks and similar copy blocks. */
export function NoteCard({
  icon,
  title,
  children,
  tone = "paper",
}: {
  icon?: LucideIcon;
  title: string;
  children: ReactNode;
  tone?: "paper" | "oxblood";
}) {
  const dark = tone === "oxblood";
  return (
    <div
      className={`min-w-0 rounded-lg p-6 ${
        dark ? "bg-white/6" : "border border-rule bg-card shadow-card"
      }`}
    >
      {icon ? <IconMark icon={icon} tone={dark ? "light" : "brand"} size="sm" /> : null}
      <h3
        className={`${icon ? "mt-4" : ""} font-semibold ${dark ? "text-on-oxblood" : "text-ink"}`}
      >
        {title}
      </h3>
      <div className={`mt-2 leading-relaxed ${dark ? "text-on-oxblood/80" : "text-ink-70"}`}>
        {children}
      </div>
    </div>
  );
}

/** A single factual figure. Product facts only — never invented customer counts. */
export function Fact({
  value,
  label,
  tone = "oxblood",
}: {
  value: string;
  label: string;
  tone?: "oxblood" | "paper";
}) {
  const dark = tone === "oxblood";
  return (
    <div className="min-w-0">
      <p className={`text-h2 font-medium ${dark ? "text-on-oxblood" : "text-ink"}`}>{value}</p>
      <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-on-oxblood/75" : "text-ink-70"}`}>
        {label}
      </p>
    </div>
  );
}

/**
 * Ticked list, two columns on wide screens — the pattern this kind of buyer
 * scans fastest when comparing what is and is not included.
 */
export function CheckList({
  items,
  tone = "paper",
  columns = 2,
}: {
  items: string[];
  tone?: "paper" | "oxblood";
  columns?: 1 | 2;
}) {
  const dark = tone === "oxblood";
  return (
    <ul className={`grid gap-x-8 gap-y-3 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((item) => (
        <li key={item} className="flex min-w-0 items-start gap-3">
          <span
            aria-hidden="true"
            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
              dark ? "bg-white/15 text-on-oxblood" : "bg-red-soft text-red"
            }`}
          >
            <Check size={13} strokeWidth={2.75} />
          </span>
          <span className={dark ? "text-on-oxblood/85" : "text-ink-70"}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
