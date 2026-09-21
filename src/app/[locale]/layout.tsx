import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";

import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { plexMono, plexSans } from "@/lib/fonts";
import {
  CONTACT,
  HTML_LANG,
  SITE_LEGAL_NAME,
  SITE_NAME,
  SITE_URL,
  SOCIAL,
  isPublished,
} from "@/lib/site";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Azərbaycan biznesi üçün ERP`,
    template: `%s — ${SITE_NAME}`,
  },
  applicationName: SITE_NAME,
  formatDetection: { telephone: false },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations("common");

  const organization = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: SITE_LEGAL_NAME,
    url: SITE_URL,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.addressAz,
      addressLocality: "Bakı",
      postalCode: CONTACT.postalCode,
      addressCountry: "AZ",
    },
    sameAs: Object.values(SOCIAL),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: HTML_LANG[locale],
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <html lang={locale} dir="ltr" className={`${plexSans.variable} ${plexMono.variable}`}>
      <body className="min-h-dvh font-sans antialiased">
        {!isPublished(locale) && <meta name="robots" content="noindex, nofollow" />}
        <JsonLd data={{ "@context": "https://schema.org", "@graph": [organization, website] }} />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-[2px] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          {t("skipToContent")}
        </a>

        <NextIntlClientProvider>
          <Header locale={locale} />
          <main id="main">{children}</main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
