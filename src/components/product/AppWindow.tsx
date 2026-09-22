import {
  ChartColumn,
  LayoutDashboard,
  Package,
  ReceiptText,
  Users,
  UserCog,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

import type { ModuleSlug } from "@/content/modules";

export type ScreenKey = ModuleSlug | "icmal";

const NAV: { key: ScreenKey; label: string; icon: LucideIcon }[] = [
  { key: "icmal", label: "İcmal", icon: LayoutDashboard },
  { key: "crm", label: "CRM", icon: Users },
  { key: "anbar", label: "Anbar", icon: Package },
  { key: "muhasibat", label: "Mühasibat", icon: ReceiptText },
  { key: "maliyye", label: "Maliyyə", icon: Wallet },
  { key: "hr", label: "HR", icon: UserCog },
  { key: "hesabatlar", label: "Hesabatlar", icon: ChartColumn },
];

/**
 * A mock of the product itself, drawn in HTML rather than shipped as a
 * screenshot: it stays sharp at any size, responds to the viewport, and the
 * sample figures can be edited as content instead of re-exported from a design
 * file. The dark rail carries the visual weight the page needs at the top.
 */
export function AppWindow({
  active,
  title,
  action,
  children,
  className = "",
}: {
  active: ScreenKey;
  title: string;
  action?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[4px] border border-app-edge bg-app-chrome shadow-[0_28px_60px_-40px_rgba(27,14,14,0.75)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="block h-2 w-2 rounded-full bg-white/25" />
          <span className="block h-2 w-2 rounded-full bg-white/25" />
          <span className="block h-2 w-2 rounded-full bg-white/25" />
        </span>
        <span className="mx-auto rounded-[2px] bg-white/8 px-3 py-0.5 font-mono text-2xs text-white/55">
          birsistem.az
        </span>
        <span
          aria-hidden="true"
          className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15 font-mono text-[9px] text-white/70"
        >
          RM
        </span>
      </div>

      <div className="flex">
        <nav aria-hidden="true" className="w-12 shrink-0 py-3 sm:w-40">
          <ul className="space-y-0.5 px-2">
            {NAV.map((item) => {
              const Icon = item.icon;
              const isActive = item.key === active;
              return (
                <li key={item.key}>
                  <span
                    className={`flex items-center gap-2.5 rounded-[2px] px-2 py-1.5 text-[0.8125rem] ${
                      isActive ? "bg-red text-white" : "text-white/60"
                    }`}
                  >
                    <Icon size={15} strokeWidth={1.75} className="shrink-0" />
                    <span className="hidden truncate sm:inline">{item.label}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="min-w-0 flex-1 bg-app-canvas">
          <div className="flex items-center justify-between gap-3 border-b border-rule px-3 py-2.5 sm:px-4">
            <span className="truncate text-sm font-medium text-ink">{title}</span>
            {action ? (
              <span className="shrink-0 rounded-[2px] bg-red px-2.5 py-1 text-2xs font-medium text-white">
                {action}
              </span>
            ) : null}
          </div>
          <div className="p-3 sm:p-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

/** A figure tile inside a mock screen. */
export function Kpi({
  label,
  value,
  delta,
  tone = "neutral",
}: {
  label: string;
  value: string;
  delta?: string;
  tone?: "neutral" | "up" | "down";
}) {
  const deltaColor =
    tone === "up" ? "text-ok" : tone === "down" ? "text-red-ink" : "text-ink-50";
  return (
    <div className="flex min-w-0 flex-col rounded-[2px] border border-rule px-2.5 py-2">
      <p className="text-[0.6875rem] leading-tight text-ink-50">{label}</p>
      <p className="mt-1 font-mono text-sm font-medium leading-tight text-ink">{value}</p>
      {delta ? (
        <p className={`mt-auto pt-0.5 font-mono text-[0.625rem] leading-tight ${deltaColor}`}>
          {delta}
        </p>
      ) : null}
    </div>
  );
}

/**
 * Illustrative bars for the mock screens — sample data, no axes, no legend.
 * Hidden from assistive tech: the surrounding copy carries the meaning.
 */
export function Bars({ values, className = "" }: { values: number[]; className?: string }) {
  const max = Math.max(...values, 1);
  return (
    <div
      aria-hidden="true"
      className={`flex h-14 items-end gap-1 sm:h-16 ${className}`}
    >
      {values.map((value, index) => (
        <span
          key={index}
          className={`block min-w-0 flex-1 rounded-[1px] ${
            index === values.length - 1 ? "bg-red" : "bg-ink/15"
          }`}
          style={{ height: `${Math.max(8, (value / max) * 100)}%` }}
        />
      ))}
    </div>
  );
}

export function Pill({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "ok" | "warn" | "bad";
}) {
  const tones = {
    neutral: "bg-ink/8 text-ink-70",
    ok: "bg-ok/12 text-ok",
    warn: "bg-red/10 text-red-ink",
    bad: "bg-red text-white",
  } as const;
  return (
    <span
      className={`inline-block shrink-0 rounded-[2px] px-1.5 py-0.5 text-[0.625rem] font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

/** One line of a mock table. */
export function Row({
  cells,
  head = false,
}: {
  cells: ReactNode[];
  head?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-3 border-b border-rule py-1.5 last:border-b-0 ${
        head ? "text-[0.625rem] uppercase tracking-wide text-ink-50" : "text-[0.75rem] text-ink-70"
      }`}
    >
      <span className="truncate">{cells[0]}</span>
      <span className="shrink-0 font-mono">{cells[1]}</span>
      <span className="flex w-20 shrink-0 justify-end sm:w-24">{cells[2]}</span>
    </div>
  );
}
