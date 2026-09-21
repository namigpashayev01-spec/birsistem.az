import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { MODULES } from "@/content/modules";
import { CtaLink } from "@/components/ui/Cta";

/**
 * A real 404: Next serves this with a 404 status, so it is never a soft 404.
 * It offers the main entry points rather than a dead end.
 */
export default async function NotFound() {
  const t = await getTranslations("common");
  const nav = await getTranslations("nav");

  return (
    <div className="mx-auto max-w-[80rem] px-4 py-20 md:px-8 md:py-28">
      <div className="grid gap-8 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-0">
        <p className="font-mono text-sm text-ink-50 md:pr-8">404</p>
        <div className="min-w-0 md:border-l md:border-rule md:pl-10">
          <h1 className="max-w-2xl text-h1 font-semibold text-ink">{t("notFoundTitle")}</h1>
          <p className="mt-5 max-w-xl text-lead text-ink-70">{t("notFoundText")}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <CtaLink href="/">{t("backHome")}</CtaLink>
            <CtaLink href="/hazir-heller" variant="secondary">
              {nav("allModules")}
            </CtaLink>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-rule pt-6">
            {MODULES.map((module) => (
              <li key={module.slug}>
                <Link
                  href={module.href}
                  className="text-sm text-red-ink underline decoration-rule-strong underline-offset-4 hover:decoration-red"
                >
                  {module.slug.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
