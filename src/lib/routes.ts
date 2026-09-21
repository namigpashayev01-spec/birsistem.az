import { POSTS } from "@/content/blog";
import { COMPARISONS } from "@/content/comparisons";
import { MODULES } from "@/content/modules";
import { SECTORS } from "@/content/sectors";
import { TOOLS } from "@/content/tools";
import type { Href } from "@/i18n/navigation";

export type RouteEntry = {
  href: Href;
  /** Relative weight inside the site, not a promise to search engines. */
  priority: number;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
  lastModified?: string;
};

/**
 * Every indexable route, in one list. The sitemap is built from this, so a new
 * page is picked up by adding it here rather than in two separate places.
 */
export function allRoutes(): RouteEntry[] {
  return [
    { href: "/", priority: 1, changeFrequency: "weekly" },
    { href: "/hazir-heller", priority: 0.9, changeFrequency: "monthly" },
    ...MODULES.map((module) => ({
      href: module.href,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    })),

    { href: "/sektorlar", priority: 0.8, changeFrequency: "monthly" },
    ...SECTORS.map((sector) => ({
      href: {
        pathname: "/sektorlar/[sektor]" as const,
        params: { sektor: sector.slug },
      },
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),

    { href: "/aletler", priority: 0.8, changeFrequency: "monthly" },
    ...TOOLS.map((tool) => ({
      href: { pathname: "/aletler/[alet]" as const, params: { alet: tool.slug } },
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),

    { href: "/muqayise", priority: 0.7, changeFrequency: "monthly" },
    ...COMPARISONS.map((entry) => ({
      href: { pathname: "/muqayise/[reqib]" as const, params: { reqib: entry.slug } },
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),

    { href: "/qiymetler", priority: 0.9, changeFrequency: "monthly" },
    { href: "/demo", priority: 0.9, changeFrequency: "monthly" },
    { href: "/haqqimizda", priority: 0.6, changeFrequency: "yearly" },
    { href: "/elaqe", priority: 0.7, changeFrequency: "yearly" },
    { href: "/faq", priority: 0.7, changeFrequency: "monthly" },

    { href: "/bloq", priority: 0.7, changeFrequency: "weekly" },
    ...POSTS.map((post) => ({
      href: { pathname: "/bloq/[slug]" as const, params: { slug: post.slug } },
      priority: 0.6,
      changeFrequency: "yearly" as const,
      lastModified: post.updated,
    })),

    { href: "/mexfilik-siyaseti", priority: 0.2, changeFrequency: "yearly" },
    { href: "/istifade-sertleri", priority: 0.2, changeFrequency: "yearly" },
  ];
}
