import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/layout/Breadcrumbs";
import { Chip } from "./Section";

/**
 * Standard opening for an inner page. With a `visual` it splits in two; without
 * one the text keeps the full column rather than sitting beside an empty track.
 */
export function PageHero({
  crumbs,
  chip,
  title,
  lead,
  meta,
  actions,
  visual,
}: {
  crumbs: Crumb[];
  chip?: string;
  title: string;
  lead: string;
  meta?: { label: string; value: string }[];
  actions?: ReactNode;
  visual?: ReactNode;
}) {
  return (
    <div className="bg-paper">
      <div className="mx-auto max-w-[76rem] px-5 pb-16 pt-2 md:px-8 md:pb-20">
        <Breadcrumbs trail={crumbs} />

        <div
          className={
            visual
              ? "grid items-center gap-12 pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,34rem)] lg:gap-16"
              : "pt-6"
          }
        >
          <div className="min-w-0">
            {chip ? (
              <div className="mb-4">
                <Chip>{chip}</Chip>
              </div>
            ) : null}
            <h1 className="max-w-3xl text-h1 font-extrabold text-ink">{title}</h1>
            <p className="mt-6 max-w-2xl text-lead text-ink-70">{lead}</p>

            {meta?.length ? (
              <dl className="mt-9 grid max-w-3xl gap-6 rounded-md bg-cloud p-7 sm:grid-cols-2">
                {meta.map((entry) => (
                  <div key={entry.label} className="min-w-0">
                    <dt className="text-sm text-ink-50">{entry.label}</dt>
                    <dd className="mt-1 font-medium text-ink">{entry.value}</dd>
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
