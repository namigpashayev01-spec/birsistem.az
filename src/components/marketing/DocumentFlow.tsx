import { FileText } from "lucide-react";

import type { HomeCopy } from "@/content/home";
import { MODULE_ICON } from "./Cards";

/**
 * The product's whole argument, drawn rather than asserted: one document at the
 * head, and the four things it sets off hanging off a single spine beneath it.
 *
 * The spine is what makes this a chain instead of a grid — the four consequences
 * used to sit in a 2×2 of identical cards, which stated the claim but showed no
 * connection at all. It is drawn with borders on the list items (a left rule per
 * entry, a short arm out to each label), so there is no SVG to load, nothing to
 * animate, and it reflows on its own at narrow widths.
 */
export function DocumentFlow({ copy }: { copy: HomeCopy["flow"] }) {
  const { doc, steps } = copy;

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)] lg:gap-16">
      {/* The one thing a person types. Everything to the right of it is the
          system's own work, which is the point the section is making. */}
      <div className="min-w-0">
        <div className="overflow-hidden rounded-md bg-card shadow-lift">
          <div className="flex items-center gap-2 border-b border-rule bg-cloud px-4 py-3">
            <FileText
              size={16}
              strokeWidth={1.75}
              className="shrink-0 text-brand-ink"
              aria-hidden="true"
            />
            <span className="text-sm font-medium text-ink">{doc.title}</span>
            <span className="ml-auto font-mono text-2xs text-ink-50">{doc.number}</span>
          </div>
          <p className="border-b border-rule px-4 py-3 text-sm text-ink-70">{doc.customer}</p>
          <div className="flex items-baseline justify-between px-4 py-3">
            <span className="text-sm text-ink-50">{doc.totalLabel}</span>
            <span className="font-mono text-h3 font-medium text-ink">{doc.total}</span>
          </div>
        </div>
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-50">
          {copy.docNote}
        </p>
      </div>

      {/* The spine. `border-l` on every entry but the last draws one unbroken
          rule down the column; the arm and dot are drawn on the label row, so
          each consequence is visibly hung off the document above it. */}
      <ol className="relative min-w-0 max-w-2xl">
        {/* Across the column gutter on wide screens: the chain visibly starts
            at the document rather than floating beside it. */}
        <span
          aria-hidden="true"
          className="absolute -left-16 top-3.5 hidden h-px w-16 bg-rule lg:block"
        />
        {steps.map((step, index) => {
          const Icon = MODULE_ICON[step.module];
          const last = index === steps.length - 1;
          return (
            <li
              key={step.module}
              className={`relative min-w-0 pb-8 pl-8 last:pb-0 sm:pl-10 ${
                last ? "" : "border-l border-rule"
              }`}
            >
              {/* The final entry has no rule of its own to hang from, so it
                  carries a stub that meets the one above it. */}
              {last ? (
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-3.5 w-px bg-rule"
                />
              ) : null}
              {/* The arm out to the dot. */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-3.5 h-px w-5 bg-rule sm:w-7"
              />
              <span
                aria-hidden="true"
                className="absolute left-4 top-[0.6875rem] h-2 w-2 rounded-full bg-brand sm:left-6"
              />

              <div className="flex min-w-0 items-center gap-2.5">
                <Icon
                  aria-hidden="true"
                  size={19}
                  strokeWidth={1.75}
                  className="shrink-0 text-brand-ink"
                />
                <h3 className="text-h3 font-bold text-ink">{step.name}</h3>
              </div>
              <p className="mt-1.5 leading-relaxed text-ink-70">{step.effect}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
