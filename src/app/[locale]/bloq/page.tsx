import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { POSTS_BY_DATE } from "@/content/blog";
import { BLOG_PAGE } from "@/content/pages";
import { pick } from "@/lib/content";
import { formatDate } from "@/lib/format";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/marketing/PageHero";
import { Section } from "@/components/marketing/Section";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const copy = pick(BLOG_PAGE, locale);
  return buildMetadata({
    locale,
    href: "/bloq",
    title: copy.seoTitle,
    description: copy.seoDescription,
  });
}

export default async function BlogIndex({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const copy = pick(BLOG_PAGE, locale);
  const t = await getTranslations();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: copy.title,
    url: absoluteUrl(locale, "/bloq"),
    blogPost: POSTS_BY_DATE.map((post) => ({
      "@type": "BlogPosting",
      headline: pick(post.copy, locale).title,
      datePublished: post.published,
      dateModified: post.updated,
      url: absoluteUrl(locale, { pathname: "/bloq/[slug]", params: { slug: post.slug } }),
    })),
  };

  return (
    <>
      <JsonLd data={schema} />

      <PageHero crumbs={[{ label: copy.title }]} title={copy.title} lead={copy.lead} />

      <Section tone="card" label={t("nav.blog")}>
        <ul className="border-t border-rule">
          {POSTS_BY_DATE.map((post) => {
            const c = pick(post.copy, locale);
            return (
              <li key={post.slug} className="border-b border-rule">
                <Link
                  href={{ pathname: "/bloq/[slug]", params: { slug: post.slug } }}
                  className="group block py-6"
                >
                  <div className="grid gap-x-8 gap-y-2 md:grid-cols-[8rem_minmax(0,1fr)]">
                    <time
                      dateTime={post.published}
                      className="font-mono text-sm text-ink-50"
                    >
                      {formatDate(post.published, locale)}
                    </time>
                    <div>
                      <h2 className="text-h3 font-semibold text-ink group-hover:text-red-ink">
                        {c.title}
                      </h2>
                      <p className="mt-2 max-w-2xl text-ink-70">{c.excerpt}</p>
                      <p className="mt-2 font-mono text-2xs text-ink-50">
                        {t("common.readingTime", { minutes: post.readingMinutes })}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </Section>
    </>
  );
}
