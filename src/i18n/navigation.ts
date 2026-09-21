import type { ComponentProps } from "react";
import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

/**
 * What `Link` accepts: a static pathname, or an object carrying the params a
 * dynamic route needs. Components take this rather than a bare pathname union.
 */
export type Href = ComponentProps<typeof Link>["href"];
