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
      <h2 className="text-sm font-medium text-ink">{title}</h2>
      <ul className="mt-3 space-y-2 text-sm text-ink-70">{children}</ul>
    </div>
  );
}

export async function Footer({ locale }: { locale: Locale }) {
  const t = await getTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule bg-tint">
      <div className="mx-auto max-w-[78rem] px-5 py-16 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-70">
              {t("footer.tagline")}
            </p>
            <div className="mt-6 space-y-1.5 text-sm">
              <a
                href={`tel:${CONTACT.phoneHref}`}
                className="block font-mono text-ink hover:text-red-ink"
              >
                {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="block text-ink-70 hover:text-red-ink"
              >
                {CONTACT.email}
              </a>
              <p className="text-ink-50">{CONTACT.addressAz}</p>
              <p className="text-ink-50">{CONTACT.hoursAz}</p>
            </div>
          </div>

          <div className="grid min-w-0 gap-8 sm:grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,1fr))]">
            <Column title={t("footer.solutions")}>
              {MODULES.map((m) => (
                <li key={m.slug}>
                  <Link href={m.href} className="hover:text-red-ink">
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
                    className="hover:text-red-ink"
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
                    className="hover:text-red-ink"
                  >
                    {pick(tool.copy, locale).name}
                  </Link>
                </li>
              ))}
            </Column>

            <Column title={t("footer.company")}>
              {FOOTER_COMPANY.map((item) => (
                <li key={item.messageKey}>
                  <Link href={item.href} className="hover:text-red-ink">
                    {t(`nav.${item.messageKey}`)}
                  </Link>
                </li>
              ))}
              {FOOTER_LEGAL.map((item) => (
                <li key={item.messageKey}>
                  <Link href={item.href} className="hover:text-red-ink">
                    {t(`footer.${item.messageKey}`)}
                  </Link>
                </li>
              ))}
            </Column>
          </div>
        </div>

        <p className="mt-12 border-t border-rule pt-6 text-sm text-ink-50">
          © {year} {SITE_LEGAL_NAME}. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
