import {
  BadgePercent,
  BanknoteArrowUp,
  Briefcase,
  Building2,
  ChartColumn,
  Factory,
  Package,
  Pill,
  ReceiptText,
  CalendarDays,
  Landmark,
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

/** Square icon holder. The red rule under it is the register motif, shrunk. */
function IconMark({ icon: Icon, tone = "ink" }: { icon: LucideIcon; tone?: "ink" | "light" }) {
  return (
    <span
      aria-hidden="true"
      className={`flex h-9 w-9 items-center justify-center rounded-[2px] border ${
        tone === "light"
          ? "border-on-oxblood/25 text-on-oxblood"
          : "border-rule bg-paper text-red"
      }`}
    >
      <Icon size={18} strokeWidth={1.75} />
    </span>
  );
}

/**
 * Module card. Cards here are not the usual identical rounded boxes: a square
 * edge, a hairline border and a red rule that draws across the top on hover —
 * the same rule that runs down the product's own tables.
 */
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
    <Link
      href={href}
      className="group relative flex min-w-0 flex-col rounded-[2px] border border-rule bg-card p-5 transition-colors hover:border-rule-strong"
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-red transition-transform duration-200 ease-out-soft group-hover:scale-x-100"
      />
      <IconMark icon={icon} />
      <h3 className="mt-4 text-h3 font-semibold text-ink group-hover:text-red-ink">{name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-70">{row}</p>
      {meta?.length ? (
        <dl className="mt-4 space-y-1 border-t border-rule pt-3 text-2xs">
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

/** Compact tile — used where there are many items and little to say about each. */
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
      className="group flex min-w-0 items-start gap-3 rounded-[2px] border border-rule bg-card p-4 transition-colors hover:border-rule-strong"
    >
      <IconMark icon={icon} />
      <span className="min-w-0">
        <span className="block font-medium text-ink group-hover:text-red-ink">{name}</span>
        {row ? <span className="mt-1 block text-sm text-ink-70">{row}</span> : null}
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
      className={`min-w-0 rounded-[2px] border p-5 ${
        dark ? "border-on-oxblood/20 bg-on-oxblood/5" : "border-rule bg-card"
      }`}
    >
      {icon ? <IconMark icon={icon} tone={dark ? "light" : "ink"} /> : null}
      <h3
        className={`${icon ? "mt-4" : ""} font-semibold ${dark ? "text-on-oxblood" : "text-ink"}`}
      >
        {title}
      </h3>
      <div
        className={`mt-2 text-sm leading-relaxed ${dark ? "text-on-oxblood/80" : "text-ink-70"}`}
      >
        {children}
      </div>
    </div>
  );
}

/** A single factual figure. Product facts only — never invented customer counts. */
export function Fact({ value, label }: { value: string; label: string }) {
  return (
    <div className="min-w-0 border-l-2 border-on-oxblood/30 pl-4">
      <p className="font-mono text-h2 font-medium text-on-oxblood">{value}</p>
      <p className="mt-1 text-sm text-on-oxblood/75">{label}</p>
    </div>
  );
}
