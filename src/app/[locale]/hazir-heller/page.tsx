import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import type { Locale } from "@/i18n/routing";
import { MODULES } from "@/content/modules";
import { SOLUTIONS_PAGE } from "@/content/pages";
import { pick } from "@/lib/content";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaLink } from "@/components/ui/Cta";
import { PageHero } from "@/components/marketing/PageHero";
import { Stamp } from "@/components/marketing/Stamp";
import { Section, SectionTitle } from "@/components/marketing/Section";
import { MODULE_ICON } from "@/components/marketing/Cards";
import { Register } from "@/components/marketing/Register";
import { SECTOR_BY_SLUG, type SectorSlug } from "@/content/sectors";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const copy = pick(SOLUTIONS_PAGE, locale);
  return buildMetadata({
    locale,
    href: "/hazir-heller",
    title: copy.seoTitle,
    description: copy.seoDescription,
  });
}

export default async function SolutionsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const copy = pick(SOLUTIONS_PAGE, locale);
  const t = await getTranslations();

  // Each module already records the industries it is used in most; naming them
  // here lets a visitor pick by their own business rather than by module name.
  const items = MODULES.map((module) => {
    const c = pick(module.copy, locale);
    return {
      href: module.href,
      icon: MODULE_ICON[module.slug],
      name: c.name,
      row: c.row,
      meta: [
        { label: t("common.whoUsesIt"), value: c.audience },
        { label: t("common.whichDocuments"), value: c.documents },
      ],
      tags: module.relatedSectors
        .map((slug) => SECTOR_BY_SLUG.get(slug as SectorSlug))
        .filter((sector) => sector !== undefined)
        .map((sector) => pick(sector.copy, locale).name),
    };
  });

  const schema = [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t("common.home"), item: absoluteUrl(locale, "/") },
        {
          "@type": "ListItem",
          position: 2,
          name: copy.title,
          item: absoluteUrl(locale, "/hazir-heller"),
        },
      ],
    },
    {
      "@type": "ItemList",
      name: copy.title,
      itemListElement: MODULES.map((m, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: pick(m.copy, locale).name,
        url: absoluteUrl(locale, m.href),
      })),
    },
  ];

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": schema }} />

      <PageHero
        crumbs={[{ label: copy.title }]}
        title={copy.title}
        lead={copy.lead}
        actions={<CtaLink href="/demo">{t("common.requestDemo")}</CtaLink>}
      />

      {/* A register rather than a grid of six cards: the rows use the full
          width, so all six modules can be compared in one pass instead of read
          one at a time. */}
      <Section tone="cloud" label={t("nav.solutions")}>
        <SectionTitle sub={copy.listSub}>{t("solutions.listTitle")}</SectionTitle>
        <div className="mt-12">
          <Register items={items} />
        </div>
      </Section>

      {copy.sections?.length ? (
        <Section tone="paper">
          <div className="space-y-14 md:space-y-18">
            {copy.sections.map((section) => (
              <div
                key={section.title}
                className="grid gap-6 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16"
              >
                <h2 className="text-h2 font-extrabold text-ink">{section.title}</h2>
                <div className="space-y-4">
                  {section.body.map((paragraph, index) => (
                    <p key={index} className="max-w-2xl text-lead text-ink-70">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      ) : null}

      <Section tone="paper" size="tight">
        <div className="flex flex-col gap-8 rounded-lg bg-cloud p-8 md:flex-row md:items-end md:justify-between md:p-10">
          <div className="max-w-xl">
            <h2 className="text-h2 font-extrabold text-ink">{t("solutions.ctaTitle")}</h2>
            <p className="mt-4 text-lead text-ink-70">{t("solutions.ctaText")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink href="/demo">{t("common.requestDemo")}</CtaLink>
              <CtaLink href="/qiymetler" variant="secondary">
                {t("common.requestOffer")}
              </CtaLink>
            </div>
          </div>
          <Stamp label={t("common.localTeam")} />
        </div>
      </Section>
    </>
  );
}
