import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import type { Locale } from "@/i18n/routing";
import { PRICING_PAGE } from "@/content/pages";
import { PRICING } from "@/content/pricing";
import { MODULES } from "@/content/modules";
import { SECTORS } from "@/content/sectors";
import { pick } from "@/lib/content";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { CONTACT } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaAnchor } from "@/components/ui/Cta";
import { PageHero } from "@/components/marketing/PageHero";
import { Section, SectionTitle } from "@/components/marketing/Section";
import { FaqList } from "@/components/marketing/FaqList";
import { LeadForm } from "@/components/forms/LeadForm";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const copy = pick(PRICING_PAGE, locale);
  return buildMetadata({
    locale,
    href: "/qiymetler",
    title: copy.seoTitle,
    description: copy.seoDescription,
  });
}

export default async function PricingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const page = pick(PRICING_PAGE, locale);
  const copy = pick(PRICING, locale);
  const t = await getTranslations();

  const sectors = SECTORS.map((sector) => ({
    value: sector.slug,
    label: pick(sector.copy, locale).name,
  }));
  const modules = MODULES.map((module) => ({
    value: module.slug,
    label: pick(module.copy, locale).name,
  }));

  const schema = [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t("common.home"), item: absoluteUrl(locale, "/") },
        {
          "@type": "ListItem",
          position: 2,
          name: page.title,
          item: absoluteUrl(locale, "/qiymetler"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${absoluteUrl(locale, "/qiymetler")}#faq`,
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
        crumbs={[{ label: page.title }]}
        title={page.title}
        lead={page.lead}
        actions={<CtaAnchor href="#teklif">{t("common.requestOffer")}</CtaAnchor>}
      />

      <Section tone="card" label={page.title}>
        <ul className="grid gap-px border border-rule bg-rule md:grid-cols-3">
          {copy.tiers.map((tier) => (
            <li key={tier.name} className="bg-card p-6">
              <h2 className="text-h3 font-semibold text-ink">{tier.name}</h2>
              <p className="mt-1 text-sm text-ink-50">{tier.forWhom}</p>
              <p className="mt-4 leading-relaxed text-ink-70">{tier.summary}</p>
              <ul className="mt-5 space-y-2 border-t border-rule pt-4 text-sm text-ink-70">
                {tier.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="mt-2 block h-px w-3 shrink-0 bg-rule-strong" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <CtaAnchor href="#teklif" variant="secondary" className="mt-6 w-full">
                {t("common.requestOffer")}
              </CtaAnchor>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="paper" label={t("pricing.matrixLabel")}>
        <SectionTitle>{t("pricing.matrixTitle")}</SectionTitle>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[46rem] border-collapse text-left">
            <thead>
              <tr className="border-y border-rule">
                <th scope="col" className="w-64 py-3 pr-6 text-sm font-medium text-ink-50">
                  {t("pricing.feature")}
                </th>
                {copy.tiers.map((tier) => (
                  <th
                    key={tier.name}
                    scope="col"
                    className="py-3 pr-6 text-sm font-medium text-ink"
                  >
                    {tier.name}
                  </th>
                ))}
              </tr>
            </thead>
            {copy.matrix.map((group) => (
              <tbody key={group.group}>
                <tr>
                  <th
                    scope="colgroup"
                    colSpan={4}
                    className="border-b border-rule pb-2 pt-6 text-sm font-medium text-ink-50"
                  >
                    {group.group}
                  </th>
                </tr>
                {group.rows.map((row) => (
                  <tr key={row.feature} className="border-b border-rule align-top">
                    <th scope="row" className="py-3 pr-6 font-normal text-ink">
                      {row.feature}
                    </th>
                    {row.values.map((value, index) => (
                      <td key={index} className="py-3 pr-6 text-ink-70">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </div>
      </Section>

      <Section tone="card" label={t("pricing.includedLabel")}>
        <SectionTitle>{t("pricing.includedTitle")}</SectionTitle>
        <ul className="mt-10 border-t border-rule">
          {copy.included.map((item) => (
            <li key={item.title} className="border-b border-rule py-5">
              <div className="grid gap-x-8 gap-y-1 md:grid-cols-[14rem_minmax(0,1fr)]">
                <h3 className="text-h3 font-semibold text-ink">{item.title}</h3>
                <p className="max-w-2xl leading-relaxed text-ink-70">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="paper" label={t("nav.faq")}>
        <SectionTitle>{t("common.frequentQuestions")}</SectionTitle>
        <div className="mt-10">
          <FaqList items={copy.faq} />
        </div>
      </Section>

      <Section label={t("common.requestOffer")} tone="card" id="teklif">
        <SectionTitle sub={copy.formLead}>{copy.formTitle}</SectionTitle>
        <div className="mt-10">
          <LeadForm
            type="PRICING"
            submitLabel={t("form.submitOffer")}
            sectors={sectors}
            modules={modules}
            withModules
            withEmployees
            phone={CONTACT.phone}
          />
        </div>
      </Section>
    </>
  );
}
