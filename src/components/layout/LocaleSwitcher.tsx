"use client";

import NextLink from "next/link";
import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
import { getPathname, usePathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { canonicalParam } from "@/i18n/slugs";
import { PUBLISHED_LOCALES } from "@/lib/site";

const LABEL: Record<string, string> = { az: "AZ", ru: "RU" };

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

  return (
    <nav aria-label={label} className="flex items-center gap-0.5 font-mono text-2xs">
      {routing.locales
        .filter((locale) => PUBLISHED_LOCALES.includes(locale))
        .map((locale) => (
          <NextLink
            key={locale}
            href={getPathname({
              locale,
              href: { pathname, params: canonical } as Parameters<typeof getPathname>[0]["href"],
            })}
            hrefLang={locale}
            lang={locale}
            aria-current={locale === active ? "true" : undefined}
            className={`min-h-9 px-1.5 py-2 tracking-wider ${
              locale === active ? "text-brand-ink" : "text-ink-50 hover:text-ink"
            }`}
          >
            {LABEL[locale] ?? locale.toUpperCase()}
          </NextLink>
        ))}
    </nav>
  );
}
