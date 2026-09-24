import { defineRouting } from "next-intl/routing";

/**
 * AZ is served from the root (`/crm`), RU sits behind a prefix (`/ru/crm`).
 * Every route carries a localised slug so each language is indexed on its own keywords;
 * internal code always refers to the Azerbaijani pathname and `Link` rewrites it.
 */
export const routing = defineRouting({
  locales: ["az", "ru"],
  defaultLocale: "az",
  localePrefix: "as-needed",
  localeDetection: false,
  pathnames: {
    "/": "/",

    "/hazir-heller": {
      az: "/hazir-heller",
      ru: "/gotovye-resheniya",
    },
    "/crm": "/crm",
    "/anbar": { az: "/anbar", ru: "/sklad" },
    "/muhasibat": { az: "/muhasibat", ru: "/bukhgalteriya" },
    "/maliyye": { az: "/maliyye", ru: "/finansy" },
    "/hr": "/hr",
    "/hesabatlar": { az: "/hesabatlar", ru: "/otchety" },

    "/sektorlar": { az: "/sektorlar", ru: "/otrasli" },
    "/sektorlar/[sektor]": {
      az: "/sektorlar/[sektor]",
      ru: "/otrasli/[sektor]",
    },

    "/aletler": { az: "/aletler", ru: "/instrumenty" },
    "/aletler/[alet]": {
      az: "/aletler/[alet]",
      ru: "/instrumenty/[alet]",
    },

    "/muqayise": { az: "/muqayise", ru: "/sravnenie" },
    "/muqayise/[reqib]": {
      az: "/muqayise/[reqib]",
      ru: "/sravnenie/[reqib]",
    },

    "/qiymetler": { az: "/qiymetler", ru: "/tseny" },
    "/haqqimizda": { az: "/haqqimizda", ru: "/o-nas" },
    "/elaqe": { az: "/elaqe", ru: "/kontakty" },
    "/faq": "/faq",
    "/demo": "/demo",

    "/bloq": { az: "/bloq", ru: "/blog" },
    "/bloq/[slug]": { az: "/bloq/[slug]", ru: "/blog/[slug]" },

    "/mexfilik-siyaseti": {
      az: "/mexfilik-siyaseti",
      ru: "/politika-konfidentsialnosti",
    },
    "/istifade-sertleri": {
      az: "/istifade-sertleri",
      ru: "/usloviya-ispolzovaniya",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
export type AppPathname = keyof typeof routing.pathnames;
/** Routes with no dynamic segment, so they can be linked with a bare string. */
export type StaticPathname = Exclude<AppPathname, `${string}[${string}`>;
