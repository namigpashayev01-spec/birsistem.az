import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import type { Locale } from "@/i18n/routing";
import { moduleEntry } from "@/content/modules";
import { pick } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { ModulePage } from "@/components/marketing/ModulePage";

const SLUG = "muhasibat" as const;
const HREF = "/muhasibat" as const;

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const copy = pick(moduleEntry(SLUG).copy, locale);
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
  return <ModulePage slug={SLUG} locale={locale} />;
}
