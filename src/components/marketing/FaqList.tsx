import type { Faq } from "@/lib/content";

/**
 * Native <details> — no JavaScript, keyboard and screen-reader support for
 * free, and the answers stay in the HTML for crawlers. Each question is its own
 * rounded row so the list matches the cards elsewhere on the page.
 */
export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details
          key={item.q}
          className="group rounded-lg border border-rule bg-card px-5 shadow-card open:shadow-lift"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
            <span className="font-semibold text-ink group-open:text-red-ink">{item.q}</span>
            <span
              aria-hidden="true"
              className="relative mt-1.5 block h-3.5 w-3.5 shrink-0 text-red"
            >
              <span className="absolute left-0 top-1/2 h-0.5 w-3.5 -translate-y-1/2 rounded-full bg-current" />
              <span className="absolute left-1/2 top-0 h-3.5 w-0.5 -translate-x-1/2 rounded-full bg-current transition-transform duration-200 ease-out-soft group-open:rotate-90" />
            </span>
          </summary>
          <p className="max-w-2xl pb-5 leading-relaxed text-ink-70">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
