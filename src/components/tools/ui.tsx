"use client";

import { useId, type ReactNode } from "react";

export { formatMoney, formatNumber } from "@/lib/format";

const inputClass =
  "mt-2 block h-12 w-full rounded-sm border border-rule-strong bg-card px-4 font-mono text-ink outline-none transition-colors focus:border-brand-ink";

export function NumberField({
  label,
  value,
  onChange,
  suffix,
  min = 0,
  step = "any",
  hint,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  suffix?: string;
  min?: number;
  step?: string;
  hint?: string;
}) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={min}
          step={step}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={`${inputClass} ${suffix ? "pr-16" : ""}`}
        />
        {suffix ? (
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 font-mono text-sm text-ink-50">
            {suffix}
          </span>
        ) : null}
      </div>
      {hint ? <p className="mt-1.5 text-sm text-ink-50">{hint}</p> : null}
    </div>
  );
}

export function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`${inputClass} font-sans`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function ModeToggle({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-ink">{label}</legend>
      <div className="mt-2 flex gap-1 rounded-pill bg-cloud p-1">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            aria-pressed={value === option.value}
            onClick={() => onChange(option.value)}
            className={`min-h-10 flex-1 rounded-pill px-4 text-sm font-bold transition-colors ${
              value === option.value
                ? "bg-ink text-paper"
                : "text-ink-70 hover:text-ink"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

/** Result panel: one headline figure, then the rows that make it up. */
export function ResultPanel({
  headlineLabel,
  headline,
  rows,
  footnote,
}: {
  headlineLabel: string;
  headline: string;
  rows: { label: string; value: string; strong?: boolean }[];
  footnote?: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-md bg-card shadow-card">
      <div className="border-b border-rule px-6 py-5">
        <p className="text-sm text-ink-50">{headlineLabel}</p>
        <p className="mt-1 font-mono text-h1 font-medium text-ink">{headline}</p>
      </div>
      <dl>
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex items-baseline justify-between gap-4 border-b border-rule px-6 py-3 last:border-b-0"
          >
            <dt className={`text-sm ${row.strong ? "text-ink" : "text-ink-70"}`}>
              {row.label}
            </dt>
            <dd
              className={`shrink-0 font-mono text-sm ${
                row.strong ? "font-medium text-ink" : "text-ink-70"
              }`}
            >
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
      {footnote ? (
        <p className="border-t border-rule bg-cloud px-6 py-3.5 text-sm text-ink-50">{footnote}</p>
      ) : null}
    </div>
  );
}

export function toNumber(value: string) {
  const parsed = Number.parseFloat(value.replace(",", "."));
  return Number.isFinite(parsed) ? parsed : 0;
}
