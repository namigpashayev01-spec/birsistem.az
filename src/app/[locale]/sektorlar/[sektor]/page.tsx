import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { SECTORS, SECTOR_BY_SLUG, type SectorSlug } from "@/content/sectors";
import { MODULE_BY_SLUG } from "@/content/modules";
import { pick } from "@/lib/content";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaLink } from "@/components/ui/Cta";
import { PageHero } from "@/components/marketing/PageHero";
import { Section, SectionTitle } from "@/components/marketing/Section";
import { Register } from "@/components/marketing/Register";
import { FaqList } from "@/components/marketing/FaqList";
import { Stamp } from "@/components/marketing/Stamp";

type Props = { params: Promise<{ locale: Locale; sektor: string }> };

export function generateStaticParams() {
  return SECTORS.map((sector) => ({ sektor: sector.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, sektor } = await params;
  const entry = SECTOR_BY_SLUG.get(sektor as SectorSlug);
  if (!entry) return {};
  const copy = pick(entry.copy, locale);
  return buildMetadata({
    locale,
    href: { pathname: "/sektorlar/[sektor]", params: { sektor } },
    title: copy.seoTitle,
    description: copy.seoDescription,
  });
}

export default async function SectorPage({ params }: Props) {
  const { locale, sektor } = await params;
  setRequestLocale(locale);

  const entry = SECTOR_BY_SLUG.get(sektor as SectorSlug);
  if (!entry) notFound();

  const copy = pick(entry.copy, locale);
  const t = await getTranslations();
  const href = { pathname: "/sektorlar/[sektor]" as const, params: { sektor } };
  const url = absoluteUrl(locale, href);

  const moduleItems = entry.modules
    .map((slug) => MODULE_BY_SLUG.get(slug))
    .filter((module) => module !== undefined)
    .map((module) => {
      const c = pick(module.copy, locale);
      return { href: module.href, name: c.name, row: c.row };
    });

  const schema = [
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: copy.title,
      serviceType: copy.name,
      description: copy.seoDescription,
      url,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "Azerbaijan" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t("common.home"), item: absoluteUrl(locale, "/") },
        {
          "@type": "ListItem",
          position: 2,
          name: t("nav.sectors"),
          item: absoluteUrl(locale, "/sektorlar"),
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
        crumbs={[{ label: t("nav.sectors"), href: "/sektorlar" }, { label: copy.name }]}
        title={copy.title}
        lead={copy.lead}
        actions={
          <>
            <CtaLink href="/demo">{t("common.requestDemo")}</CtaLink>
            <CtaLink href="/qiymetler" variant="secondary">
              {t("common.requestOffer")}
            </CtaLink>
          </>
        }
      />

      <Section label={t("common.whatItDoes")}>
        <SectionTitle>{t("sector.problemsTitle")}</SectionTitle>
        <ul className="mt-10 border-t border-rule">
          {copy.problems.map((problem) => (
            <li key={problem} className="border-b border-rule py-4">
              <p className="max-w-2xl text-ink">{problem}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section label={copy.name}>
        <SectionTitle>{t("sector.featuresTitle")}</SectionTitle>
        <ul className="mt-10 border-t border-rule">
          {copy.features.map((feature) => (
            <li key={feature.title} className="border-b border-rule py-5">
              <div className="grid gap-x-8 gap-y-1 md:grid-cols-[14rem_minmax(0,1fr)]">
                <h3 className="text-h3 font-semibold text-ink">{feature.title}</h3>
                <p className="max-w-2xl leading-relaxed text-ink-70">{feature.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {moduleItems.length ? (
        <Section
          label={t("nav.solutions")}
          aside={
            <Link
              href="/hazir-heller"
              className="text-sm text-red-ink underline decoration-rule-strong underline-offset-4 hover:decoration-red"
            >
              {t("nav.allModules")}
            </Link>
          }
        >
          <SectionTitle>{t("common.relatedModules")}</SectionTitle>
          <div className="mt-10">
            <Register items={moduleItems} />
          </div>
        </Section>
      ) : null}

      <Section label={t("nav.faq")}>
        <SectionTitle>{t("common.frequentQuestions")}</SectionTitle>
        <div className="mt-10">
          <FaqList items={copy.faq} />
        </div>
      </Section>

      <Section tone="card">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-h2 font-semibold text-ink">
              {t("sector.ctaTitle", { sector: copy.name.toLocaleLowerCase("az") })}
            </h2>
            <p className="mt-4 text-lead text-ink-70">{t("common.moduleCtaText")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink href="/demo">{t("common.requestDemo")}</CtaLink>
              <CtaLink href="/elaqe" variant="secondary">
                {t("common.talkToUs")}
              </CtaLink>
            </div>
          </div>
          <Stamp label={t("common.localTeam")} />
        </div>
      </Section>
    </>
  );
}
