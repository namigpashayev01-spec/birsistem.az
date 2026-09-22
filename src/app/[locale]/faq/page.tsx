import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { HOME } from "@/content/home";
import { MODULES } from "@/content/modules";
import { PRICING } from "@/content/pricing";
import { pick, type Faq } from "@/lib/content";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { CONTACT } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaLink } from "@/components/ui/Cta";
import { PageHero } from "@/components/marketing/PageHero";
import { Section, SectionTitle } from "@/components/marketing/Section";
import { FaqList } from "@/components/marketing/FaqList";

type Props = { params: Promise<{ locale: Locale }> };

const SEO = {
  az: {
    title: "Tez-tez verilən suallar",
    description:
      "ERP-yə keçid, qurulma müddəti, məlumatın saxlanması, qiymət və dəstək haqqında ən çox verilən suallar — modul-modul cavablarla.",
    lead: "Ümumi suallar, qiymətlə bağlı suallar və hər modul üzrə ayrıca suallar bir səhifədə. Cavabını tapmadığınız sual varsa yazın.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    href: "/faq",
    title: SEO.az.title,
    description: SEO.az.description,
  });
}

export default async function FaqPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();
  const home = pick(HOME, locale);
  const pricing = pick(PRICING, locale);

  const groups: { label: string; title: string; items: Faq[]; href?: string }[] = [
    { label: t("common.home"), title: home.faq.title, items: home.faq.items },
    { label: t("nav.pricing"), title: t("nav.pricing"), items: pricing.faq },
    ...MODULES.map((module) => {
      const copy = pick(module.copy, locale);
      return { label: t("nav.solutions"), title: copy.name, items: copy.faq };
    }),
  ];

  const all = groups.flatMap((group) => group.items);

  const schema = [
    {
      "@type": "FAQPage",
      "@id": `${absoluteUrl(locale, "/faq")}#faq`,
      mainEntity: all.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t("common.home"), item: absoluteUrl(locale, "/") },
        {
          "@type": "ListItem",
          position: 2,
          name: SEO.az.title,
          item: absoluteUrl(locale, "/faq"),
        },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": schema }} />

      <PageHero
        crumbs={[{ label: SEO.az.title }]}
        title={SEO.az.title}
        lead={SEO.az.lead}
        actions={<CtaLink href="/elaqe">{t("common.talkToUs")}</CtaLink>}
      />

      {groups.map((group, index) => (
        <Section
          key={`${group.title}-${index}`}
          tone={index % 2 === 0 ? "card" : "paper"}
          label={group.label}
        >
          <SectionTitle>{group.title}</SectionTitle>
          <div className="mt-8">
            <FaqList items={group.items} />
          </div>
        </Section>
      ))}

      <Section tone="tint" size="tight">
        <div className="max-w-xl">
          <h2 className="text-h2 font-semibold text-ink">{t("faqPage.stillTitle")}</h2>
          <p className="mt-4 text-lead text-ink-70">
            {t("faqPage.stillText", { phone: CONTACT.phone })}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaLink href="/elaqe">{t("common.talkToUs")}</CtaLink>
            <Link
              href="/demo"
              className="inline-flex min-h-11 items-center text-red-ink underline decoration-rule-strong underline-offset-4 hover:decoration-red"
            >
              {t("common.requestDemo")}
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
