import { ArrowRight, type LucideIcon } from "lucide-react";

import { Link, type Href } from "@/i18n/navigation";
import { IconMark } from "./Cards";

export type RegisterItem = {
  href: Href;
  name: string;
  row: string;
  icon?: LucideIcon;
  /** Optional columns — in this product those are "who" and "which documents". */
  meta?: { label: string; value: string }[];
  /** Short trailing labels, e.g. the industries a module is used in most. */
  tags?: string[];
};

/**
 * The core layout device. Content that other sites would chop into identical
 * rounded cards is set here as rows of a register: a name, what it does, and
 * the columns a finance director actually asks about.
 *
 * A row uses the full width, which is the point — six of these can be compared
 * at a glance, where six cards in a grid have to be read one at a time.
 */
export function Register({ items }: { items: RegisterItem[] }) {
  return (
    <ul className="border-t border-rule-strong">
      {items.map((item, index) => (
        <li key={index} className="border-b border-rule">
          <Link
            href={item.href}
            className="group -mx-4 block rounded-md px-4 py-7 transition-colors hover:bg-card"
          >
            <div className="grid gap-x-10 gap-y-4 md:grid-cols-[15rem_minmax(0,1fr)_auto]">
              <div className="flex items-center gap-4">
                {item.icon ? <IconMark icon={item.icon} size="sm" /> : null}
                <span className="text-h3 font-extrabold text-ink">{item.name}</span>
              </div>

              <div className="min-w-0">
                <p className="text-lead leading-relaxed text-ink-70">{item.row}</p>

                {item.meta?.length ? (
                  <dl className="mt-4 grid gap-x-10 gap-y-1.5 text-sm sm:grid-cols-2">
                    {item.meta.map((entry) => (
                      <div key={entry.label} className="flex gap-2">
                        <dt className="shrink-0 text-ink-50">{entry.label}:</dt>
                        <dd className="text-ink-70">{entry.value}</dd>
                      </div>
                    ))}
                  </dl>
                ) : null}

                {item.tags?.length ? (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-pill bg-cloud-deep px-3 py-1 text-2xs font-bold text-ink-70"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              <ArrowRight
                aria-hidden="true"
                size={20}
                strokeWidth={2.5}
                className="hidden shrink-0 self-center text-brand-ink transition-transform duration-200 ease-out-soft group-hover:translate-x-1 md:block"
              />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
