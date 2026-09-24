import { createElement, type ComponentProps } from "react";
import { useLocale } from "next-intl";
import { createNavigation } from "next-intl/navigation";
import { routing, type Locale } from "./routing";
import { localizeParams } from "./slugs";

const navigation = createNavigation(routing);

export const { redirect, usePathname, useRouter } = navigation;

/**
 * What `Link` accepts: a static pathname, or an object carrying the params a
 * dynamic route needs. Components take this rather than a bare pathname union.
 */
export type Href = ComponentProps<typeof navigation.Link>["href"];

type PathnameArgs = Parameters<typeof navigation.getPathname>[0];

/**
 * Code passes canonical (Azerbaijani) slugs; the URL carries the slug of the
 * language it is written in. The translation happens here, once, so every link,
 * canonical, hreflang and sitemap entry agrees on the same address.
 */
function localizeHref<H>(href: H, locale: Locale): H {
  if (href && typeof href === "object" && "params" in href && href.params) {
    return { ...href, params: localizeParams(href.params as Record<string, string>, locale) };
  }
  return href;
}

export function getPathname(args: PathnameArgs) {
  return navigation.getPathname({
    ...args,
    href: localizeHref(args.href, args.locale as Locale),
  } as PathnameArgs);
}

export function Link(props: ComponentProps<typeof navigation.Link>) {
  const current = useLocale() as Locale;
  const locale = (props.locale ?? current) as Locale;
  return createElement(navigation.Link, { ...props, href: localizeHref(props.href, locale) });
}
