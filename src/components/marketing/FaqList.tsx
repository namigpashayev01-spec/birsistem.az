import type { Faq } from "@/lib/content";

/**
 * Native <details> — no JavaScript, keyboard and screen-reader support for free,
 * and the answers stay in the HTML for crawlers.
 */
export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="border-t border-rule">
      {items.map((item) => (
        <details key={item.q} className="group border-b border-rule">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
            <span className="font-medium text-ink group-open:text-red-ink">{item.q}</span>
            <span
              aria-hidden="true"
              className="relative mt-2 block h-3 w-3 shrink-0 text-ink-50"
            >
              <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-current" />
              <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-current transition-opacity group-open:opacity-0" />
            </span>
          </summary>
          <p className="max-w-2xl pb-5 pr-6 leading-relaxed text-ink-70">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
