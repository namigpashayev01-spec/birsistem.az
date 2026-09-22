import { FileText } from "lucide-react";

import type { HomeCopy } from "@/content/home";
import { MODULE_ICON } from "./Cards";

/**
 * The product's argument in one picture: a single document on the left, and
 * everything it sets off on the right. Static — the connectors are borders, so
 * there is nothing to load and nothing to animate.
 */
export function DocumentFlow({ copy }: { copy: HomeCopy["flow"] }) {
  const { doc, steps } = copy;

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-12">
      <div className="min-w-0">
        <div className="rounded-lg border border-rule bg-card shadow-card">
          <div className="flex items-center gap-2 border-b border-rule px-4 py-3">
            <FileText size={16} strokeWidth={1.75} className="shrink-0 text-red" aria-hidden="true" />
            <span className="text-sm font-medium text-ink">{doc.title}</span>
            <span className="ml-auto font-mono text-2xs text-ink-50">{doc.number}</span>
          </div>
          <p className="border-b border-rule px-4 py-3 text-sm text-ink-70">{doc.customer}</p>
          <div className="flex items-baseline justify-between px-4 py-3">
            <span className="text-sm text-ink-50">Cəmi</span>
            <span className="font-mono text-h3 font-medium text-ink">{doc.total}</span>
          </div>
        </div>
        <p className="mt-3 text-sm text-ink-50">
          Menecer bu sənədi yazır. Qalan hər şey avtomatik baş verir.
        </p>
      </div>

      <ol className="min-w-0 border-l border-rule pl-6 lg:pl-8">
        {steps.map((step, index) => {
          const Icon = MODULE_ICON[step.module];
          return (
            <li
              key={step.module}
              className={`relative flex min-w-0 items-start gap-4 ${
                index === 0 ? "pb-5" : "py-5"
              } ${index === steps.length - 1 ? "pb-0" : "border-b border-rule"}`}
            >
              <span
                aria-hidden="true"
                className="absolute left-[-1.5rem] top-7 h-px w-4 bg-rule lg:left-[-2rem] lg:w-6"
              />
              <span
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-rule bg-card shadow-card text-red"
              >
                <Icon size={18} strokeWidth={1.75} />
              </span>
              <div className="min-w-0">
                <h3 className="font-medium text-ink">{step.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-70">{step.effect}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
