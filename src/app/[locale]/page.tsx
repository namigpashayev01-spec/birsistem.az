import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CircleCheck } from "lucide-react";

import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { HOME } from "@/content/home";
import { MODULES, MODULE_BY_SLUG } from "@/content/modules";
import { SECTORS } from "@/content/sectors";
import { pick } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaLink } from "@/components/ui/Cta";
import { ProductScreen } from "@/components/product/screens";
import { Hero } from "@/components/marketing/Hero";
import { Section, SectionTitle } from "@/components/marketing/Section";
import {
  Fact,
  ModuleCard,
  MODULE_ICON,
  NoteCard,
  SECTOR_ICON,
  Tile,
} from "@/components/marketing/Cards";
import { DocumentFlow } from "@/components/marketing/DocumentFlow";
import { FaqList } from "@/components/marketing/FaqList";
import { Steps } from "@/components/marketing/Steps";
import { Stamp } from "@/components/marketing/Stamp";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const copy = pick(HOME, locale);
  return buildMetadata({
    locale,
    href: "/",
    title: copy.seoTitle,
    description: copy.seoDescription,
    absoluteTitle: true,
  });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const copy = pick(HOME, locale);
  const t = await getTranslations();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: copy.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const moreLink = (href: "/hazir-heller" | "/sektorlar", label: string) => (
    <Link
      href={href}
      className="inline-flex min-h-11 items-center text-sm text-red-ink underline decoration-rule-strong underline-offset-4 hover:decoration-red"
    >
      {label}
    </Link>
  );

  return (
    <>
      <JsonLd data={faqSchema} />

      <Hero copy={copy.hero} />

      {/* Problem — tinted band, four cards with icons */}
      <Section tone="wash" label={copy.problems.label}>
        <SectionTitle sub={copy.problems.sub}>{copy.problems.title}</SectionTitle>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {copy.problems.items.map((item) => {
            const target = MODULE_BY_SLUG.get(item.module);
            if (!target) return null;
            const name = pick(target.copy, locale).name;
            return (
              <NoteCard key={item.title} icon={MODULE_ICON[item.module]} title={item.title}>
                <p>{item.text}</p>
                <Link
                  href={target.href}
                  className="mt-3 inline-block text-red-ink underline decoration-rule-strong underline-offset-4 hover:decoration-red"
                >
                  {t("common.solution")}: {name}
                </Link>
              </NoteCard>
            );
          })}
        </div>
      </Section>

      {/* How it works — one document, four modules */}
      <Section tone="card" label={copy.flow.label}>
        <SectionTitle sub={copy.flow.sub}>{copy.flow.title}</SectionTitle>
        <div className="mt-12">
          <DocumentFlow copy={copy.flow} />
        </div>
      </Section>

      {/* Modules — cards, not rows */}
      <Section
        tone="paper"
        label={copy.modules.label}
        aside={moreLink("/hazir-heller", t("nav.allModules"))}
      >
        <SectionTitle sub={copy.modules.sub}>{copy.modules.title}</SectionTitle>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((module) => {
            const c = pick(module.copy, locale);
            return (
              <ModuleCard
                key={module.slug}
                href={module.href}
                icon={MODULE_ICON[module.slug]}
                name={c.name}
                row={c.row}
                meta={[
                  { label: t("common.whoUsesIt"), value: c.audience },
                  { label: t("common.whichDocuments"), value: c.documents },
                ]}
              />
            );
          })}
        </div>
      </Section>

      {/* The dark band: real screens */}
      <Section tone="oxblood" label={copy.tour.label}>
        <SectionTitle tone="oxblood" sub={copy.tour.sub}>
          {copy.tour.title}
        </SectionTitle>
        <div className="mt-12 space-y-14">
          {copy.tour.screens.map((item, index) => (
            <div
              key={item.screen}
              className={`grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,32rem)] lg:gap-14 ${
                index % 2 === 1 ? "lg:[&>figure]:order-first" : ""
              }`}
            >
              <div className="max-w-md">
                <h3 className="text-h3 font-semibold text-on-oxblood">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-on-oxblood/80">{item.text}</p>
                <Link
                  href={MODULE_BY_SLUG.get(item.screen)?.href ?? "/hazir-heller"}
                  className="mt-4 inline-flex min-h-11 items-center text-sm text-on-oxblood underline decoration-on-oxblood/40 underline-offset-4 hover:decoration-on-oxblood"
                >
                  {pick(MODULE_BY_SLUG.get(item.screen)!.copy, locale).name}
                </Link>
              </div>
              <figure className="min-w-0">
                <ProductScreen screen={item.screen} />
              </figure>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 border-t border-on-oxblood/20 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {copy.facts.map((fact) => (
            <Fact key={fact.label} value={fact.value} label={fact.label} />
          ))}
        </div>
      </Section>

      {/* Sectors — compact tiles */}
      <Section
        tone="card"
        label={copy.sectors.label}
        aside={moreLink("/sektorlar", t("nav.allSectors"))}
      >
        <SectionTitle sub={copy.sectors.sub}>{copy.sectors.title}</SectionTitle>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {SECTORS.map((sector) => {
            const c = pick(sector.copy, locale);
            return (
              <Tile
                key={sector.slug}
                href={{ pathname: "/sektorlar/[sektor]", params: { sektor: sector.slug } }}
                icon={SECTOR_ICON[sector.slug]}
                name={c.name}
              />
            );
          })}
        </div>
      </Section>

      {/* Onboarding steps */}
      <Section tone="paper" label={copy.steps.label}>
        <SectionTitle sub={copy.steps.sub}>{copy.steps.title}</SectionTitle>
        <div className="mt-12">
          <Steps items={copy.steps.items} />
        </div>
      </Section>

      {/* How the demo is verified */}
      <Section tone="wash" label={copy.proof.label}>
        <SectionTitle sub={copy.proof.sub}>{copy.proof.title}</SectionTitle>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {copy.proof.checks.map((check) => (
            <NoteCard key={check.title} icon={CircleCheck} title={check.title}>
              <p>{check.text}</p>
            </NoteCard>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink-50">{copy.proof.note}</p>
      </Section>

      <Section tone="card" id="faq" label={copy.faq.label}>
        <SectionTitle>{copy.faq.title}</SectionTitle>
        <div className="mt-10 max-w-3xl">
          <FaqList items={copy.faq.items} />
        </div>
      </Section>

      <Section tone="paper" size="tight">
        <div className="flex flex-col gap-8 rounded-[2px] border border-rule bg-card p-8 md:flex-row md:items-end md:justify-between md:p-10">
          <div className="max-w-xl">
            <h2 className="text-h2 font-semibold text-ink">{copy.close.title}</h2>
            <p className="mt-4 text-lead text-ink-70">{copy.close.text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink href="/demo">{copy.close.primaryCta}</CtaLink>
              <CtaLink href="/qiymetler" variant="secondary">
                {copy.close.secondaryCta}
              </CtaLink>
            </div>
          </div>
          <Stamp label={copy.close.stamp} />
        </div>
      </Section>
    </>
  );
}
