import { Link, type Href } from "@/i18n/navigation";

export type RegisterItem = {
  href: Href;
  name: string;
  row: string;
  /** Optional columns — in this product those are "who" and "which documents". */
  meta?: { label: string; value: string }[];
};

/**
 * The core layout device. Content that other sites would chop into identical
 * rounded cards is set here as rows of a register: a name, what it does, and
 * the columns a finance director actually asks about.
 */
export function Register({ items }: { items: RegisterItem[] }) {
  return (
    <ul className="border-t border-rule">
      {items.map((item, index) => (
        <li key={index} className="border-b border-rule">
          <Link href={item.href} className="group block py-5">
            <div className="grid gap-x-8 gap-y-2 md:grid-cols-[13rem_minmax(0,1fr)]">
              <div className="flex items-baseline gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1 block h-4 w-[2px] shrink-0 bg-transparent transition-colors group-hover:bg-red"
                />
                <span className="text-h3 font-semibold text-ink transition-colors group-hover:text-red-ink">
                  {item.name}
                </span>
              </div>
              <div>
                <p className="text-ink-70">{item.row}</p>
                {item.meta?.length ? (
                  <dl className="mt-3 grid gap-x-8 gap-y-1 text-sm sm:grid-cols-2">
                    {item.meta.map((entry) => (
                      <div key={entry.label} className="flex gap-2">
                        <dt className="shrink-0 text-ink-50">{entry.label}:</dt>
                        <dd className="text-ink-70">{entry.value}</dd>
                      </div>
                    ))}
                  </dl>
                ) : null}
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
