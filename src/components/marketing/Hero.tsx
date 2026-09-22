import { Check } from "lucide-react";

import { CtaLink } from "@/components/ui/Cta";
import { ProductScreen } from "@/components/product/screens";
import type { HomeCopy } from "@/content/home";

/**
 * The hero leads with the product. The headline and buttons paint immediately;
 * only the app window runs the staged reveal, so the largest text is never held
 * back by an animation.
 */
export function Hero({ copy }: { copy: HomeCopy["hero"] }) {
  return (
    <div className="bg-paper">
      <div className="mx-auto max-w-[78rem] px-5 pb-20 pt-14 md:px-8 md:pb-24 md:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,36rem)] lg:gap-16">
          <div className="max-w-xl">
            <h1 className="text-display font-medium text-ink">{copy.h1}</h1>
            <p className="mt-6 text-lead text-ink-70">{copy.lead}</p>

            <div className="mt-9 flex flex-wrap gap-3">
              <CtaLink href="/demo">{copy.primaryCta}</CtaLink>
              <CtaLink href="/hazir-heller" variant="secondary">
                {copy.secondaryCta}
              </CtaLink>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5">
              {copy.assurances.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-ink-70">
                  <Check
                    aria-hidden="true"
                    size={16}
                    strokeWidth={2.5}
                    className="shrink-0 text-red"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <figure className="hero-step min-w-0">
            <ProductScreen screen="icmal" />
            <figcaption className="mt-4 text-sm text-ink-50">{copy.screenCaption}</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
