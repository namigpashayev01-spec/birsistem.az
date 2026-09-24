import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CircleCheck, Gauge, Layers, MonitorSmartphone } from "lucide-react";

import type { Locale } from "@/i18n/routing";
import { HOME } from "@/content/home";
import { MODULES, MODULE_BY_SLUG } from "@/content/modules";
import { COMPARISONS } from "@/content/comparisons";
import { SECTORS } from "@/content/sectors";
import { pick } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaLink, TextLink } from "@/components/ui/Cta";
import { Hero } from "@/components/marketing/Hero";
import { Chip, Section, SectionTitle } from "@/components/marketing/Section";
import {
  IconMark,
  LinkCard,
  MODULE_ICON,
  NoteCard,
  SECTOR_ICON,
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

      {/* Industries first: the visitor's opening question is "is this for me?"
          The row sits on white and each card is a red slab, so the hero's block
          returns at card scale instead of the page dropping into a card grid. */}
      <Section tone="paper" label={copy.sectors.label} align="center">
        <SectionTitle align="center" sub={copy.sectors.sub}>
          {copy.sectors.title}
        </SectionTitle>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SECTORS.map((sector) => {
            const c = pick(sector.copy, locale);
            return (
              <LinkCard
                key={sector.slug}
                tone="deep"
                href={{ pathname: "/sektorlar/[sektor]", params: { sektor: sector.slug } }}
                icon={SECTOR_ICON[sector.slug]}
                name={c.name}
                row={c.row}
              />
            );
          })}
        </div>
        <div className="mt-10 flex justify-center">
          <TextLink href="/sektorlar">{t("nav.allSectors")}</TextLink>
        </div>
      </Section>

      {/* Three promises */}
      <Section tone="paper" size="tight">
        <ul className="grid gap-8 md:grid-cols-3 md:gap-10">
          {copy.highlights.map((item, index) => {
            const Icon = HIGHLIGHT_ICON[index] ?? Gauge;
            return (
              <li key={item.title} className="flex min-w-0 gap-4">
                <IconMark icon={Icon} />
                <div className="min-w-0">
                  <h2 className="text-h3 font-bold text-ink">{item.title}</h2>
                  <p className="mt-2 leading-relaxed text-ink-70">{item.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* The system's three busiest modules, as one ruled ledger rather than
          three alternating hero-sized rows. Each entry states what the module
          settles on the left and what it hands back on the right; the mono
          index down the edge gives the section a spine and keeps the three
          from reading as the same block printed three times. */}
      <Section tone="cloud" label={copy.tour.label} align="center">
        <SectionTitle align="center" sub={copy.tour.sub}>
          {copy.tour.title}
        </SectionTitle>
        <div className="mt-14 border-t border-ink/10">
          {copy.tour.screens.map((item, index) => {
            const target = MODULE_BY_SLUG.get(item.screen);
            return (
              <article
                key={item.screen}
                className="grid gap-x-10 gap-y-6 border-b border-ink/10 py-10 md:py-12 lg:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,24rem)] lg:gap-x-12"
              >
                {/* The index, set in the mono face the rest of the site keeps
                    for figures. Decorative: the heading below carries the name.
                    Below lg it would take a whole row of a phone screen on its
                    own, so there it sits on the chip's line instead. */}
                <p
                  aria-hidden="true"
                  className="hidden font-mono text-h3 font-medium text-brand-ink lg:block lg:pt-1"
                >
                  {String(index + 1).padStart(2, "0")}
                </p>

                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="font-mono text-sm font-medium text-brand-ink lg:hidden"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Chip tone="cloud">{item.chip}</Chip>
                  </div>
                  <h3 className="mt-4 text-h2 font-extrabold text-ink">{item.title}</h3>
                  <p className="mt-4 max-w-xl leading-relaxed text-ink-70">{item.text}</p>
                  {target ? (
                    <TextLink href={target.href} className="mt-6">
                      {t("home.moreAbout", { module: pick(target.copy, locale).name })}
                    </TextLink>
                  ) : null}
                </div>

                {/* What the module hands back, as a spec table: each entry ruled
                    off at the top rather than ticked, so this reads differently
                    from the checklists further down the page. */}
                <div className="min-w-0">
                  <p className="flex items-center gap-2.5 text-2xs font-bold uppercase tracking-wider text-ink-50">
                    <IconMark icon={MODULE_ICON[item.screen]} size="sm" />
                    {t("common.whichDocuments")}
                  </p>
                  <ul className="mt-5 grid gap-x-6 gap-y-3.5 sm:grid-cols-2 lg:grid-cols-1 lg:gap-y-0">
                    {item.checks.map((check) => (
                      <li
                        key={check}
                        className="min-w-0 border-t border-rule pt-3 font-medium leading-snug text-ink lg:pb-3"
                      >
                        {check}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      {/* One document, four modules */}
      <Section tone="paper" label={copy.flow.label}>
        <SectionTitle sub={copy.flow.sub}>{copy.flow.title}</SectionTitle>
        <div className="mt-12">
          <DocumentFlow copy={copy.flow} />
        </div>
      </Section>

      {/* Modules */}
      <Section tone="cloud" label={copy.modules.label} align="center">
        <SectionTitle align="center" sub={copy.modules.sub}>
          {copy.modules.title}
        </SectionTitle>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((entry) => {
            const c = pick(entry.copy, locale);
            return (
              <LinkCard
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
        <div className="mt-10 flex justify-center">
          <TextLink href="/hazir-heller">{t("nav.allModules")}</TextLink>
        </div>
      </Section>

      {/* Where the buyer is coming from. The FAQ's first question is about
          migrating off Excel or 1C, so the page answers it before the demo
          pitch rather than leaving it to the bottom. Ruled entries, not cards:
          the grids above already carry enough boxes. */}
      <Section tone="paper" label={copy.migration.label}>
        <SectionTitle sub={copy.migration.sub}>{copy.migration.title}</SectionTitle>
        <ul className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-3">
          {COMPARISONS.map((entry) => {
            const c = pick(entry.copy, locale);
            return (
              <li
                key={entry.slug}
                className="flex min-w-0 flex-col border-t-2 border-ink/85 pt-6"
              >
                <h3 className="text-h2 font-extrabold text-ink">{c.rival}</h3>
                <p className="mt-3 leading-relaxed text-ink-70">{c.row}</p>
                {/* Pushed to the foot so the three links sit on one line
                    whatever the description above wraps to. */}
                <TextLink
                  href={{ pathname: "/muqayise/[reqib]", params: { reqib: entry.slug } }}
                  className="mt-auto pt-5"
                >
                  {copy.migration.linkLabel}
                </TextLink>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* The dark band: how a demo is verified, plus the product facts */}
      <Section tone="deep" label={copy.proof.label}>
        <SectionTitle tone="deep" sub={copy.proof.sub}>
          {copy.proof.title}
        </SectionTitle>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {copy.proof.checks.map((check) => (
            <NoteCard key={check.title} tone="deep" icon={CircleCheck} title={check.title}>
              <p>{check.text}</p>
            </NoteCard>
          ))}
        </div>
        <p className="mt-6 text-sm text-on-deep/85">{copy.proof.note}</p>
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
      <Section tone="cloud" label={copy.steps.label}>
        <SectionTitle sub={copy.steps.sub}>{copy.steps.title}</SectionTitle>
        <div className="mt-12">
          <Steps items={copy.steps.items} />
        </div>
      </Section>

      {/* Heading on the left, questions on the right: a narrow list of answers
          centred under a full-width heading leaves half the band empty. */}
      <Section tone="paper" id="faq">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Chip>{copy.faq.label}</Chip>
            <h2 className="mt-5 text-h2 font-extrabold text-ink">{copy.faq.title}</h2>
            <TextLink href="/faq" className="mt-6">
              {t("nav.faq")}
            </TextLink>
          </div>
          <FaqList items={copy.faq.items} />
        </div>
      </Section>

      {/* Closing call to action. Cloud rather than teal: the footer below it is
          the page's last teal slab, and two dark slabs touching read as one
          block with a seam through it. White, then grey, then deep. */}
      <Section tone="cloud">
        <div className="text-center">
          <h2 className="mx-auto max-w-3xl text-h2 font-extrabold text-ink">
            {copy.close.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lead text-ink-70">{copy.close.text}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <CtaLink href="/demo">{copy.close.primaryCta}</CtaLink>
            <CtaLink href="/qiymetler" variant="secondary">
              {copy.close.secondaryCta}
            </CtaLink>
          </div>
        </div>
      </Section>
    </>
  );
}
