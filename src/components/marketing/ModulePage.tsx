import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { MODULE_BY_SLUG, type ModuleSlug } from "@/content/modules";
import { SECTOR_BY_SLUG, type SectorSlug } from "@/content/sectors";
import { pick } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaLink } from "@/components/ui/Cta";
import { PageHero } from "./PageHero";
import { Section, SectionTitle } from "./Section";
import { SECTOR_ICON, Tile } from "./Cards";
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
    .map((sectorSlug) => SECTOR_BY_SLUG.get(sectorSlug as SectorSlug))
    .filter((sector) => sector !== undefined);

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
        crumbs={[{ label: t("nav.solutions"), href: "/hazir-heller" }, { label: copy.name }]}
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

      <Section tone="paper" label={copy.name}>
        <SectionTitle>{t("common.whatItDoes")}</SectionTitle>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {copy.features.map((feature) => (
            <li
              key={feature.title}
              className="min-w-0 rounded-md bg-cloud p-7"
            >
              {/* One short rule rather than the module icon repeated six times. */}
              <span aria-hidden="true" className="block h-[3px] w-9 rounded-pill bg-brand" />
              <h3 className="mt-5 text-h3 font-bold text-ink">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-70">{feature.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {relatedSectors.length ? (
        <Section
          tone="cloud"
          label={t("nav.sectors")}
          aside={
            <Link
              href="/sektorlar"
              className="inline-flex min-h-11 items-center text-sm text-brand-ink underline decoration-rule-strong underline-offset-4 hover:decoration-brand-ink"
            >
              {t("nav.allSectors")}
            </Link>
          }
        >
          <SectionTitle>{t("common.relatedSectors")}</SectionTitle>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {relatedSectors.map((sector) => {
              const sectorCopy = pick(sector.copy, locale);
              return (
                <Tile
                  key={sector.slug}
                  href={{ pathname: "/sektorlar/[sektor]", params: { sektor: sector.slug } }}
                  icon={SECTOR_ICON[sector.slug]}
                  name={sectorCopy.name}
                  row={sectorCopy.row}
                />
              );
            })}
          </div>
        </Section>
      ) : null}

      <Section tone="paper" label={t("nav.faq")}>
        <SectionTitle>{t("common.frequentQuestions")}</SectionTitle>
        <div className="mt-10 max-w-3xl">
          <FaqList items={copy.faq} />
        </div>
      </Section>

      <Section tone="paper" size="tight">
        <div className="flex flex-col gap-8 rounded-lg bg-cloud p-8 md:flex-row md:items-end md:justify-between md:p-10">
          <div className="max-w-xl">
            <h2 className="text-h2 font-extrabold text-ink">
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
