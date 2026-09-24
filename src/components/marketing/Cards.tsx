import {
  BadgePercent,
  BanknoteArrowUp,
  Briefcase,
  Building2,
  CalendarDays,
  ChartColumn,
  ArrowRight,
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

/**
 * The icon sits inside a thin ring — a circle drawn, not filled, so a grid of
 * cards reads as a set of marks rather than a row of coloured tiles. On an
 * oxblood slab the ring and glyph go rose; everywhere else they are brand red.
 */
export function IconMark({
  icon: Icon,
  tone = "brand",
  size = "md",
}: {
  icon: LucideIcon;
  tone?: "brand" | "light";
  size?: "sm" | "md";
}) {
  const light = tone === "light";
  return (
    <span
      aria-hidden="true"
      className={`flex shrink-0 items-center justify-center rounded-full border ${
        size === "sm" ? "h-10 w-10" : "h-12 w-12"
      } ${light ? "border-on-deep/45 text-on-deep" : "border-brand-ink/25 text-brand-ink"}`}
    >
      <Icon size={size === "sm" ? 18 : 21} strokeWidth={1.75} />
    </span>
  );
}

const cardBase =
  "group flex min-w-0 flex-col transition-[box-shadow,transform] duration-200 ease-out-soft hover:-translate-y-1 hover:shadow-lift";

/**
 * Two surfaces for the same card. `paper` is the quiet one — a white card with
 * a 20px radius, used wherever a grid sits inside a slab. `deep` restates the
 * hero at card scale: the brand red fill, the 30px slab radius and white type,
 * so a row of them reads as four small hero blocks rather than a card grid.
 * A `deep` card needs white space around it, never a slab of its own tone.
 */
const CARD_SURFACE = {
  paper: "rounded-md bg-card p-7 shadow-card",
  deep: "on-deep rounded-lg bg-deep p-6 text-on-deep shadow-card sm:p-8",
} as const;

/**
 * The card used for both modules and industries: icon, name, one line, and —
 * where the page has room for it — the columns a buyer asks about. The arrow
 * sits at the foot and slides forward on hover, so a whole grid of cards reads
 * as a set of destinations rather than a set of boxes.
 */
export function LinkCard({
  href,
  icon,
  name,
  row,
  meta,
  tone = "paper",
}: {
  href: Href;
  icon: LucideIcon;
  name: string;
  row: string;
  meta?: { label: string; value: string }[];
  tone?: "paper" | "deep";
}) {
  const dark = tone === "deep";
  return (
    <Link href={href} className={`${cardBase} ${CARD_SURFACE[tone]}`}>
      <IconMark icon={icon} tone={dark ? "light" : "brand"} />
      <h3 className={`mt-5 text-h3 font-bold ${dark ? "text-on-deep" : "text-ink"}`}>{name}</h3>
      <p className={`mt-2.5 leading-relaxed ${dark ? "text-on-deep/85" : "text-ink-70"}`}>{row}</p>
      {meta?.length ? (
        <dl
          className={`mt-5 space-y-1.5 border-t pt-4 text-2xs ${
            dark ? "border-on-deep/25" : "border-rule"
          }`}
        >
          {meta.map((entry) => (
            <div key={entry.label} className="flex gap-1.5">
              <dt className={`shrink-0 font-semibold ${dark ? "text-on-deep/85" : "text-ink-50"}`}>
                {entry.label}:
              </dt>
              <dd
                className={`line-clamp-2 min-w-0 ${dark ? "text-on-deep/85" : "text-ink-70"}`}
              >
                {entry.value}
              </dd>
            </div>
          ))}
        </dl>
      ) : null}
      <ArrowRight
        aria-hidden="true"
        size={18}
        strokeWidth={2.25}
        className={`mt-auto shrink-0 pt-5 opacity-0 transition-all duration-200 ease-out-soft group-hover:translate-x-1 group-hover:opacity-100 ${
          dark ? "text-on-deep-accent" : "text-brand-ink"
        }`}
      />
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
      className="group flex min-w-0 items-start gap-4 rounded-md bg-card p-5 shadow-card transition-[box-shadow,transform] duration-200 ease-out-soft hover:-translate-y-1 hover:shadow-lift"
    >
      <IconMark icon={icon} size="sm" />
      <span className="min-w-0 pt-1.5">
        <span className="block font-bold text-ink">{name}</span>
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
  tone?: "paper" | "deep";
}) {
  const dark = tone === "deep";
  return (
    <div
      className={`min-w-0 rounded-md p-7 ${
        dark ? "bg-white/[0.07]" : "bg-card shadow-card"
      }`}
    >
      {icon ? <IconMark icon={icon} tone={dark ? "light" : "brand"} /> : null}
      <h3
        className={`${icon ? "mt-5" : ""} text-h3 font-bold ${dark ? "text-on-deep" : "text-ink"}`}
      >
        {title}
      </h3>
      <div className={`mt-2 leading-relaxed ${dark ? "text-on-deep/85" : "text-ink-70"}`}>
        {children}
      </div>
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
  tone?: "paper" | "deep";
  columns?: 1 | 2;
}) {
  const dark = tone === "deep";
  return (
    <ul className={`grid gap-x-8 gap-y-3 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((item) => (
        <li key={item} className="flex min-w-0 items-start gap-2.5">
          <Check
            aria-hidden="true"
            size={18}
            strokeWidth={3}
            className={`mt-1 shrink-0 ${dark ? "text-on-deep-accent" : "text-brand-ink"}`}
          />
          <span className={dark ? "text-on-deep/85" : "text-ink-70"}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
