import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Everything except API routes, the admin panel (one language, no locale
  // prefix), Next internals, the root-level apple-icon route and files with an
  // extension.
  // The dot is a character class so nothing has to be backslash-escaped here.
  // `/opengraph-image` must stay in scope: the rewrite to `/az/opengraph-image`
  // is what makes the unprefixed card URL resolve.
  matcher: "/((?!api|admin|_next|_vercel|apple-icon|.*[.].*).*)",
};
