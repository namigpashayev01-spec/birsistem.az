import { existsSync } from "node:fs";
import { join } from "node:path";

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Check, X } from "lucide-react";

import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { canonicalParam, localizeParam } from "@/i18n/slugs";
import { SECTORS, SECTOR_BY_SLUG, type SectorSlug } from "@/content/sectors";
import { MODULE_BY_SLUG } from "@/content/modules";
import { pick } from "@/lib/content";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaLink } from "@/components/ui/Cta";
import { SectorHero } from "@/components/marketing/SectorHero";
import { Section, SectionTitle } from "@/components/marketing/Section";
import { MODULE_ICON, SECTOR_ICON, Tile } from "@/components/marketing/Cards";
import { FaqList } from "@/components/marketing/FaqList";
import { Stamp } from "@/components/marketing/Stamp";

/**
 * The 3D sector illustrations live in `public/sektorlar/` as `<slug>.jpg` or
 * `<slug>.png`. Looking for the file here rather than listing the ones that
 * exist means a sector without artwork renders its text hero instead of a
 * broken image box, and adding one later needs no code change — only a build.
 */
function sectorImage(slug: string) {
  for (const extension of ["png", "webp", "jpg"]) {
    const path = `sektorlar/${slug}.${extension}`;
    if (!existsSync(join(process.cwd(), "public", path))) continue;
    // A cut-out sits straight on the slab; anything that brought its own
    // background needs a panel to stand on, or that background shows as a
    // rectangle inside the red.
    return { src: `/${path}`, cutout: extension !== "jpg" };
  }
  return undefined;
}

type Props = { params: Promise<{ locale: Locale; sektor: string }> };

export function generateStaticParams({ params }: { params: { locale: string } }) {
  return SECTORS.map((sector) => ({ sektor: localizeParam("sektor", sector.slug, params.locale as Locale) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, sektor: raw } = await params;
  const sektor = canonicalParam("sektor", raw, locale) ?? "";
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
  const { locale, sektor: raw } = await params;
  const sektor = canonicalParam("sektor", raw, locale) ?? "";
  setRequestLocale(locale);

  const entry = SECTOR_BY_SLUG.get(sektor as SectorSlug);
  if (!entry) notFound();

  const copy = pick(entry.copy, locale);
  const t = await getTranslations();
  const href = { pathname: "/sektorlar/[sektor]" as const, params: { sektor } };
  const url = absoluteUrl(locale, href);

  const relatedModules = entry.modules
    .map((slug) => MODULE_BY_SLUG.get(slug))
    .filter((module) => module !== undefined);

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

      <SectorHero
        crumbs={[{ label: t("nav.sectors"), href: "/sektorlar" }, { label: copy.name }]}
        icon={SECTOR_ICON[entry.slug]}
        title={copy.title}
        lead={copy.lead}
        signature={copy.signature}
        image={sectorImage(entry.slug)}
        actions={
          <>
            {/* Red on red disappears, so the primary action inverts here. */}
            <CtaLink href="/demo" variant="inverse">
              {t("common.requestDemo")}
            </CtaLink>
            <CtaLink href="/qiymetler" variant="ghost">
              {t("common.requestOffer")}
            </CtaLink>
          </>
        }
      />

      {/* The argument, before any feature list. The two halves are written as
          a pair — problems[i] is answered by why.changes[i] — so they are set
          as one table of paired rows. As two separate card stacks the reader
          had to match row three on the left with row three on the right by
          counting, which is work the layout should have done for them. */}
      <Section tone="paper" label={t("sector.whyLabel")}>
        <SectionTitle sub={copy.why.lead}>{copy.why.title}</SectionTitle>

        <div className="mt-14">
          {/* Column heads, once. Below md the columns stack, so each cell
              carries its own label instead. */}
          <div className="hidden border-b-2 border-ink/85 pb-4 md:grid md:grid-cols-2 md:gap-x-12">
            <h3 className="text-h3 font-bold text-ink-50">{t("sector.todayLabel")}</h3>
            <h3 className="text-h3 font-bold text-ink">{t("sector.withSystemLabel")}</h3>
          </div>

          <ul>
            {copy.problems.map((problem, index) => (
              <li
                key={problem}
                className="grid gap-x-12 gap-y-5 border-b border-rule py-7 md:grid-cols-2 md:py-8"
              >
                <div className="min-w-0">
                  <p className="mb-2 text-2xs font-bold uppercase tracking-wider text-ink-50 md:hidden">
                    {t("sector.todayLabel")}
                  </p>
                  <p className="flex min-w-0 gap-3 leading-relaxed text-ink-50">
                    <X
                      aria-hidden="true"
                      size={17}
                      strokeWidth={2.75}
                      className="mt-1 shrink-0"
                    />
                    {problem}
                  </p>
                </div>

                <div className="min-w-0 md:border-l md:border-rule md:pl-12">
                  <p className="mb-2 text-2xs font-bold uppercase tracking-wider text-brand-ink md:hidden">
                    {t("sector.withSystemLabel")}
                  </p>
                  <p className="flex min-w-0 gap-3 font-medium leading-relaxed text-ink">
                    <Check
                      aria-hidden="true"
                      size={17}
                      strokeWidth={3}
                      className="mt-1 shrink-0 text-brand-ink"
                    />
                    {copy.why.changes[index] ?? ""}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* What the setup covers. Twelve identical cards read as a template and
          say nothing the text inside them does not; set as a specification —
          term on the left, what it does on the right, hairline between — the
          same copy reads as documentation a buyer can work through. */}
      <Section tone="cloud" label={copy.name}>
        <SectionTitle>{t("sector.functionsTitle")}</SectionTitle>
        <div className="mt-14 space-y-16 md:space-y-20">
          {copy.featureGroups.map((group) => (
            <div key={group.group}>
              <div className="border-t-2 border-ink/85 pt-6">
                <h3 className="text-h2 font-extrabold text-ink">{group.group}</h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-ink-70">{group.note}</p>
              </div>

              <dl className="mt-8">
                {group.items.map((feature) => (
                  <div
                    key={feature.title}
                    className="grid gap-x-10 gap-y-2 border-t border-rule py-6 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)]"
                  >
                    <dt className="min-w-0 font-bold text-ink">{feature.title}</dt>
                    <dd className="min-w-0 leading-relaxed text-ink-70">{feature.text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </Section>

      {/* What the business gets, as opposed to what the software does. This is
          the page's red slab: the comparison above gave its red card back, and
          a run of four pale sections needs an anchor. It is also the right
          place for it — this is the part a decision-maker leaves with. */}
      {copy.benefits ? (
        <Section tone="deep" label={t("sector.benefitsLabel")}>
          <SectionTitle tone="deep" sub={copy.benefits.lead}>
            {copy.benefits.title}
          </SectionTitle>
          <ol className="mt-14 grid gap-x-14 gap-y-12 md:grid-cols-2">
            {copy.benefits.items.map((item, index) => (
              <li key={item.title} className="min-w-0 border-t border-on-deep/25 pt-6">
                <span
                  aria-hidden="true"
                  className="font-mono text-2xs font-medium text-on-deep-accent"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-h3 font-bold text-on-deep">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-on-deep/85">{item.text}</p>
              </li>
            ))}
          </ol>
        </Section>
      ) : null}

      {relatedModules.length ? (
        <Section tone="paper"
          label={t("nav.solutions")}
          aside={
            <Link
              href="/hazir-heller"
              className="text-sm text-brand-ink underline decoration-rule-strong underline-offset-4 hover:decoration-brand-ink"
            >
              {t("nav.allModules")}
            </Link>
          }
        >
          <SectionTitle>{t("common.relatedModules")}</SectionTitle>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {relatedModules.map((module) => {
              const c = pick(module.copy, locale);
              return (
                <Tile
                  key={module.slug}
                  href={module.href}
                  icon={MODULE_ICON[module.slug]}
                  name={c.name}
                />
              );
            })}
          </div>
        </Section>
      ) : null}

      <Section tone="cloud" label={t("nav.faq")}>
        <SectionTitle>{t("common.frequentQuestions")}</SectionTitle>
        <div className="mt-10">
          <FaqList items={copy.faq} />
        </div>
      </Section>

      <Section tone="paper" size="tight">
        <div className="flex flex-col gap-8 rounded-lg bg-cloud p-8 md:flex-row md:items-end md:justify-between md:p-10">
          <div className="max-w-xl">
            <h2 className="text-h2 font-extrabold text-ink">
              {t("sector.ctaTitle", { sector: copy.name.toLocaleLowerCase(locale) })}
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
