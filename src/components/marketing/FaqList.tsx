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
          className="group rounded-md bg-card px-6 shadow-card transition-shadow duration-200 open:shadow-lift"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
            <span className="text-h3 font-bold text-ink">{item.q}</span>
            <span
              aria-hidden="true"
              className="relative mt-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-rule text-brand-ink transition-colors group-open:border-transparent group-open:bg-brand group-open:text-white"
            >
              <span className="absolute h-0.5 w-3.5 rounded-full bg-current" />
              <span className="absolute h-3.5 w-0.5 rounded-full bg-current transition-transform duration-200 ease-out-soft group-open:rotate-90" />
            </span>
          </summary>
          <p className="max-w-2xl pb-6 leading-relaxed text-ink-70">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
