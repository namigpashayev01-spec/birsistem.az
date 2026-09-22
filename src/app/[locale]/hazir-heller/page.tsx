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
import { Section, SectionTitle } from "@/components/marketing/Section";
import { MODULE_ICON, ModuleCard } from "@/components/marketing/Cards";
import { Prose } from "@/components/marketing/Prose";

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

      <Section tone="card" label={t("nav.solutions")}>
        <SectionTitle>{t("solutions.listTitle")}</SectionTitle>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

      {copy.sections?.length ? (
        <Section tone="paper" label={t("common.readMore")}>
          <Prose sections={copy.sections} />
        </Section>
      ) : null}
    </>
  );
}
