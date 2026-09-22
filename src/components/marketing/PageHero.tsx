import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/layout/Breadcrumbs";

/**
 * Standard opening for an inner page. With a `visual` it splits in two; without
 * one the text keeps the full column rather than sitting beside an empty track.
 */
export function PageHero({
  crumbs,
  title,
  lead,
  meta,
  actions,
  visual,
}: {
  crumbs: Crumb[];
  title: string;
  lead: string;
  meta?: { label: string; value: string }[];
  actions?: ReactNode;
  visual?: ReactNode;
}) {
  return (
    <div className="border-b border-rule bg-paper">
      <div className="mx-auto max-w-[80rem] px-4 pb-14 md:px-8 md:pb-20">
        <Breadcrumbs trail={crumbs} />

        <div
          className={
            visual
              ? "grid items-center gap-10 pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,32rem)] lg:gap-14"
              : "pt-6"
          }
        >
          <div className="min-w-0">
            <h1 className="max-w-3xl text-h1 font-semibold text-ink">{title}</h1>
            <p className="mt-5 max-w-2xl text-lead text-ink-70">{lead}</p>

            {meta?.length ? (
              <dl className="mt-8 grid max-w-3xl gap-x-10 gap-y-4 border-t border-rule pt-5 sm:grid-cols-2">
                {meta.map((entry) => (
                  <div key={entry.label} className="min-w-0">
                    <dt className="text-sm text-ink-50">{entry.label}</dt>
                    <dd className="mt-0.5 text-ink">{entry.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}

            {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
          </div>

          {visual ? <div className="min-w-0">{visual}</div> : null}
        </div>
      </div>
    </div>
  );
}
