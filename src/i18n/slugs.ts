import type { Locale } from "./routing";

/**
 * Localised values for dynamic route segments. Code everywhere refers to an
 * entry by its Azerbaijani slug (the canonical one, also used for images, form
 * values and lookups); only the URL changes per language, so a Russian page is
 * indexed on Russian words: `/ru/otrasli/stroitelstvo`, not `/ru/otrasli/tikinti`.
 *
 * A locale missing from an entry keeps the Azerbaijani slug — right for brand
 * names like `1c` or `odoo`, which read the same in every language.
 */
const SLUGS: Record<string, Record<string, Partial<Record<Locale, string>>>> = {
  sektor: {
    tikinti: { ru: "stroitelstvo" },
    restoran: { ru: "restorany" },
    topdansatis: { ru: "optovaya-torgovlya" },
    istehsal: { ru: "proizvodstvo" },
    perakende: { ru: "roznitsa" },
    logistika: { ru: "logistika" },
    aptek: { ru: "apteki" },
    xidmet: { ru: "uslugi" },
  },
  alet: {
    "edv-kalkulyatoru": { ru: "kalkulyator-nds" },
    "emek-haqqi-kalkulyatoru": { ru: "kalkulyator-zarplaty" },
    "dsmf-kalkulyatoru": { ru: "kalkulyator-gfsz" },
    "mezuniyyet-pulu-kalkulyatoru": { ru: "kalkulyator-otpusknykh" },
    "xestelik-vereqesi-kalkulyatoru": { ru: "kalkulyator-bolnichnogo" },
    "roi-kalkulyatoru": { ru: "kalkulyator-okupaemosti-erp" },
    "kredit-kalkulyatoru": { ru: "kreditnyy-kalkulyator" },
  },
  slug: {
    "anbar-sayim-ferqi": { ru: "raskhozhdeniya-pri-inventarizatsii" },
    "maya-deyeri-hesablamasi": { ru: "raschet-sebestoimosti" },
    "debitor-borcu-yaslanma": { ru: "starenie-debitorskoy-zadolzhennosti" },
    "excel-den-erp-e-kecid": { ru: "perekhod-s-excel-na-erp" },
  },
};

/** Canonical (Azerbaijani) slug → the slug used in `locale`'s URL. */
export function localizeParam(name: string, value: string, locale: Locale): string {
  return SLUGS[name]?.[value]?.[locale] ?? value;
}

/**
 * The slug found in a `locale` URL → the canonical slug, or `undefined` when
 * that URL does not exist in this language. Strict on purpose: the Azerbaijani
 * slug under `/ru/` is not accepted, so each page has exactly one address.
 */
export function canonicalParam(name: string, value: string, locale: Locale): string | undefined {
  const table = SLUGS[name] ?? {};
  for (const [canonical, localized] of Object.entries(table)) {
    if ((localized[locale] ?? canonical) === value) return canonical;
  }
  return name in SLUGS ? undefined : value;
}

/** Localise every known param of an href object for `locale`. */
export function localizeParams<T extends Record<string, string | number>>(
  params: T,
  locale: Locale,
): T {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => [
      key,
      typeof value === "string" ? localizeParam(key, value, locale) : value,
    ]),
  ) as T;
}
