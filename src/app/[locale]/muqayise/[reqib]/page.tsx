import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import type { Locale } from "@/i18n/routing";
import {
  COMPARISONS,
  COMPARISON_BY_SLUG,
  type ComparisonSlug,
} from "@/content/comparisons";
import { pick } from "@/lib/content";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaLink } from "@/components/ui/Cta";
import { PageHero } from "@/components/marketing/PageHero";
import { Section, SectionTitle } from "@/components/marketing/Section";
import { FaqList } from "@/components/marketing/FaqList";

type Props = { params: Promise<{ locale: Locale; reqib: string }> };

export function generateStaticParams() {
  return COMPARISONS.map((entry) => ({ reqib: entry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, reqib } = await params;
  const entry = COMPARISON_BY_SLUG.get(reqib as ComparisonSlug);
  if (!entry) return {};
  const copy = pick(entry.copy, locale);
  return buildMetadata({
    locale,
    href: { pathname: "/muqayise/[reqib]", params: { reqib } },
    title: copy.seoTitle,
    description: copy.seoDescription,
  });
}

export default async function ComparisonPage({ params }: Props) {
  const { locale, reqib } = await params;
  setRequestLocale(locale);

  const entry = COMPARISON_BY_SLUG.get(reqib as ComparisonSlug);
  if (!entry) notFound();

  const copy = pick(entry.copy, locale);
  const t = await getTranslations();
  const url = absoluteUrl(locale, { pathname: "/muqayise/[reqib]", params: { reqib } });

  const schema = [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t("common.home"), item: absoluteUrl(locale, "/") },
        {
          "@type": "ListItem",
          position: 2,
          name: t("nav.comparison"),
          item: absoluteUrl(locale, "/muqayise"),
        },
        { "@type": "ListItem", position: 3, name: copy.title, item: url },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: copy.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": schema }} />

      <PageHero
        crumbs={[{ label: t("nav.comparison"), href: "/muqayise" }, { label: copy.rival }]}
        title={copy.title}
        lead={copy.lead}
        actions={<CtaLink href="/demo">{t("common.requestDemo")}</CtaLink>}
      />

      <Section tone="card" label={t("nav.comparison")}>
        <SectionTitle>{t("comparison.tableTitle", { rival: copy.rival })}</SectionTitle>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[42rem] border-collapse text-left">
            <caption className="sr-only">
              {t("comparison.tableTitle", { rival: copy.rival })}
            </caption>
            <thead>
              <tr className="border-y border-rule">
                <th scope="col" className="w-56 py-3 pr-6 text-sm font-medium text-ink-50">
                  {t("comparison.criterion")}
                </th>
                <th scope="col" className="py-3 pr-6 text-sm font-medium text-ink">
                  {SITE_NAME}
                </th>
                <th scope="col" className="py-3 text-sm font-medium text-ink-50">
                  {copy.rival}
                </th>
              </tr>
            </thead>
            <tbody>
              {copy.criteria.map((row) => (
                <tr key={row.criterion} className="border-b border-rule align-top">
                  <th scope="row" className="py-4 pr-6 font-medium text-ink">
                    {row.criterion}
                  </th>
                  <td className="py-4 pr-6 text-ink-70">{row.birsistem}</td>
                  <td className="py-4 text-ink-70">{row.rival}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section tone="paper" label={t("comparison.fairLabel")}>
        <SectionTitle>{copy.rivalWins.title}</SectionTitle>
        <p className="mt-5 max-w-2xl leading-relaxed text-ink-70">{copy.rivalWins.text}</p>
      </Section>

      <Section tone="card" label={t("nav.faq")}>
        <SectionTitle>{t("common.frequentQuestions")}</SectionTitle>
        <div className="mt-10">
          <FaqList items={copy.faq} />
        </div>
      </Section>

      <Section tone="paper" size="tight">
        <div className="max-w-xl">
          <h2 className="text-h2 font-semibold text-ink">{t("comparison.ctaTitle")}</h2>
          <p className="mt-4 text-lead text-ink-70">{t("comparison.ctaText")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaLink href="/demo">{t("common.requestDemo")}</CtaLink>
            <CtaLink href="/hazir-heller" variant="secondary">
              {t("nav.allModules")}
            </CtaLink>
          </div>
        </div>
      </Section>
    </>
  );
}
