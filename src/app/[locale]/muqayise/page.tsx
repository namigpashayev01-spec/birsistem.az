import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import type { Locale } from "@/i18n/routing";
import { COMPARISONS } from "@/content/comparisons";
import { COMPARISON_PAGE } from "@/content/pages";
import { pick } from "@/lib/content";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaLink } from "@/components/ui/Cta";
import { PageHero } from "@/components/marketing/PageHero";
import { Section } from "@/components/marketing/Section";
import { Register } from "@/components/marketing/Register";
import { Prose } from "@/components/marketing/Prose";

const HREF = "/muqayise" as const;
const CHILD = "/muqayise/[reqib]" as const;

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const copy = pick(COMPARISON_PAGE, locale);
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

  const copy = pick(COMPARISON_PAGE, locale);
  const t = await getTranslations();

  const items = COMPARISONS.map((entry) => {
    const c = pick(entry.copy, locale);
    return {
      href: { pathname: CHILD, params: { reqib: entry.slug } },
      name: c.title,
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

      <Section label={t("nav.comparison")}>
        <Register items={items} />
      </Section>

      {copy.sections?.length ? (
        <Section label={t("common.readMore")}>
          <Prose sections={copy.sections} />
        </Section>
      ) : null}
    </>
  );
}
