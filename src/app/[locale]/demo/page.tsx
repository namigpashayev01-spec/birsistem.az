import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import type { Locale } from "@/i18n/routing";
import { DEMO_PAGE } from "@/content/pages";
import { HOME } from "@/content/home";
import { MODULES } from "@/content/modules";
import { SECTORS } from "@/content/sectors";
import { pick } from "@/lib/content";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { CONTACT } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/marketing/PageHero";
import { Section, SectionTitle } from "@/components/marketing/Section";
import { Steps } from "@/components/marketing/Steps";
import { LeadForm } from "@/components/forms/LeadForm";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const copy = pick(DEMO_PAGE, locale);
  return buildMetadata({
    locale,
    href: "/demo",
    title: copy.seoTitle,
    description: copy.seoDescription,
  });
}

export default async function DemoPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const copy = pick(DEMO_PAGE, locale);
  const home = pick(HOME, locale);
  const t = await getTranslations();

  const sectors = SECTORS.map((sector) => ({
    value: sector.slug,
    label: pick(sector.copy, locale).name,
  }));
  const modules = MODULES.map((module) => ({
    value: module.slug,
    label: pick(module.copy, locale).name,
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t("common.home"), item: absoluteUrl(locale, "/") },
      { "@type": "ListItem", position: 2, name: copy.title, item: absoluteUrl(locale, "/demo") },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />

      <PageHero crumbs={[{ label: copy.title }]} title={copy.title} lead={copy.lead} />

      <Section tone="card" label={copy.title}>
        <LeadForm
          type="DEMO"
          submitLabel={t("form.submitDemo")}
          sectors={sectors}
          modules={modules}
          withModules
          withEmployees
          phone={CONTACT.phone}
        />
      </Section>

      <Section tone="paper" label={home.steps.label}>
        <SectionTitle sub={home.steps.sub}>{home.steps.title}</SectionTitle>
        <div className="mt-10">
          <Steps items={home.steps.items} />
        </div>
      </Section>

      <Section label={t("nav.contact")} tone="card">
        <SectionTitle>{t("common.talkToUs")}</SectionTitle>
        <dl className="mt-8 grid max-w-2xl gap-x-10 gap-y-4 sm:grid-cols-2">
          <div>
            <dt className="text-sm text-ink-50">{t("form.phoneLabel")}</dt>
            <dd className="mt-0.5">
              <a href={`tel:${CONTACT.phoneHref}`} className="font-mono text-ink hover:text-red-ink">
                {CONTACT.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-ink-50">{t("form.emailLabel")}</dt>
            <dd className="mt-0.5">
              <a href={`mailto:${CONTACT.salesEmail}`} className="text-ink hover:text-red-ink">
                {CONTACT.salesEmail}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-ink-50">{t("footer.hours")}</dt>
            <dd className="mt-0.5 text-ink">{CONTACT.hoursAz}</dd>
          </div>
          <div>
            <dt className="text-sm text-ink-50">{t("footer.address")}</dt>
            <dd className="mt-0.5 text-ink">{CONTACT.addressAz}</dd>
          </div>
        </dl>
      </Section>
    </>
  );
}
