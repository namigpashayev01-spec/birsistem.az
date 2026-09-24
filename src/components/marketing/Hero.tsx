import { CtaLink } from "@/components/ui/Cta";
import { Mark } from "@/components/marketing/Section";
import type { HomeCopy } from "@/content/home";

/**
 * The opening: one deep oxblood slab with the claim set as large as it will go.
 * No picture of the software — the sentence itself is the argument, and it stays
 * true when the product changes.
 *
 * The h1 words lift out from behind a clip on first paint. Each word animates
 * independently with its own `both` fill, so the headline is present in the
 * HTML, reaches its final state under any interruption, and never blocks paint.
 */
export function Hero({ copy }: { copy: HomeCopy["hero"] }) {
  const words = copy.h1.split(" ");

  return (
    <div className="px-3 pt-3 md:px-4 md:pt-4">
      <div className="on-deep mx-auto max-w-[82rem] rounded-lg bg-deep text-on-deep">
        <div className="mx-auto max-w-[76rem] px-5 pb-14 pt-16 md:px-12 md:pb-16 md:pt-24 lg:pt-28">
          <p
            className="hero-step flex items-center gap-2 text-[0.8125rem] font-bold tracking-wide text-on-deep/85"
            style={{ animationDelay: "60ms" }}
          >
            <Mark tone="light" />
            {copy.eyebrow}
          </p>

          <h1 className="mt-7 max-w-5xl text-display font-extrabold text-on-deep">
            {/* One clip per word: a word that wraps still rises out of its own
                line rather than out of the line above it. */}
            {words.map((word, index) => (
              <span key={index} className="hero-line mr-[0.26em]">
                <span style={{ animationDelay: `${140 + index * 50}ms` }}>{word}</span>
              </span>
            ))}
          </h1>

          <p
            className="hero-step mt-10 max-w-2xl text-lead text-on-deep/85"
            style={{ animationDelay: "440ms" }}
          >
            {copy.lead}
          </p>

          <div className="hero-step mt-10 flex flex-wrap gap-3" style={{ animationDelay: "520ms" }}>
            <CtaLink href="/demo" variant="inverse">
              {copy.primaryCta}
            </CtaLink>
            <CtaLink href="/hazir-heller" variant="ghost">
              {copy.secondaryCta}
            </CtaLink>
          </div>

        </div>
      </div>
    </div>
  );
}
