"use client";

import { useLocale } from "next-intl";
import { Link, usePathname, type Href } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { PUBLISHED_LOCALES } from "@/lib/site";

const LABEL: Record<string, string> = { az: "AZ", ru: "RU", en: "EN" };

/**
 * Only finished locales appear here. While a translation is still being written
 * its locale stays out of the switcher, out of the sitemap and out of hreflang.
 */
export function LocaleSwitcher({ label }: { label: string }) {
  const active = useLocale();
  const pathname = usePathname();

  if (PUBLISHED_LOCALES.length < 2) return null;

  return (
    <nav aria-label={label} className="flex items-center gap-0.5 font-mono text-2xs">
      {routing.locales
        .filter((locale) => PUBLISHED_LOCALES.includes(locale))
        .map((locale) => (
          <Link
            key={locale}
            href={pathname as Href}
            locale={locale}
            hrefLang={locale}
            aria-current={locale === active ? "true" : undefined}
            className={`min-h-9 px-1.5 py-2 tracking-wider ${
              locale === active ? "text-red-ink" : "text-ink-50 hover:text-ink"
            }`}
          >
            {LABEL[locale] ?? locale.toUpperCase()}
          </Link>
        ))}
    </nav>
  );
}
