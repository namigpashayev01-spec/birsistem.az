import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { MODULES } from "@/content/modules";
import { SECTORS } from "@/content/sectors";
import { TOOLS } from "@/content/tools";
import { FOOTER_COMPANY, FOOTER_LEGAL } from "@/content/navigation";
import { pick } from "@/lib/content";
import { CONTACT, SITE_LEGAL_NAME } from "@/lib/site";
import { Logo } from "./Logo";

// `min-w-0` stops a long link (e.g. "Xəstəlik vərəqəsi kalkulyatoru") from
// forcing the grid track wider than the page.
function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="min-w-0">
      <h2 className="text-sm font-bold text-on-deep">{title}</h2>
      <ul className="mt-4 space-y-2.5 text-sm text-on-deep/85">{children}</ul>
    </div>
  );
}

export async function Footer({ locale }: { locale: Locale }) {
  const t = await getTranslations();
  const year = new Date().getFullYear();

  return (
    // The deepest slab on the site, and the last one: it closes the stack of
    // rounded panels rather than running off the bottom of the window.
    <footer className="on-deep px-3 pb-3 md:px-4 md:pb-4">
      <div className="mx-auto max-w-[82rem] rounded-lg bg-deep text-on-deep">
        <div className="mx-auto max-w-[76rem] px-5 py-16 md:px-12 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)]">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-on-deep/85">
              {t("footer.tagline")}
            </p>
            <div className="mt-7 space-y-2 text-sm">
              <a
                href={`tel:${CONTACT.phoneHref}`}
                className="block font-mono text-on-deep hover:text-on-deep-accent"
              >
                {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="block text-on-deep/85 hover:text-on-deep-accent"
              >
                {CONTACT.email}
              </a>
              <p className="text-on-deep/85">{CONTACT.address[locale]}</p>
              <p className="text-on-deep/85">{CONTACT.hours[locale]}</p>
            </div>
          </div>

          <div className="grid min-w-0 gap-8 sm:grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,1fr))]">
            <Column title={t("footer.solutions")}>
              {MODULES.map((m) => (
                <li key={m.slug}>
                  <Link href={m.href} className="hover:text-on-deep-accent">
                    {pick(m.copy, locale).name}
                  </Link>
                </li>
              ))}
            </Column>

            <Column title={t("footer.sectors")}>
              {SECTORS.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={{ pathname: "/sektorlar/[sektor]", params: { sektor: s.slug } }}
                    className="hover:text-on-deep-accent"
                  >
                    {pick(s.copy, locale).name}
                  </Link>
                </li>
              ))}
            </Column>

            <Column title={t("footer.tools")}>
              {TOOLS.map((tool) => (
                <li key={tool.slug}>
                  <Link
                    href={{ pathname: "/aletler/[alet]", params: { alet: tool.slug } }}
                    className="hover:text-on-deep-accent"
                  >
                    {pick(tool.copy, locale).name}
                  </Link>
                </li>
              ))}
            </Column>

            <Column title={t("footer.company")}>
              {FOOTER_COMPANY.map((item) => (
                <li key={item.messageKey}>
                  <Link href={item.href} className="hover:text-on-deep-accent">
                    {t(`nav.${item.messageKey}`)}
                  </Link>
                </li>
              ))}
              {FOOTER_LEGAL.map((item) => (
                <li key={item.messageKey}>
                  <Link href={item.href} className="hover:text-on-deep-accent">
                    {t(`footer.${item.messageKey}`)}
                  </Link>
                </li>
              ))}
            </Column>
          </div>
        </div>

        <p className="mt-14 border-t border-on-deep/15 pt-7 text-sm text-on-deep/85">
          © {year} {SITE_LEGAL_NAME}. {t("footer.rights")}
        </p>
        </div>
      </div>
    </footer>
  );
}
