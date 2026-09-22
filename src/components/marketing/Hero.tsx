import { CtaLink } from "@/components/ui/Cta";
import { ProductScreen } from "@/components/product/screens";
import type { HomeCopy } from "@/content/home";

/**
 * The hero leads with the product itself. The headline and buttons paint
 * immediately; only the app window runs the staged reveal, so the largest text
 * is never held back by an animation.
 */
export function Hero({ copy }: { copy: HomeCopy["hero"] }) {
  return (
    <div className="border-b border-rule bg-paper">
      <div className="mx-auto max-w-[80rem] px-4 pb-16 pt-12 md:px-8 md:pb-24 md:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,34rem)] lg:gap-14">
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

          <figure className="hero-step min-w-0">
            <ProductScreen screen="icmal" />
            <figcaption className="mt-3 text-sm text-ink-50">{copy.screenCaption}</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
