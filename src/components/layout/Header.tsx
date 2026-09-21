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
    <div className="mx-auto max-w-[80rem] px-4 py-5 md:px-8">
      <ul className="border-y border-rule">
        {rows.map((row, index) => (
          <li key={index} className={index > 0 ? "border-t border-rule" : undefined}>
            <Link
              href={row.href}
              className="group flex flex-col gap-0.5 py-3 sm:flex-row sm:items-baseline sm:gap-6"
            >
              <span className="w-44 shrink-0 font-medium text-ink group-hover:text-red-ink">
                {row.name}
              </span>
              <span className="text-sm text-ink-70">{row.row}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href={moreHref}
        className="mt-4 inline-block text-sm text-red-ink underline decoration-rule-strong underline-offset-4 hover:decoration-red"
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
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/92 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[80rem] items-center gap-4 px-4 md:px-8">
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
                className="inline-flex min-h-11 items-center px-3 text-[0.9375rem] text-ink transition-colors hover:text-red-ink"
              >
                {t(`nav.${item.messageKey}`)}
              </Link>
            ),
          )}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${CONTACT.phoneHref}`}
            className="hidden font-mono text-sm text-ink-70 transition-colors hover:text-ink xl:inline"
          >
            {CONTACT.phone}
          </a>
          <LocaleSwitcher label={t("nav.language")} />
          <CtaLink href="/demo" className="hidden sm:inline-flex">
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
