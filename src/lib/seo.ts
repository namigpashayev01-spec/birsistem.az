import type { Metadata } from "next";
import { getPathname, type Href } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { OG_LOCALE, PUBLISHED_LOCALES, SITE_NAME, SITE_URL, isPublished } from "./site";

/**
 * Absolute URL of a route in one locale. `Href` is the shape `Link` takes;
 * `getPathname` accepts the same values under a slightly narrower type, so the
 * cast here is a type-level detail rather than a behavioural one.
 */
export function absoluteUrl(locale: Locale, href: Href) {
  const pathname = getPathname({
    locale,
    href: href as Parameters<typeof getPathname>[0]["href"],
  });
  return `${SITE_URL}${pathname === "/" ? "" : pathname}` || SITE_URL;
}

/**
 * hreflang cluster for a route. Only finished locales take part, and they all
 * point at each other plus an x-default that falls back to Azerbaijani.
 */
function languageAlternates(href: Href) {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    if (!isPublished(locale)) continue;
    languages[locale] = absoluteUrl(locale, href);
  }
  if (PUBLISHED_LOCALES.length > 1) {
    languages["x-default"] = absoluteUrl(routing.defaultLocale, href);
  }
  return languages;
}

type BuildMetadataOptions = {
  locale: Locale;
  href: Href;
  title: string;
  description: string;
  /** Pass true on the home page so the "— BirSistem" suffix is not doubled. */
  absoluteTitle?: boolean;
  ogType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  noindex?: boolean;
};

/**
 * Single source of page metadata. Every route goes through here, so canonical,
 * hreflang, OpenGraph and robots can never be forgotten on a page.
 */
export function buildMetadata({
  locale,
  href,
  title,
  description,
  absoluteTitle = false,
  ogType = "website",
  publishedTime,
  modifiedTime,
  authors,
  noindex = false,
}: BuildMetadataOptions): Metadata {
  const canonical = absoluteUrl(locale, href);
  const indexable = isPublished(locale) && !noindex;

  // The opengraph-image file convention only attaches to its own segment, so
  // every page points at the locale's card explicitly.
  const ogImage = `${absoluteUrl(locale, "/")}/opengraph-image`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
      languages: languageAlternates(href),
    },
    openGraph: {
      type: ogType,
      url: canonical,
      siteName: SITE_NAME,
      title,
      description,
      locale: OG_LOCALE[locale],
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      ...(authors ? { authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: indexable
      ? { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 }
      : { index: false, follow: false },
  };
}
