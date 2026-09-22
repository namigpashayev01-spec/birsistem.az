import {
  Bell,
  ChartColumn,
  LayoutDashboard,
  Package,
  ReceiptText,
  Search,
  Users,
  UserCog,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

import type { ModuleSlug } from "@/content/modules";

export type ScreenKey = ModuleSlug | "icmal";

/** Grouped navigation, the way business software actually organises itself. */
const NAV: { group: string; items: { key: ScreenKey; label: string; icon: LucideIcon }[] }[] = [
  {
    group: "Əsas",
    items: [
      { key: "icmal", label: "İcmal", icon: LayoutDashboard },
      { key: "crm", label: "Satış", icon: Users },
      { key: "anbar", label: "Anbar", icon: Package },
    ],
  },
  {
    group: "Uçot",
    items: [
      { key: "muhasibat", label: "Mühasibat", icon: ReceiptText },
      { key: "maliyye", label: "Maliyyə", icon: Wallet },
    ],
  },
  {
    group: "Komanda",
    items: [
      { key: "hr", label: "HR", icon: UserCog },
      { key: "hesabatlar", label: "Hesabatlar", icon: ChartColumn },
    ],
  },
];

/**
 * A mock of the product, drawn in HTML rather than shipped as a screenshot: it
 * stays sharp at any size, reflows on small screens, and its sample figures are
 * editable content. The shell is the app's own chrome — graphite rail, white
 * workspace — not an operating-system window.
 */
export function AppWindow({
  active,
  title,
  period,
  action,
  children,
  className = "",
}: {
  active: ScreenKey;
  title: string;
  period?: string;
  action?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-app-edge bg-app-chrome shadow-float ${className}`}
    >
      <div className="flex">
        <nav aria-hidden="true" className="w-13 shrink-0 pb-5 sm:w-44">
          <div className="flex h-14 items-center gap-2.5 px-3 sm:px-4">
            <span className="block h-5 w-[3px] shrink-0 rounded-full bg-red" />
            <span className="hidden text-[0.9375rem] font-semibold tracking-tight text-white sm:inline">
              birsistem
            </span>
          </div>

          {NAV.map((section) => (
            <div key={section.group} className="mt-4 first:mt-1">
              <p className="hidden px-4 pb-2 text-[0.625rem] font-medium tracking-wide text-white/45 sm:block">
                {section.group}
              </p>
              <ul className="space-y-0.5 px-2">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = item.key === active;
                  return (
                    <li key={item.key} className="relative">
                      {isActive ? (
                        <span className="absolute inset-y-1 left-0 w-[2px] rounded-full bg-red" />
                      ) : null}
                      <span
                        className={`flex items-center gap-3 rounded-sm px-2.5 py-2 text-[0.8125rem] ${
                          isActive ? "bg-white/10 font-medium text-white" : "text-white/55"
                        }`}
                      >
                        <Icon
                          size={16}
                          strokeWidth={1.75}
                          className={`shrink-0 ${isActive ? "text-red" : ""}`}
                        />
                        <span className="hidden truncate sm:inline">{item.label}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        <div className="min-w-0 flex-1 bg-app-canvas">
          {/* The app's own top bar: search and account, not window controls. */}
          <div className="flex h-14 items-center gap-3 border-b border-rule px-4">
            <span
              aria-hidden="true"
              className="hidden h-8 min-w-0 flex-1 items-center gap-2 rounded-sm border border-rule px-3 text-[0.75rem] text-ink-50 sm:flex"
            >
              <Search size={13} strokeWidth={1.75} className="shrink-0" />
              <span className="truncate">Sənəd, müştəri və ya mal axtarın</span>
            </span>
            <span className="flex-1 sm:hidden" />
            <Bell size={15} strokeWidth={1.75} className="shrink-0 text-ink-50" aria-hidden="true" />
            <span
              aria-hidden="true"
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-tint text-[0.625rem] font-semibold text-ink-70"
            >
              RM
            </span>
          </div>

          <div className="flex items-center justify-between gap-3 px-4 pb-1 pt-4">
            <div className="min-w-0">
              <p className="truncate text-[0.9375rem] font-semibold text-ink">{title}</p>
              {period ? <p className="mt-0.5 text-[0.6875rem] text-ink-50">{period}</p> : null}
            </div>
            {action ? (
              <span className="shrink-0 rounded-sm bg-red px-3 py-1.5 text-[0.6875rem] font-medium text-white">
                {action}
              </span>
            ) : null}
          </div>

          <div className="p-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

/** A headline figure. Label above, figure below, movement last. */
export function Kpi({
  label,
  value,
  unit,
  delta,
  tone = "neutral",
}: {
  label: string;
  value: string;
  unit?: string;
  delta?: string;
  tone?: "neutral" | "up" | "down";
}) {
  const deltaColor = tone === "up" ? "text-ok" : tone === "down" ? "text-red-ink" : "text-ink-50";
  return (
    <div className="flex min-w-0 flex-col rounded-sm border border-rule px-3 py-2.5">
      <p className="text-[0.6875rem] leading-tight text-ink-50">{label}</p>
      <p className="mt-1.5 whitespace-nowrap font-mono text-[0.9375rem] font-medium leading-none text-ink">
        {value}
        {unit ? <span className="ml-1 text-[0.6875rem] text-ink-50">{unit}</span> : null}
      </p>
      {delta ? (
        <p className={`mt-auto pt-1.5 text-[0.625rem] leading-tight ${deltaColor}`}>{delta}</p>
      ) : null}
    </div>
  );
}

/** Rounded-top column, anchored to the baseline. */
function columnPath(x: number, y: number, width: number, baseline: number, radius = 2) {
  const r = Math.min(radius, width / 2, Math.max(baseline - y, 0));
  return `M${x},${baseline} L${x},${y + r} Q${x},${y} ${x + r},${y} L${x + width - r},${y} Q${x + width},${y} ${x + width},${y + r} L${x + width},${baseline} Z`;
}

/**
 * Single-series column chart. One series needs no legend — the card title names
 * it — and only the latest column is labelled, so the eye lands on the figure
 * that matters rather than reading eight numbers. Grid and axis stay recessive.
 */
export function Chart({
  title,
  unit,
  labels,
  values,
  ticks,
}: {
  title: string;
  /** Carried in the header, so the axis can stay bare numbers. */
  unit: string;
  labels: string[];
  values: number[];
  /** Axis values, low to high; the last one is the top of the plot. */
  ticks: number[];
}) {
  const width = 320;
  const height = 116;
  const padLeft = 22;
  const padRight = 6;
  const padTop = 10;
  const baseline = height - 18;

  // The top gridline is a label, not a ceiling: scale to whichever is larger so
  // a record month never draws above the plot.
  const max = Math.max(...ticks, ...values);
  const plotWidth = width - padLeft - padRight;
  const slot = plotWidth / values.length;
  const barWidth = Math.min(14, slot * 0.42);
  const scale = (value: number) => baseline - (value / max) * (baseline - padTop);

  const lastIndex = values.length - 1;

  return (
    <figure className="rounded-sm border border-rule p-3">
      <figcaption className="flex items-baseline justify-between gap-3">
        <span className="truncate text-[0.75rem] font-medium text-ink">{title}</span>
        <span className="shrink-0 text-[0.6875rem] text-ink-50">{unit}</span>
      </figcaption>

      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="mt-2 w-full"
        role="img"
        aria-label={`${title} (${unit})`}
      >
        {ticks.map((tick) => (
          <g key={tick}>
            <line
              x1={padLeft}
              x2={width - padRight}
              y1={scale(tick)}
              y2={scale(tick)}
              stroke="currentColor"
              strokeWidth="1"
              className="text-rule"
            />
            <text
              x={padLeft - 5}
              y={scale(tick) + 3}
              textAnchor="end"
              className="fill-ink-50 font-mono text-[7px]"
            >
              {tick}
            </text>
          </g>
        ))}

        {values.map((value, index) => (
          <path
            key={index}
            d={columnPath(
              padLeft + slot * index + (slot - barWidth) / 2,
              scale(value),
              barWidth,
              baseline,
            )}
            className="fill-red"
          />
        ))}

        {/* One direct label: the latest period. */}
        <text
          x={padLeft + slot * lastIndex + slot / 2}
          y={scale(values[lastIndex]) - 5}
          textAnchor="middle"
          className="fill-ink font-mono text-[8px] font-medium"
        >
          {values[lastIndex]}
        </text>

        {labels.map((label, index) => (
          <text
            key={label}
            x={padLeft + slot * index + slot / 2}
            y={height - 5}
            textAnchor="middle"
            className="fill-ink-50 text-[7px]"
          >
            {label}
          </text>
        ))}
      </svg>
    </figure>
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
    neutral: "bg-tint text-ink-70",
    ok: "bg-ok-soft text-ok",
    warn: "bg-red-soft text-red-ink",
    bad: "bg-red text-white",
  } as const;
  return (
    <span
      className={`inline-block shrink-0 rounded-full px-2 py-0.5 text-[0.625rem] font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

/** Mock table: a real header row, right-aligned figures, status at the end. */
export function DataTable({
  head,
  rows,
}: {
  head: [string, string, string];
  rows: [ReactNode, string, ReactNode][];
}) {
  return (
    <div className="overflow-hidden rounded-sm border border-rule">
      <div className="grid grid-cols-[minmax(0,1fr)_auto_5.25rem] items-center gap-3 border-b border-rule bg-tint px-3 py-2 text-[0.625rem] font-medium text-ink-50">
        <span className="truncate">{head[0]}</span>
        <span className="text-right">{head[1]}</span>
        <span className="text-right">{head[2]}</span>
      </div>
      {rows.map((row, index) => (
        <div
          key={index}
          className="grid grid-cols-[minmax(0,1fr)_auto_5.25rem] items-center gap-3 border-b border-rule px-3 py-2 text-[0.75rem] text-ink-70 last:border-b-0"
        >
          <span className="truncate">{row[0]}</span>
          <span className="text-right font-mono text-ink">{row[1]}</span>
          <span className="flex justify-end">{row[2]}</span>
        </div>
      ))}
    </div>
  );
}
