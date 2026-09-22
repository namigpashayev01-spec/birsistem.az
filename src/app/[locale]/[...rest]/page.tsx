import { notFound } from "next/navigation";

/**
 * Catches any unmatched path inside the locale segment so it renders this
 * site's own `not-found.tsx` — header, footer and skip link included — rather
 * than the framework's bare default page.
 */
export default function CatchAllPage(): never {
  notFound();
}
