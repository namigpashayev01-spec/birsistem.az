import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import type { Locale } from "@/i18n/routing";
import { CONTACT_PAGE } from "@/content/pages";
import { MODULES } from "@/content/modules";
import { SECTORS } from "@/content/sectors";
import { pick } from "@/lib/content";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { CONTACT, SITE_LEGAL_NAME, SITE_URL } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaLink } from "@/components/ui/Cta";
import { PageHero } from "@/components/marketing/PageHero";
import { Section, SectionTitle } from "@/components/marketing/Section";
import { LeadForm } from "@/components/forms/LeadForm";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const copy = pick(CONTACT_PAGE, locale);
  return buildMetadata({
    locale,
    href: "/elaqe",
    title: copy.seoTitle,
    description: copy.seoDescription,
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const copy = pick(CONTACT_PAGE, locale);
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
      "@type": "ContactPage",
      "@id": `${absoluteUrl(locale, "/elaqe")}#page`,
      name: copy.title,
      url: absoluteUrl(locale, "/elaqe"),
      about: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      legalName: SITE_LEGAL_NAME,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: CONTACT.phone,
          email: CONTACT.email,
          contactType: "sales",
          availableLanguage: ["az", "ru"],
          areaServed: "AZ",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t("common.home"), item: absoluteUrl(locale, "/") },
        {
          "@type": "ListItem",
          position: 2,
          name: copy.title,
          item: absoluteUrl(locale, "/elaqe"),
        },
      ],
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
        meta={[
          { label: t("form.phoneLabel"), value: CONTACT.phone },
          { label: t("form.emailLabel"), value: CONTACT.email },
          { label: t("footer.address"), value: CONTACT.address[locale] },
          { label: t("footer.hours"), value: CONTACT.hours[locale] },
        ]}
      />

      <Section tone="cloud" label={copy.title}>
        <SectionTitle>{t("common.talkToUs")}</SectionTitle>
        <div className="mt-10 rounded-md bg-card p-7 shadow-card md:p-10">
          <LeadForm
            type="CONTACT"
            submitLabel={t("form.submitContact")}
            sectors={sectors}
            modules={modules}
            phone={CONTACT.phone}
          />
        </div>
      </Section>
    </>
  );
}
