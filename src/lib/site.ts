import type { Locale } from "@/i18n/routing";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://birsistem.az"
).replace(/\/$/, "");

export const SITE_NAME = "BirSistem";
export const SITE_LEGAL_NAME = "BirSistem MMC";

/**
 * Locales whose content is finished. Anything outside this list is served with
 * `noindex`, kept out of the sitemap and left out of the hreflang cluster, so a
 * half-translated page never competes with the Azerbaijani original.
 * Add "ru" / "en" here once their copy lands.
 */
export const PUBLISHED_LOCALES: readonly Locale[] = ["az"];

export function isPublished(locale: Locale) {
  return PUBLISHED_LOCALES.includes(locale);
}

/** Placeholder until the real company details arrive. */
export const CONTACT = {
  phone: "+994 12 310 00 00",
  phoneHref: "+994123100000",
  whatsapp: "+994503100000",
  email: "salam@birsistem.az",
  salesEmail: "satis@birsistem.az",
  addressAz: "Bakı, Nəsimi rayonu, Nizami küç. 203",
  addressRu: "Баку, Насиминский район, ул. Низами 203",
  addressEn: "203 Nizami str., Nasimi, Baku",
  postalCode: "AZ1010",
  hoursAz: "Bazar ertəsi – Cümə, 09:00–18:00",
} as const;

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/company/birsistem",
  facebook: "https://www.facebook.com/birsistem",
  instagram: "https://www.instagram.com/birsistem",
  youtube: "https://www.youtube.com/@birsistem",
} as const;

export const OG_LOCALE: Record<Locale, string> = {
  az: "az_AZ",
  ru: "ru_RU",
  en: "en_US",
};

export const HTML_LANG: Record<Locale, string> = {
  az: "az-AZ",
  ru: "ru-RU",
  en: "en-US",
};
