import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import type { Locale } from "@/i18n/routing";
import { TERMS_PAGE } from "@/content/legal";
import { pick } from "@/lib/content";
import { formatDate } from "@/lib/format";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/marketing/PageHero";
import { Section } from "@/components/marketing/Section";
import { Prose } from "@/components/marketing/Prose";

const HREF = "/istifade-sertleri" as const;

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const copy = pick(TERMS_PAGE, locale);
  return buildMetadata({
    locale,
    href: HREF,
    title: copy.seoTitle,
    description: copy.seoDescription,
  });
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const copy = pick(TERMS_PAGE, locale);
  const t = await getTranslations();

  return (
    <>
      <PageHero
        crumbs={[{ label: copy.title }]}
        title={copy.title}
        lead={copy.lead}
        meta={[
          { label: t("common.updated"), value: formatDate(copy.updated, locale) },
        ]}
      />

      {copy.sections?.length ? (
        <Section tone="paper" label={copy.title}>
          <Prose sections={copy.sections} />
        </Section>
      ) : null}
    </>
  );
}
