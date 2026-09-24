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
 */
export const PUBLISHED_LOCALES: readonly Locale[] = ["az", "ru"];

export function isPublished(locale: Locale) {
  return PUBLISHED_LOCALES.includes(locale);
}

/** Placeholder until the real company details arrive. */
export const CONTACT = {
  phone: "077 315 15 80",
  phoneHref: "+994773151580",
  whatsapp: "+994773151580",
  email: "salam@birsistem.az",
  salesEmail: "satis@birsistem.az",
  address: {
    az: "Bakı, Nəsimi rayonu, Nizami küç. 203",
    ru: "Баку, Насиминский район, ул. Низами 203",
  } satisfies Record<Locale, string>,
  city: { az: "Bakı", ru: "Баку" } satisfies Record<Locale, string>,
  postalCode: "AZ1010",
  hours: {
    az: "Bazar ertəsi – Cümə, 09:00–18:00",
    ru: "Понедельник – пятница, 09:00–18:00",
  } satisfies Record<Locale, string>,
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
};

export const HTML_LANG: Record<Locale, string> = {
  az: "az-AZ",
  ru: "ru-RU",
};
