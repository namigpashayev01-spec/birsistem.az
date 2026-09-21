import { defineRouting } from "next-intl/routing";

/**
 * AZ is served from the root (`/crm`), RU and EN sit behind a prefix (`/ru/crm`).
 * Every route carries a localised slug so each language is indexed on its own keywords;
 * internal code always refers to the Azerbaijani pathname and `Link` rewrites it.
 */
export const routing = defineRouting({
  locales: ["az", "ru", "en"],
  defaultLocale: "az",
  localePrefix: "as-needed",
  localeDetection: false,
  pathnames: {
    "/": "/",

    "/hazir-heller": {
      az: "/hazir-heller",
      ru: "/gotovye-resheniya",
      en: "/solutions",
    },
    "/crm": "/crm",
    "/anbar": { az: "/anbar", ru: "/sklad", en: "/inventory" },
    "/muhasibat": { az: "/muhasibat", ru: "/bukhgalteriya", en: "/accounting" },
    "/maliyye": { az: "/maliyye", ru: "/finansy", en: "/finance" },
    "/hr": "/hr",
    "/hesabatlar": { az: "/hesabatlar", ru: "/otchety", en: "/reports" },

    "/sektorlar": { az: "/sektorlar", ru: "/otrasli", en: "/industries" },
    "/sektorlar/[sektor]": {
      az: "/sektorlar/[sektor]",
      ru: "/otrasli/[sektor]",
      en: "/industries/[sektor]",
    },

    "/aletler": { az: "/aletler", ru: "/instrumenty", en: "/tools" },
    "/aletler/[alet]": {
      az: "/aletler/[alet]",
      ru: "/instrumenty/[alet]",
      en: "/tools/[alet]",
    },

    "/muqayise": { az: "/muqayise", ru: "/sravnenie", en: "/comparison" },
    "/muqayise/[reqib]": {
      az: "/muqayise/[reqib]",
      ru: "/sravnenie/[reqib]",
      en: "/comparison/[reqib]",
    },

    "/qiymetler": { az: "/qiymetler", ru: "/tseny", en: "/pricing" },
    "/haqqimizda": { az: "/haqqimizda", ru: "/o-nas", en: "/about" },
    "/elaqe": { az: "/elaqe", ru: "/kontakty", en: "/contact" },
    "/faq": "/faq",
    "/demo": "/demo",

    "/bloq": { az: "/bloq", ru: "/blog", en: "/blog" },
    "/bloq/[slug]": { az: "/bloq/[slug]", ru: "/blog/[slug]", en: "/blog/[slug]" },

    "/mexfilik-siyaseti": {
      az: "/mexfilik-siyaseti",
      ru: "/politika-konfidentsialnosti",
      en: "/privacy-policy",
    },
    "/istifade-sertleri": {
      az: "/istifade-sertleri",
      ru: "/usloviya-ispolzovaniya",
      en: "/terms",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
export type AppPathname = keyof typeof routing.pathnames;
/** Routes with no dynamic segment, so they can be linked with a bare string. */
export type StaticPathname = Exclude<AppPathname, `${string}[${string}`>;
