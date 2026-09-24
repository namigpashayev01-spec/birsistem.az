import type { ReactNode } from "react";

export type Tone = "paper" | "cloud" | "deep";

/**
 * The page is white; structure comes from large rounded slabs laid on it.
 * `cloud` is the quiet slab, `deep` the one that anchors a run of pale
 * sections, and `paper` sits flush on the page with no slab at all.
 *
 * A page alternates `paper` with a slab. Two slabs of the same tone in a row
 * read as one block with a seam through it, and two `paper` sections in a row
 * read as one undifferentiated stretch of white — which is what happened while
 * a second, identical "card" tone existed alongside `paper`.
 */
const SLAB: Record<Tone, string> = {
  paper: "",
  cloud: "rounded-lg bg-cloud",
  deep: "on-deep rounded-lg bg-deep text-on-deep",
};

const HAS_SLAB: Record<Tone, boolean> = {
  paper: false,
  cloud: true,
  deep: true,
};

/**
 * The eyebrow above a heading. A gold four-point mark, then the label in
 * sentence case — the mark is what makes it read as a marker rather than a
 * stray line of small text, and it carries no meaning, so it is hidden from
 * assistive tech.
 */
export function Chip({ children, tone = "paper" }: { children: ReactNode; tone?: Tone }) {
  const dark = tone === "deep";
  return (
    <span
      className={`inline-flex items-center gap-2 text-[0.8125rem] font-bold tracking-wide ${
        dark ? "text-on-deep/85" : "text-ink-70"
      }`}
    >
      <Mark tone={dark ? "light" : "brand"} />
      {children}
    </span>
  );
}

/** The four-point star that opens every eyebrow. */
export function Mark({ tone = "brand", className = "" }: { tone?: "brand" | "light"; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className={`h-3.5 w-3.5 shrink-0 ${tone === "light" ? "fill-on-deep-accent" : "fill-brand"} ${className}`}
    >
      <path d="M8 0c.5 4.2 3.3 7 7.5 7.5v1C11.3 9 8.5 11.8 8 16h-1C6.5 11.8 3.7 9-.5 8.5v-1C3.7 7 6.5 4.2 7 0h1Z" />
    </svg>
  );
}

/**
 * A band of the page. `label` becomes the eyebrow above the heading; `aside` is
 * the right-hand slot of that row, usually a link to the matching hub.
 */
export function Section({
  children,
  label,
  aside,
  tone = "paper",
  id,
  size = "regular",
  align = "left",
}: {
  children: ReactNode;
  label?: string;
  aside?: ReactNode;
  tone?: Tone;
  id?: string;
  size?: "regular" | "tight";
  align?: "left" | "center";
}) {
  const slab = HAS_SLAB[tone];
  const padding = size === "tight" ? "py-14 md:py-18" : "py-20 md:py-26";

  return (
    <section id={id} className={slab ? "px-3 py-3 md:px-4 md:py-4" : ""}>
      <div className={`mx-auto max-w-[82rem] ${SLAB[tone]}`}>
        <div
          className={`mx-auto max-w-[76rem] ${slab ? "px-5 md:px-12" : "px-5 md:px-8"} ${padding}`}
        >
          {label || aside ? (
            <div
              className={`mb-5 flex flex-wrap items-center gap-x-6 gap-y-3 ${
                align === "center" ? "justify-center" : "justify-between"
              }`}
            >
              {label ? <Chip tone={tone}>{label}</Chip> : <span />}
              {aside}
            </div>
          ) : null}
          {children}
        </div>
      </div>
    </section>
  );
}

/** The section's real heading. One per section, always an h2. */
export function SectionTitle({
  children,
  sub,
  tone = "paper",
  align = "left",
}: {
  children: ReactNode;
  sub?: ReactNode;
  tone?: Tone;
  align?: "left" | "center";
}) {
  const dark = tone === "deep";
  return (
    <header className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <h2 className={`text-h2 font-extrabold ${dark ? "text-on-deep" : "text-ink"}`}>
        {children}
      </h2>
      {sub ? (
        <p
          className={`mt-5 max-w-2xl text-lead ${
            align === "center" ? "mx-auto" : ""
          } ${dark ? "text-on-deep/85" : "text-ink-70"}`}
        >
          {sub}
        </p>
      ) : null}
    </header>
  );
}
