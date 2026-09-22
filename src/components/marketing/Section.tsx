import type { ReactNode } from "react";

export type Tone = "paper" | "card" | "tint" | "warm" | "oxblood";

const TONES: Record<Tone, string> = {
  paper: "bg-paper",
  card: "bg-paper",
  tint: "bg-tint",
  warm: "bg-tint-warm",
  oxblood: "bg-oxblood text-on-oxblood",
};

/** Small rounded label that sits above a heading. Sentence case, never shouty. */
export function Chip({ children, tone = "paper" }: { children: ReactNode; tone?: Tone }) {
  const dark = tone === "oxblood";
  return (
    <span
      className={`inline-block rounded-full px-3 py-1.5 text-2xs font-medium ${
        dark ? "bg-white/12 text-on-oxblood" : "bg-red-soft text-red-ink"
      }`}
    >
      {children}
    </span>
  );
}

/**
 * A full-width band. White and tinted bands alternate down the page, so the eye
 * gets a break between sections without a rule being drawn across it.
 *
 * `label` becomes the chip above the heading; `aside` is the right-hand slot of
 * that row, usually a link to the matching hub.
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
  const padding = size === "tight" ? "py-14 md:py-20" : "py-20 md:py-28";

  return (
    <section id={id} className={TONES[tone]}>
      <div className={`mx-auto max-w-[78rem] px-5 md:px-8 ${padding}`}>
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
  const dark = tone === "oxblood";
  return (
    <header className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <h2 className={`text-h2 font-medium ${dark ? "text-on-oxblood" : "text-ink"}`}>
        {children}
      </h2>
      {sub ? (
        <p className={`mt-4 text-lead ${dark ? "text-on-oxblood/80" : "text-ink-70"}`}>{sub}</p>
      ) : null}
    </header>
  );
}
