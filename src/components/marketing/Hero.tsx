import { CtaLink } from "@/components/ui/Cta";
import type { HomeCopy } from "@/content/home";

/**
 * The hero shows the one thing this product is about: a single document moving
 * through the system. The headline and buttons paint immediately — only the
 * document figure runs the staged reveal, so the largest text is never delayed.
 */
export function Hero({ copy }: { copy: HomeCopy["hero"] }) {
  const { doc } = copy;

  return (
    <div className="mx-auto max-w-[80rem] px-4 pb-16 pt-12 md:px-8 md:pb-24 md:pt-20">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,27rem)] lg:gap-16">
        <div className="max-w-2xl">
          <h1 className="text-display font-semibold text-ink">{copy.h1}</h1>
          <p className="mt-6 max-w-xl text-lead text-ink-70">{copy.lead}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <CtaLink href="/demo">{copy.primaryCta}</CtaLink>
            <CtaLink href="/hazir-heller" variant="secondary">
              {copy.secondaryCta}
            </CtaLink>
          </div>

          <p className="mt-6 max-w-lg text-sm leading-relaxed text-ink-50">
            {copy.assurance}
          </p>
        </div>

        <figure className="lg:pt-2">
          <div className="hero-step border border-rule bg-card">
            <div className="flex items-baseline justify-between border-b border-rule px-5 py-3">
              <span className="text-sm font-medium text-ink">
                {doc.title}{" "}
                <span className="font-mono text-ink-50">{doc.number}</span>
              </span>
              <span className="font-mono text-2xs text-ink-50">{doc.date}</span>
            </div>
            <div className="border-b border-rule px-5 py-3 text-sm text-ink-70">
              {doc.customer}
            </div>
            <div className="flex items-baseline justify-between gap-4 px-5 py-3 text-sm">
              <span className="text-ink">{doc.lineItem}</span>
              <span className="font-mono text-ink-50">{doc.quantity}</span>
            </div>
            <div className="flex items-baseline justify-between border-t border-rule px-5 py-3">
              <span className="text-sm text-ink-50">Cəmi</span>
              <span className="font-mono text-h3 font-medium text-ink">{doc.total}</span>
            </div>
          </div>

          <ol className="mt-0 ml-6 border-l border-rule pl-6">
            {doc.steps.map((step, index) => (
              <li
                key={step.module}
                className="hero-step relative flex items-baseline gap-3 pt-4"
                style={{ animationDelay: `${180 + index * 130}ms` }}
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[26px] top-[1.45rem] h-px w-5 bg-rule"
                />
                <span className="w-28 shrink-0 text-sm font-medium text-ink">
                  {step.module}
                </span>
                <span className="text-sm text-ink-70">{step.effect}</span>
              </li>
            ))}
          </ol>

          <figcaption className="mt-6 border-t border-rule pt-3 text-sm text-ink-50">
            {doc.caption}
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
