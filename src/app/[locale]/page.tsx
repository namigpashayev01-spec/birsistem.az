import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { HOME } from "@/content/home";
import { MODULES, MODULE_BY_SLUG } from "@/content/modules";
import { SECTORS } from "@/content/sectors";
import { pick } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaLink } from "@/components/ui/Cta";
import { Hero } from "@/components/marketing/Hero";
import { Section, SectionTitle } from "@/components/marketing/Section";
import { Register } from "@/components/marketing/Register";
import { FaqList } from "@/components/marketing/FaqList";
import { Steps } from "@/components/marketing/Steps";
import { Stamp } from "@/components/marketing/Stamp";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const copy = pick(HOME, locale);
  return buildMetadata({
    locale,
    href: "/",
    title: copy.seoTitle,
    description: copy.seoDescription,
    absoluteTitle: true,
  });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const copy = pick(HOME, locale);
  const t = await getTranslations();

  const moduleItems = MODULES.map((m) => {
    const c = pick(m.copy, locale);
    return {
      href: m.href,
      name: c.name,
      row: c.row,
      meta: [
        { label: t("common.whoUsesIt"), value: c.audience },
        { label: t("common.whichDocuments"), value: c.documents },
      ],
    };
  });

  const sectorItems = SECTORS.map((s) => {
    const c = pick(s.copy, locale);
    return {
      href: { pathname: "/sektorlar/[sektor]" as const, params: { sektor: s.slug } },
      name: c.name,
      row: c.row,
    };
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: copy.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />

      <Hero copy={copy.hero} />

      <Section label={copy.problems.label}>
        <SectionTitle sub={copy.problems.sub}>{copy.problems.title}</SectionTitle>
        <ul className="mt-10 border-t border-rule">
          {copy.problems.items.map((item) => {
            const target = MODULE_BY_SLUG.get(item.module);
            if (!target) return null;
            const name = pick(target.copy, locale).name;
            return (
              <li key={item.text} className="border-b border-rule py-5">
                <div className="grid gap-2 md:grid-cols-[minmax(0,1fr)_10rem] md:items-baseline md:gap-8">
                  <p className="max-w-2xl text-ink">{item.text}</p>
                  <Link
                    href={target.href}
                    className="text-sm text-red-ink underline decoration-rule-strong underline-offset-4 hover:decoration-red md:text-right"
                  >
                    {t("common.solution")}: {name}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section
        label={copy.modules.label}
        aside={
          <Link
            href="/hazir-heller"
            className="text-sm text-red-ink underline decoration-rule-strong underline-offset-4 hover:decoration-red"
          >
            {t("nav.allModules")}
          </Link>
        }
      >
        <SectionTitle sub={copy.modules.sub}>{copy.modules.title}</SectionTitle>
        <div className="mt-10">
          <Register items={moduleItems} />
        </div>
      </Section>

      <Section label={copy.proof.label} tone="oxblood">
        <SectionTitle tone="oxblood" sub={copy.proof.sub}>
          {copy.proof.title}
        </SectionTitle>
        <ul className="mt-10 border-t border-on-oxblood/20">
          {copy.proof.checks.map((check) => (
            <li key={check.title} className="border-b border-on-oxblood/20 py-5">
              <h3 className="font-medium text-on-oxblood">{check.title}</h3>
              <p className="mt-1 max-w-2xl text-on-oxblood/80">{check.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-on-oxblood/65">{copy.proof.note}</p>
      </Section>

      <Section
        label={copy.sectors.label}
        aside={
          <Link
            href="/sektorlar"
            className="text-sm text-red-ink underline decoration-rule-strong underline-offset-4 hover:decoration-red"
          >
            {t("nav.allSectors")}
          </Link>
        }
      >
        <SectionTitle sub={copy.sectors.sub}>{copy.sectors.title}</SectionTitle>
        <div className="mt-10">
          <Register items={sectorItems} />
        </div>
      </Section>

      <Section label={copy.steps.label}>
        <SectionTitle sub={copy.steps.sub}>{copy.steps.title}</SectionTitle>
        <div className="mt-10">
          <Steps items={copy.steps.items} />
        </div>
      </Section>

      <Section label={copy.faq.label} id="faq">
        <SectionTitle>{copy.faq.title}</SectionTitle>
        <div className="mt-10">
          <FaqList items={copy.faq.items} />
        </div>
      </Section>

      <Section label="" tone="card">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-h2 font-semibold text-ink">{copy.close.title}</h2>
            <p className="mt-4 text-lead text-ink-70">{copy.close.text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink href="/demo">{copy.close.primaryCta}</CtaLink>
              <CtaLink href="/qiymetler" variant="secondary">
                {copy.close.secondaryCta}
              </CtaLink>
            </div>
          </div>
          <Stamp label={copy.close.stamp} />
        </div>
      </Section>
    </>
  );
}
