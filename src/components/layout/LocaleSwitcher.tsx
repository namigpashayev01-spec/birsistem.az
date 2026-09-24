"use client";

import NextLink from "next/link";
import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
import { getPathname, usePathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { canonicalParam } from "@/i18n/slugs";
import { PUBLISHED_LOCALES } from "@/lib/site";

/** Short code on the chip; the full name, in its own language, for screen readers. */
const LANGUAGE: Record<Locale, { code: string; name: string }> = {
  az: { code: "AZ", name: "Azərbaycanca" },
  ru: { code: "RU", name: "Русский" },
};

/**
 * `usePathname` gives the route template on some pages (`/sektorlar/[sektor]`)
 * and the filled internal path on others (`/sektorlar/tikinti`). Either way,
 * find the routing key that produces it once the current params are filled in.
 */
function routeTemplate(pathname: string, params: Record<string, string>) {
  if (pathname in routing.pathnames) return pathname;
  return (
    Object.keys(routing.pathnames).find(
      (key) => key.replace(/\[(\w+)\]/g, (_, name: string) => params[name] ?? "") === pathname,
    ) ?? pathname
  );
}

/**
 * Only finished locales appear here. While a translation is still being written
 * its locale stays out of the switcher, out of the sitemap and out of hreflang.
 *
 * The link is rebuilt from the route template plus the current params, so a
 * dynamic page switches to its localised twin (`/ru/otrasli/tikinti`). The href
 * is resolved here rather than by next-intl's `Link`, which would prefix the
 * default locale (`/az/...`) and cost every switch a redirect.
 */
export function LocaleSwitcher({ label }: { label: string }) {
  const active = useLocale() as Locale;
  // Everything but the locale segment itself, which `getPathname` sets.
  const params = Object.fromEntries(
    Object.entries(useParams<Record<string, string>>()).filter(([key]) => key !== "locale"),
  );
  const pathname = routeTemplate(usePathname(), params);
  // The URL carries this language's slugs; `getPathname` expects canonical ones
  // and translates them for the target language itself.
  const canonical = Object.fromEntries(
    Object.entries(params).map(([key, value]) => [
      key,
      canonicalParam(key, value, active) ?? value,
    ]),
  );

  if (PUBLISHED_LOCALES.length < 2) return null;

  // A segmented control in the same family as the calculators' mode toggle.
  // The current language sits on a white chip rather than an ink fill, so the
  // red demo button beside it stays the one loud thing in the bar; and it is
  // plain text, since a link to the page you are already on goes nowhere.
  return (
    <nav aria-label={label} className="flex h-11 items-center gap-0.5 rounded-pill bg-cloud p-1">
      {routing.locales
        .filter((locale) => PUBLISHED_LOCALES.includes(locale))
        .map((locale) => {
          const { code, name } = LANGUAGE[locale];
          const chip =
            "inline-flex h-9 min-w-10 items-center justify-center rounded-pill px-2.5 text-[0.8125rem] font-bold tracking-[0.02em]";

          if (locale === active) {
            return (
              <span
                key={locale}
                lang={locale}
                aria-current="true"
                className={`${chip} bg-paper text-ink shadow-card`}
              >
                <span aria-hidden="true">{code}</span>
                <span className="sr-only">{name}</span>
              </span>
            );
          }

          return (
            <NextLink
              key={locale}
              href={getPathname({
                locale,
                href: { pathname, params: canonical } as Parameters<typeof getPathname>[0]["href"],
              })}
              hrefLang={locale}
              lang={locale}
              title={name}
              className={`${chip} text-ink-50 transition-colors hover:bg-paper/70 hover:text-ink focus-visible:outline-offset-0`}
            >
              <span aria-hidden="true">{code}</span>
              <span className="sr-only">{name}</span>
            </NextLink>
          );
        })}
    </nav>
  );
}
