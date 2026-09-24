import { Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link, type Href } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { MODULES } from "@/content/modules";
import { SECTORS } from "@/content/sectors";
import { TOOLS } from "@/content/tools";
import { PRIMARY_NAV } from "@/content/navigation";
import { pick } from "@/lib/content";
import { CONTACT } from "@/lib/site";
import { CtaLink } from "@/components/ui/Cta";
import { Logo } from "./Logo";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { MobileMenu } from "./MobileMenu";
import { NavDisclosure } from "./NavDisclosure";

const SITE_NAV_LABEL = "BirSistem";

type NavRow = { href: Href; name: string; row: string };

function PanelRegister({
  rows,
  moreHref,
  moreLabel,
}: {
  rows: NavRow[];
  moreHref: Href;
  moreLabel: string;
}) {
  return (
    <div className="mx-auto max-w-[76rem] px-6 py-7 md:px-10">
      <ul className="grid gap-1 md:grid-cols-2">
        {rows.map((row, index) => (
          <li key={index}>
            <Link
              href={row.href}
              className="group block rounded-sm px-4 py-3 transition-colors hover:bg-cloud"
            >
              <span className="block font-bold text-ink group-hover:text-brand-ink">
                {row.name}
              </span>
              <span className="mt-0.5 block text-sm leading-relaxed text-ink-70">{row.row}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href={moreHref}
        className="mt-4 inline-block px-4 text-sm font-bold text-brand-ink underline decoration-brand-ink/30 decoration-2 underline-offset-4 hover:decoration-brand-ink"
      >
        {moreLabel}
      </Link>
    </div>
  );
}

export async function Header({ locale }: { locale: Locale }) {
  const t = await getTranslations();

  const moduleRows = MODULES.map((m) => {
    const copy = pick(m.copy, locale);
    return { href: m.href, name: copy.name, row: copy.row };
  });
  const sectorRows = SECTORS.map((s) => {
    const copy = pick(s.copy, locale);
    return {
      href: { pathname: "/sektorlar/[sektor]" as const, params: { sektor: s.slug } },
      name: copy.name,
      row: copy.row,
    };
  });
  const toolRows = TOOLS.map((tool) => {
    const copy = pick(tool.copy, locale);
    return {
      href: { pathname: "/aletler/[alet]" as const, params: { alet: tool.slug } },
      name: copy.name,
      row: copy.row,
    };
  });

  const panels = {
    solutions: (
      <PanelRegister
        rows={moduleRows}
        moreHref="/hazir-heller"
        moreLabel={t("nav.allModules")}
      />
    ),
    sectors: (
      <PanelRegister rows={sectorRows} moreHref="/sektorlar" moreLabel={t("nav.allSectors")} />
    ),
    tools: <PanelRegister rows={toolRows} moreHref="/aletler" moreLabel={t("nav.allTools")} />,
  };

  return (
    // The bar floats: it sits inside the page gutter rather than spanning the
    // viewport, so it reads as one more rounded object on the page instead of
    // a browser chrome strip pinned to the top of it.
    <header className="sticky top-0 z-40 px-3 pb-2 pt-3 md:px-4 md:pt-4">
      <div className="relative mx-auto flex h-16 max-w-[82rem] items-center gap-3 rounded-pill border border-rule bg-paper/92 pl-5 pr-2 shadow-bar backdrop-blur-xl md:h-18 md:pl-8 md:pr-3">
        <Logo />

        <nav aria-label={SITE_NAV_LABEL} className="hidden lg:flex lg:items-center lg:gap-0.5">
          {PRIMARY_NAV.map((item) =>
            item.kind === "panel" ? (
              <NavDisclosure key={item.messageKey} label={t(`nav.${item.messageKey}`)}>
                {panels[item.panel]}
              </NavDisclosure>
            ) : (
              <Link
                key={item.messageKey}
                href={item.href}
                className="inline-flex min-h-11 items-center rounded-pill px-3.5 text-[0.9375rem] font-medium text-ink transition-colors hover:bg-cloud"
              >
                {t(`nav.${item.messageKey}`)}
              </Link>
            ),
          )}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${CONTACT.phoneHref}`}
            className="hidden min-h-11 items-center gap-2 rounded-pill border border-rule px-4 font-mono text-sm text-ink transition-colors hover:border-brand-ink/35 hover:bg-cloud xl:inline-flex"
          >
            <Phone size={15} strokeWidth={2} aria-hidden="true" className="shrink-0 text-brand-ink" />
            {CONTACT.phone}
          </a>
          {/* Below xl the number does not fit, and on a phone calling is the
              highest-intent action this page offers — it should not be buried
              two taps deep in the menu. */}
          <a
            href={`tel:${CONTACT.phoneHref}`}
            aria-label={CONTACT.phone}
            className="inline-flex h-11 w-11 items-center justify-center rounded-pill border border-rule text-brand-ink transition-colors hover:bg-cloud xl:hidden"
          >
            <Phone size={17} strokeWidth={2} aria-hidden="true" />
          </a>
          <LocaleSwitcher label={t("nav.language")} />
          {/* `max-sm:hidden`, not `hidden sm:inline-flex`: CtaLink's own
              `inline-flex` beats a plain `hidden`, which left this button on
              phones and pushed the menu toggle off the edge of the bar. */}
          <CtaLink href="/demo" className="!min-h-11 !px-5 max-sm:hidden">
            {t("nav.demo")}
          </CtaLink>
          <MobileMenu openLabel={t("nav.openMenu")} closeLabel={t("nav.closeMenu")}>
            <MobileNav
              moduleRows={moduleRows}
              sectorRows={sectorRows}
              toolRows={toolRows}
            />
          </MobileMenu>
        </div>
      </div>
    </header>
  );
}

async function MobileNav({
  moduleRows,
  sectorRows,
  toolRows,
}: {
  moduleRows: NavRow[];
  sectorRows: NavRow[];
  toolRows: NavRow[];
}) {
  const t = await getTranslations();

  const groups = [
    { label: t("nav.solutions"), href: "/hazir-heller" as const, rows: moduleRows },
    { label: t("nav.sectors"), href: "/sektorlar" as const, rows: sectorRows },
    { label: t("nav.tools"), href: "/aletler" as const, rows: toolRows },
  ];

  return (
    <div className="px-4 pb-24 pt-2">
      {groups.map((group) => (
        <section key={group.label} className="border-b border-rule py-4">
          <Link href={group.href} className="text-sm font-medium text-ink-50">
            {group.label}
          </Link>
          <ul className="mt-2">
            {group.rows.map((row, index) => (
              <li key={index}>
                <Link href={row.href} className="flex min-h-11 items-center text-ink">
                  {row.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <ul className="py-2">
        {[
          { label: t("nav.pricing"), href: "/qiymetler" as const },
          { label: t("nav.comparison"), href: "/muqayise" as const },
          { label: t("nav.blog"), href: "/bloq" as const },
          { label: t("nav.about"), href: "/haqqimizda" as const },
          { label: t("nav.contact"), href: "/elaqe" as const },
        ].map((item) => (
          <li key={item.label}>
            <Link href={item.href} className="flex min-h-11 items-center text-ink">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <CtaLink href="/demo" className="mt-2 w-full">
        {t("nav.demo")}
      </CtaLink>
      <a
        href={`tel:${CONTACT.phoneHref}`}
        className="mt-3 flex min-h-11 items-center font-mono text-sm text-ink-70"
      >
        {CONTACT.phone}
      </a>
    </div>
  );
}
