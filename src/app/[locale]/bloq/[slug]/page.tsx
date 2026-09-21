import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { AUTHOR, POSTS, POSTS_BY_DATE, POST_BY_SLUG } from "@/content/blog";
import { MODULE_BY_SLUG } from "@/content/modules";
import { pick } from "@/lib/content";
import { formatDate } from "@/lib/format";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaLink } from "@/components/ui/Cta";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section, SectionTitle } from "@/components/marketing/Section";

type Props = { params: Promise<{ locale: Locale; slug: string }> };

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = POST_BY_SLUG.get(slug);
  if (!post) return {};
  const copy = pick(post.copy, locale);
  return buildMetadata({
    locale,
    href: { pathname: "/bloq/[slug]", params: { slug } },
    title: copy.seoTitle,
    description: copy.seoDescription,
    ogType: "article",
    publishedTime: post.published,
    modifiedTime: post.updated,
    authors: [AUTHOR],
  });
}

export default async function BlogPost({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = POST_BY_SLUG.get(slug);
  if (!post) notFound();

  const copy = pick(post.copy, locale);
  const t = await getTranslations();
  const url = absoluteUrl(locale, { pathname: "/bloq/[slug]", params: { slug } });


  const relatedModule = MODULE_BY_SLUG.get(post.relatedModule);
  const relatedCopy = relatedModule ? pick(relatedModule.copy, locale) : null;
  const others = POSTS_BY_DATE.filter((entry) => entry.slug !== post.slug).slice(0, 3);

  const schema = [
    {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline: copy.title,
      description: copy.seoDescription,
      datePublished: post.published,
      dateModified: post.updated,
      inLanguage: locale,
      wordCount: copy.blocks
        .flatMap((block) => [...(block.paragraphs ?? []), ...(block.list ?? [])])
        .join(" ")
        .split(/\s+/).length,
      author: { "@type": "Organization", name: AUTHOR, url: SITE_URL },
      publisher: { "@id": `${SITE_URL}/#organization` },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      isPartOf: { "@type": "Blog", name: SITE_NAME, url: absoluteUrl(locale, "/bloq") },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t("common.home"), item: absoluteUrl(locale, "/") },
        {
          "@type": "ListItem",
          position: 2,
          name: t("nav.blog"),
          item: absoluteUrl(locale, "/bloq"),
        },
        { "@type": "ListItem", position: 3, name: copy.title, item: url },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": schema }} />

      <article>
        <div className="mx-auto max-w-[80rem] px-4 pb-10 md:px-8">
          <Breadcrumbs trail={[{ label: t("nav.blog"), href: "/bloq" }, { label: copy.title }]} />
          <div className="grid gap-8 pt-4 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-0">
            <div className="md:sticky md:top-24 md:self-start md:pr-8">
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-ink-50">{t("common.published")}</dt>
                  <dd className="mt-0.5 font-mono text-ink">
                    <time dateTime={post.published}>
                      {formatDate(post.published, locale)}
                    </time>
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-50">{t("common.updated")}</dt>
                  <dd className="mt-0.5 font-mono text-ink">
                    <time dateTime={post.updated}>
                      {formatDate(post.updated, locale)}
                    </time>
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-50">{AUTHOR}</dt>
                  <dd className="mt-0.5 font-mono text-ink">
                    {t("common.readingTime", { minutes: post.readingMinutes })}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="min-w-0 md:border-l md:border-rule md:pl-10">
              <h1 className="max-w-3xl text-h1 font-semibold text-ink">{copy.title}</h1>
              <p className="mt-5 max-w-2xl text-lead text-ink-70">{copy.excerpt}</p>

              <div className="mt-10 space-y-8">
                {copy.blocks.map((block, index) => (
                  <section key={index}>
                    {block.heading ? (
                      <h2 className="text-h3 font-semibold text-ink">{block.heading}</h2>
                    ) : null}
                    {block.paragraphs?.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="mt-3 max-w-2xl leading-relaxed text-ink-70"
                      >
                        {paragraph}
                      </p>
                    ))}
                    {block.list ? (
                      <ul className="mt-4 max-w-2xl border-t border-rule">
                        {block.list.map((item) => (
                          <li
                            key={item}
                            className="border-b border-rule py-3 leading-relaxed text-ink-70"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {relatedCopy && relatedModule ? (
        <Section label={t("nav.solutions")} tone="card">
          <div className="max-w-xl">
            <h2 className="text-h2 font-semibold text-ink">
              {t("blog.ctaTitle", { module: relatedCopy.name })}
            </h2>
            <p className="mt-4 text-lead text-ink-70">{relatedCopy.row}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink href={relatedModule.href}>{relatedCopy.name}</CtaLink>
              <CtaLink href="/demo" variant="secondary">
                {t("common.requestDemo")}
              </CtaLink>
            </div>
          </div>
        </Section>
      ) : null}

      <Section label={t("nav.blog")}>
        <SectionTitle>{t("blog.moreTitle")}</SectionTitle>
        <ul className="mt-8 border-t border-rule">
          {others.map((entry) => {
            const c = pick(entry.copy, locale);
            return (
              <li key={entry.slug} className="border-b border-rule">
                <Link
                  href={{ pathname: "/bloq/[slug]", params: { slug: entry.slug } }}
                  className="group block py-4"
                >
                  <span className="font-medium text-ink group-hover:text-red-ink">
                    {c.title}
                  </span>
                  <span className="mt-1 block max-w-2xl text-sm text-ink-70">{c.excerpt}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Section>
    </>
  );
}
