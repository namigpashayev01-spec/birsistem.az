import type { Locale } from "@/i18n/routing";

/**
 * Content is authored in Azerbaijani first. Russian and English entries are
 * optional and fall back to Azerbaijani, which keeps the site whole while the
 * translations are still being written (those locales are `noindex` meanwhile).
 */
export type Localized<T> = { az: T } & Partial<Record<Locale, T>>;

export function pick<T>(value: Localized<T>, locale: Locale): T {
  return value[locale] ?? value.az;
}

export type Feature = { title: string; text: string };
export type Faq = { q: string; a: string };

/**
 * Currency is written as "AZN", never as the ₼ sign: IBM Plex has no glyph for
 * U+20BC, so the sign would fall back to a mismatched system font.
 */
export const CURRENCY = "AZN";
