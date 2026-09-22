import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CircleCheck, Gauge, Layers, MonitorSmartphone } from "lucide-react";

import type { Locale } from "@/i18n/routing";
import { HOME } from "@/content/home";
import { MODULES, MODULE_BY_SLUG } from "@/content/modules";
import { SECTORS } from "@/content/sectors";
import { pick } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaLink, TextLink } from "@/components/ui/Cta";
import { ProductScreen } from "@/components/product/screens";
import { Hero } from "@/components/marketing/Hero";
import { Section, SectionTitle } from "@/components/marketing/Section";
import { Split } from "@/components/marketing/Split";
import {
  Fact,
  IconMark,
  MODULE_ICON,
  ModuleCard,
  NoteCard,
  SECTOR_ICON,
  Tile,
} from "@/components/marketing/Cards";
import { DocumentFlow } from "@/components/marketing/DocumentFlow";
import { FaqList } from "@/components/marketing/FaqList";
import { Steps } from "@/components/marketing/Steps";

type Props = { params: Promise<{ locale: Locale }> };

const HIGHLIGHT_ICON = [Gauge, MonitorSmartphone, Layers];

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

  return (
    <>
      <JsonLd data={faqSchema} />

      <Hero copy={copy.hero} />

      {/* Three promises, straight under the hero */}
      <Section tone="tint" size="tight">
        <ul className="grid gap-8 md:grid-cols-3 md:gap-10">
          {copy.highlights.map((item, index) => {
            const Icon = HIGHLIGHT_ICON[index] ?? Gauge;
            return (
              <li key={item.title} className="flex min-w-0 gap-4">
                <IconMark icon={Icon} />
                <div className="min-w-0">
                  <h2 className="text-h3 font-semibold text-ink">{item.title}</h2>
                  <p className="mt-2 leading-relaxed text-ink-70">{item.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* What the product actually looks like — alternating screens */}
      <Section tone="paper">
        <SectionTitle align="center" sub={copy.tour.sub}>
          {copy.tour.title}
        </SectionTitle>
        <div className="mt-16 space-y-20 md:space-y-28">
          {copy.tour.screens.map((item, index) => {
            const target = MODULE_BY_SLUG.get(item.screen);
            return (
              <Split
                key={item.screen}
                chip={item.chip}
                title={item.title}
                text={item.text}
                checks={item.checks}
                reverse={index % 2 === 1}
                link={
                  target
                    ? {
                        href: target.href,
                        label: t("home.moreAbout", {
                          module: pick(target.copy, locale).name,
                        }),
                      }
                    : undefined
                }
                visual={<ProductScreen screen={item.screen} />}
              />
            );
          })}
        </div>
      </Section>

      {/* One document, four modules */}
      <Section tone="tint" label={copy.flow.label}>
        <SectionTitle sub={copy.flow.sub}>{copy.flow.title}</SectionTitle>
        <div className="mt-12">
          <DocumentFlow copy={copy.flow} />
        </div>
      </Section>

      {/* Modules */}
      <Section
        tone="paper"
        label={copy.modules.label}
        aside={<TextLink href="/hazir-heller">{t("nav.allModules")}</TextLink>}
      >
        <SectionTitle sub={copy.modules.sub}>{copy.modules.title}</SectionTitle>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((entry) => {
            const c = pick(entry.copy, locale);
            return (
              <ModuleCard
                key={entry.slug}
                href={entry.href}
                icon={MODULE_ICON[entry.slug]}
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

      {/* Sectors */}
      <Section
        tone="tint"
        label={copy.sectors.label}
        aside={<TextLink href="/sektorlar">{t("nav.allSectors")}</TextLink>}
      >
        <SectionTitle sub={copy.sectors.sub}>{copy.sectors.title}</SectionTitle>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SECTORS.map((sector) => {
            const c = pick(sector.copy, locale);
            return (
              <Tile
                key={sector.slug}
                href={{ pathname: "/sektorlar/[sektor]", params: { sektor: sector.slug } }}
                icon={SECTOR_ICON[sector.slug]}
                name={c.name}
                row={c.row}
              />
            );
          })}
        </div>
      </Section>

      {/* The dark band: how a demo is verified, plus the product facts */}
      <Section tone="oxblood" label={copy.proof.label}>
        <SectionTitle tone="oxblood" sub={copy.proof.sub}>
          {copy.proof.title}
        </SectionTitle>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {copy.proof.checks.map((check) => (
            <NoteCard key={check.title} tone="oxblood" icon={CircleCheck} title={check.title}>
              <p>{check.text}</p>
            </NoteCard>
          ))}
        </div>
        <p className="mt-6 text-sm text-on-oxblood/65">{copy.proof.note}</p>

        <div className="mt-16 grid gap-8 border-t border-white/15 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {copy.facts.map((fact) => (
            <Fact key={fact.label} value={fact.value} label={fact.label} />
          ))}
        </div>
      </Section>

      {/* Problems this solves */}
      <Section tone="paper" label={copy.problems.label}>
        <SectionTitle sub={copy.problems.sub}>{copy.problems.title}</SectionTitle>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {copy.problems.items.map((item) => {
            const target = MODULE_BY_SLUG.get(item.module);
            if (!target) return null;
            const name = pick(target.copy, locale).name;
            return (
              <NoteCard key={item.title} icon={MODULE_ICON[item.module]} title={item.title}>
                <p>{item.text}</p>
                <TextLink href={target.href} className="mt-1 text-sm">
                  {t("common.solution")}: {name}
                </TextLink>
              </NoteCard>
            );
          })}
        </div>
      </Section>

      {/* Onboarding */}
      <Section tone="tint" label={copy.steps.label}>
        <SectionTitle sub={copy.steps.sub}>{copy.steps.title}</SectionTitle>
        <div className="mt-12">
          <Steps items={copy.steps.items} />
        </div>
      </Section>

      <Section tone="paper" id="faq" label={copy.faq.label}>
        <SectionTitle>{copy.faq.title}</SectionTitle>
        <div className="mt-10 max-w-3xl">
          <FaqList items={copy.faq.items} />
        </div>
      </Section>

      {/* Closing call to action */}
      <Section tone="paper" size="tight">
        <div className="rounded-xl bg-oxblood px-7 py-12 text-center md:px-16 md:py-16">
          <h2 className="mx-auto max-w-2xl text-h2 font-medium text-on-oxblood">
            {copy.close.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lead text-on-oxblood/80">{copy.close.text}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <CtaLink href="/demo">{copy.close.primaryCta}</CtaLink>
            <CtaLink href="/qiymetler" variant="ghost">
              {copy.close.secondaryCta}
            </CtaLink>
          </div>
        </div>
      </Section>
    </>
  );
}
