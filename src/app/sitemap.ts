import type { MetadataRoute } from "next";

import { routing } from "@/i18n/routing";
import { absoluteUrl } from "@/lib/seo";
import { allRoutes } from "@/lib/routes";
import { PUBLISHED_LOCALES, isPublished } from "@/lib/site";

export const dynamic = "force-static";

/**
 * Only finished locales are listed. An unpublished locale is served `noindex`,
 * so listing it here would ask crawlers to fetch pages we tell them to ignore.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const route of allRoutes()) {
    for (const locale of routing.locales) {
      if (!isPublished(locale)) continue;

      const languages: Record<string, string> = {};
      if (PUBLISHED_LOCALES.length > 1) {
        for (const other of PUBLISHED_LOCALES) {
          languages[other] = absoluteUrl(other, route.href);
        }
      }

      entries.push({
        url: absoluteUrl(locale, route.href),
        lastModified: route.lastModified ? new Date(route.lastModified) : now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        ...(Object.keys(languages).length ? { alternates: { languages } } : {}),
      });
    }
  }

  return entries;
}
