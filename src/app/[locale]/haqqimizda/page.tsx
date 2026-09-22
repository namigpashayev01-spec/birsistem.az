import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import type { Locale } from "@/i18n/routing";
import { ABOUT_PAGE } from "@/content/pages";
import { HOME } from "@/content/home";
import { pick } from "@/lib/content";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaLink } from "@/components/ui/Cta";
import { PageHero } from "@/components/marketing/PageHero";
import { Section, SectionTitle } from "@/components/marketing/Section";
import { Prose } from "@/components/marketing/Prose";
import { Steps } from "@/components/marketing/Steps";
import { Stamp } from "@/components/marketing/Stamp";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const copy = pick(ABOUT_PAGE, locale);
  return buildMetadata({
    locale,
    href: "/haqqimizda",
    title: copy.seoTitle,
    description: copy.seoDescription,
  });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const copy = pick(ABOUT_PAGE, locale);
  const home = pick(HOME, locale);
  const t = await getTranslations();

  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: copy.title,
    url: absoluteUrl(locale, "/haqqimizda"),
    description: copy.seoDescription,
  };

  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        crumbs={[{ label: copy.title }]}
        title={copy.title}
        lead={copy.lead}
        actions={<CtaLink href="/demo">{t("common.requestDemo")}</CtaLink>}
      />

      {copy.sections?.length ? (
        <Section tone="card" label={copy.title}>
          <Prose sections={copy.sections} />
        </Section>
      ) : null}

      <Section tone="paper" label={home.steps.label}>
        <SectionTitle sub={home.steps.sub}>{home.steps.title}</SectionTitle>
        <div className="mt-10">
          <Steps items={home.steps.items} />
        </div>
      </Section>

      <Section tone="card">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-h2 font-semibold text-ink">{home.close.title}</h2>
            <p className="mt-4 text-lead text-ink-70">{home.close.text}</p>
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
