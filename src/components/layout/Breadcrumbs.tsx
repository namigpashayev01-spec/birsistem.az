import { getTranslations } from "next-intl/server";
import { Link, type Href } from "@/i18n/navigation";

export type Crumb = { label: string; href?: Href };

/**
 * Visible breadcrumbs. The matching BreadcrumbList JSON-LD is emitted by each
 * page next to its own schema, so the two never drift apart.
 */
export async function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  const t = await getTranslations("common");

  return (
    <nav aria-label="Breadcrumb" className="py-4 text-sm">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-ink-50">
        <li>
          <Link href="/" className="hover:text-ink">
            {t("home")}
          </Link>
        </li>
        {trail.map((crumb, index) => (
          <li key={index} className="flex items-center gap-2">
            <span aria-hidden="true" className="text-rule-strong">
              /
            </span>
            {crumb.href && index < trail.length - 1 ? (
              <Link href={crumb.href} className="hover:text-ink">
                {crumb.label}
              </Link>
            ) : (
              <span className="text-ink-70">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
