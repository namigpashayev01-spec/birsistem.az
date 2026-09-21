import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/layout/Breadcrumbs";

/**
 * Standard opening for every inner page: breadcrumbs, one H1, a lead paragraph
 * and — where the page has them — the register columns that describe it.
 */
export function PageHero({
  crumbs,
  title,
  lead,
  meta,
  actions,
}: {
  crumbs: Crumb[];
  title: string;
  lead: string;
  meta?: { label: string; value: string }[];
  actions?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-[80rem] px-4 pb-12 md:px-8 md:pb-16">
      <Breadcrumbs trail={crumbs} />
      <div className="grid gap-8 pt-4 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-0">
        <div aria-hidden="true" />
        <div className="min-w-0 md:border-l md:border-rule md:pl-10">
          <h1 className="max-w-3xl text-h1 font-semibold text-ink">{title}</h1>
          <p className="mt-5 max-w-2xl text-lead text-ink-70">{lead}</p>

          {meta?.length ? (
            <dl className="mt-8 grid max-w-3xl gap-x-10 gap-y-3 border-t border-rule pt-5 sm:grid-cols-2">
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
      </div>
    </div>
  );
}
