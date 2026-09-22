import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import type { Locale } from "@/i18n/routing";
import { SECTORS } from "@/content/sectors";
import { SECTORS_PAGE } from "@/content/pages";
import { pick } from "@/lib/content";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaLink } from "@/components/ui/Cta";
import { PageHero } from "@/components/marketing/PageHero";
import { Section, SectionTitle } from "@/components/marketing/Section";
import { SECTOR_ICON, Tile } from "@/components/marketing/Cards";
import { Prose } from "@/components/marketing/Prose";

const HREF = "/sektorlar" as const;
const CHILD = "/sektorlar/[sektor]" as const;

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const copy = pick(SECTORS_PAGE, locale);
  return buildMetadata({
    locale,
    href: HREF,
    title: copy.seoTitle,
    description: copy.seoDescription,
  });
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const copy = pick(SECTORS_PAGE, locale);
  const t = await getTranslations();

  const items = SECTORS.map((entry) => {
    const c = pick(entry.copy, locale);
    return {
      slug: entry.slug,
      href: { pathname: CHILD, params: { sektor: entry.slug } },
      name: c.name,
      row: c.row,
    };
  });

  const schema = [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t("common.home"), item: absoluteUrl(locale, "/") },
        { "@type": "ListItem", position: 2, name: copy.title, item: absoluteUrl(locale, HREF) },
      ],
    },
    {
      "@type": "ItemList",
      name: copy.title,
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: absoluteUrl(locale, item.href),
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

      <Section tone="card" label={t("nav.sectors")}>
        <SectionTitle>{t("sectorsPage.listTitle")}</SectionTitle>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Tile
              key={item.name}
              href={item.href}
              icon={SECTOR_ICON[item.slug]}
              name={item.name}
              row={item.row}
            />
          ))}
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
