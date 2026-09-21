import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { TOOLS, TOOL_BY_SLUG, type ToolSlug } from "@/content/tools";
import { CALC } from "@/content/calc";
import { MODULE_BY_SLUG, type ModuleSlug } from "@/content/modules";
import { pick } from "@/lib/content";
import { RATES_LABEL } from "@/lib/rates";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaLink } from "@/components/ui/Cta";
import { PageHero } from "@/components/marketing/PageHero";
import { Section, SectionTitle } from "@/components/marketing/Section";
import { FaqList } from "@/components/marketing/FaqList";
import { Calculator } from "@/components/tools/Calculators";

type Props = { params: Promise<{ locale: Locale; alet: string }> };

export function generateStaticParams() {
  return TOOLS.map((tool) => ({ alet: tool.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, alet } = await params;
  const entry = TOOL_BY_SLUG.get(alet as ToolSlug);
  if (!entry) return {};
  const copy = pick(entry.copy, locale);
  return buildMetadata({
    locale,
    href: { pathname: "/aletler/[alet]", params: { alet } },
    title: copy.seoTitle,
    description: copy.seoDescription,
  });
}

export default async function ToolPage({ params }: Props) {
  const { locale, alet } = await params;
  setRequestLocale(locale);

  const entry = TOOL_BY_SLUG.get(alet as ToolSlug);
  if (!entry) notFound();

  const copy = pick(entry.copy, locale);
  const labels = pick(CALC, locale);
  const t = await getTranslations();
  const url = absoluteUrl(locale, { pathname: "/aletler/[alet]", params: { alet } });

  const relatedModule = MODULE_BY_SLUG.get(entry.relatedModule as ModuleSlug);
  const relatedCopy = relatedModule ? pick(relatedModule.copy, locale) : null;

  const schema = [
    {
      "@type": "WebApplication",
      "@id": `${url}#app`,
      name: copy.title,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      browserRequirements: "JavaScript",
      description: copy.seoDescription,
      url,
      isAccessibleForFree: true,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t("common.home"), item: absoluteUrl(locale, "/") },
        {
          "@type": "ListItem",
          position: 2,
          name: t("nav.tools"),
          item: absoluteUrl(locale, "/aletler"),
        },
        { "@type": "ListItem", position: 3, name: copy.name, item: url },
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
        crumbs={[{ label: t("nav.tools"), href: "/aletler" }, { label: copy.name }]}
        title={copy.title}
        lead={copy.lead}
      />

      <Section label={labels.common.result}>
        <Calculator slug={entry.slug} labels={labels} locale={locale} />
        <p className="mt-8 border-t border-rule pt-4 text-sm text-ink-50">
          {labels.common.disclaimer}{" "}
          {labels.common.ratesNote.replace("{year}", RATES_LABEL)}
        </p>
      </Section>

      <Section label={t("common.readMore")}>
        <div className="space-y-10">
          {copy.explainer.map((block) => (
            <section key={block.title}>
              <h2 className="text-h3 font-semibold text-ink">{block.title}</h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-ink-70">{block.body}</p>
            </section>
          ))}
        </div>
      </Section>

      <Section label={t("nav.faq")}>
        <SectionTitle>{t("common.frequentQuestions")}</SectionTitle>
        <div className="mt-10">
          <FaqList items={copy.faq} />
        </div>
      </Section>

      {relatedCopy && relatedModule ? (
        <Section tone="card">
          <div className="max-w-xl">
            <h2 className="text-h2 font-semibold text-ink">
              {t("tools.ctaTitle", { product: SITE_NAME })}
            </h2>
            <p className="mt-4 text-lead text-ink-70">
              {t("tools.ctaText", { module: relatedCopy.name })}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink href="/demo">{t("common.requestDemo")}</CtaLink>
              <CtaLink href={relatedModule.href} variant="secondary">
                {relatedCopy.name}
              </CtaLink>
            </div>
          </div>
        </Section>
      ) : null}

      <Section label={t("nav.tools")}>
        <SectionTitle>{t("nav.allTools")}</SectionTitle>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          {TOOLS.filter((tool) => tool.slug !== entry.slug).map((tool) => (
            <li key={tool.slug}>
              <Link
                href={{ pathname: "/aletler/[alet]", params: { alet: tool.slug } }}
                className="text-sm text-red-ink underline decoration-rule-strong underline-offset-4 hover:decoration-red"
              >
                {pick(tool.copy, locale).name}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
