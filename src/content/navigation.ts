import type { StaticPathname } from "@/i18n/routing";
import { MODULES } from "./modules";
import { SECTORS } from "./sectors";
import { TOOLS } from "./tools";

export type NavPanel = "solutions" | "sectors" | "tools";

export type NavItem =
  | { kind: "link"; messageKey: string; href: StaticPathname }
  | { kind: "panel"; messageKey: string; href: StaticPathname; panel: NavPanel };

/** Header navigation. Panels double as internal-link hubs for crawlers. */
export const PRIMARY_NAV: NavItem[] = [
  { kind: "panel", messageKey: "solutions", href: "/hazir-heller", panel: "solutions" },
  { kind: "panel", messageKey: "sectors", href: "/sektorlar", panel: "sectors" },
  { kind: "panel", messageKey: "tools", href: "/aletler", panel: "tools" },
  { kind: "link", messageKey: "pricing", href: "/qiymetler" },
  { kind: "link", messageKey: "comparison", href: "/muqayise" },
  { kind: "link", messageKey: "blog", href: "/bloq" },
];

export const FOOTER_COMPANY: { messageKey: string; href: StaticPathname }[] = [
  { messageKey: "about", href: "/haqqimizda" },
  { messageKey: "blog", href: "/bloq" },
  { messageKey: "faq", href: "/faq" },
  { messageKey: "pricing", href: "/qiymetler" },
  { messageKey: "contact", href: "/elaqe" },
];

export const FOOTER_LEGAL: { messageKey: string; href: StaticPathname }[] = [
  { messageKey: "privacy", href: "/mexfilik-siyaseti" },
  { messageKey: "terms", href: "/istifade-sertleri" },
];

export const MODULE_LINKS = MODULES.map((m) => ({ slug: m.slug, href: m.href }));
export const SECTOR_SLUGS = SECTORS.map((s) => s.slug);
export const TOOL_SLUGS = TOOLS.map((t) => t.slug);
