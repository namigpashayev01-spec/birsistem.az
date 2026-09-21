import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { MODULE_BY_SLUG, type ModuleSlug } from "@/content/modules";
import { SECTOR_BY_SLUG } from "@/content/sectors";
import { pick } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaLink } from "@/components/ui/Cta";
import { PageHero } from "./PageHero";
import { Section, SectionTitle } from "./Section";
import { Register } from "./Register";
import { FaqList } from "./FaqList";
import { Stamp } from "./Stamp";

export async function ModulePage({
  slug,
  locale,
}: {
  slug: ModuleSlug;
  locale: Locale;
}) {
  const entry = MODULE_BY_SLUG.get(slug);
  if (!entry) throw new Error(`Unknown module: ${slug}`);

  const copy = pick(entry.copy, locale);
  const t = await getTranslations();

  const url = absoluteUrl(locale, entry.href);
  const solutionsUrl = absoluteUrl(locale, "/hazir-heller");

  const relatedSectors = entry.relatedSectors
    .map((sectorSlug) => SECTOR_BY_SLUG.get(sectorSlug as never))
    .filter((sector) => sector !== undefined)
    .map((sector) => {
      const sectorCopy = pick(sector.copy, locale);
      return {
        href: {
          pathname: "/sektorlar/[sektor]" as const,
          params: { sektor: sector.slug },
        },
        name: sectorCopy.name,
        row: sectorCopy.row,
      };
    });

  const schema = [
    {
      "@type": "SoftwareApplication",
      "@id": `${url}#software`,
      name: `${SITE_NAME} — ${copy.name}`,
      applicationCategory: "BusinessApplication",
      applicationSubCategory: copy.title,
      operatingSystem: "Web",
      description: copy.seoDescription,
      url,
      publisher: { "@id": `${SITE_URL}/#organization` },
      featureList: copy.features.map((feature) => feature.title),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t("common.home"), item: absoluteUrl(locale, "/") },
        { "@type": "ListItem", position: 2, name: t("nav.solutions"), item: solutionsUrl },
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
        crumbs={[
          { label: t("nav.solutions"), href: "/hazir-heller" },
          { label: copy.name },
        ]}
        title={copy.title}
        lead={copy.lead}
        meta={[
          { label: t("common.whoUsesIt"), value: copy.audience },
          { label: t("common.whichDocuments"), value: copy.documents },
        ]}
        actions={
          <>
            <CtaLink href="/demo">{t("common.requestDemo")}</CtaLink>
            <CtaLink href="/qiymetler" variant="secondary">
              {t("common.requestOffer")}
            </CtaLink>
          </>
        }
      />

      <Section label={copy.name}>
        <SectionTitle>{t("common.whatItDoes")}</SectionTitle>
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

      {relatedSectors.length ? (
        <Section
          label={t("nav.sectors")}
          aside={
            <Link
              href="/sektorlar"
              className="text-sm text-red-ink underline decoration-rule-strong underline-offset-4 hover:decoration-red"
            >
              {t("nav.allSectors")}
            </Link>
          }
        >
          <SectionTitle>{t("common.relatedSectors")}</SectionTitle>
          <div className="mt-10">
            <Register items={relatedSectors} />
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
              {t("common.moduleCtaTitle", { module: copy.name })}
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
