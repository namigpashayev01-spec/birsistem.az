import type { ReactNode } from "react";

export type Tone = "paper" | "card" | "wash" | "oxblood";

const TONES: Record<Tone, string> = {
  paper: "bg-paper border-t border-rule",
  card: "bg-card border-t border-rule",
  wash: "bg-wash-soft border-t border-rule",
  oxblood: "bg-oxblood text-on-oxblood",
};

/**
 * A full-width band. Surfaces alternate down the page so two neighbouring
 * sections never look alike, and content spans the whole column instead of
 * sitting in a narrow track beside an empty margin.
 *
 * `label` names the part of the site you are in; the heading inside makes the
 * claim. They do different jobs, which is why both are here.
 */
export function Section({
  children,
  label,
  aside,
  tone = "paper",
  id,
  size = "regular",
}: {
  children: ReactNode;
  label?: string;
  /** Right-hand slot of the label row, usually a link to the matching hub. */
  aside?: ReactNode;
  tone?: Tone;
  id?: string;
  size?: "regular" | "tight";
}) {
  const dark = tone === "oxblood";
  const padding = size === "tight" ? "py-12 md:py-16" : "py-16 md:py-24";

  return (
    <section id={id} className={TONES[tone]}>
      <div className={`mx-auto max-w-[80rem] px-4 md:px-8 ${padding}`}>
        {label || aside ? (
          <div className="mb-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
            {label ? (
              <p
                className={`flex items-center gap-2 text-sm font-medium ${
                  dark ? "text-on-oxblood/65" : "text-red-ink"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`block h-3 w-[2px] ${dark ? "bg-on-oxblood/50" : "bg-red"}`}
                />
                {label}
              </p>
            ) : (
              <span />
            )}
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
}: {
  children: ReactNode;
  sub?: ReactNode;
  tone?: Tone;
}) {
  const dark = tone === "oxblood";
  return (
    <header className="max-w-3xl">
      <h2 className={`text-h2 font-semibold ${dark ? "text-on-oxblood" : "text-ink"}`}>
        {children}
      </h2>
      {sub ? (
        <p className={`mt-4 max-w-2xl text-lead ${dark ? "text-on-oxblood/80" : "text-ink-70"}`}>
          {sub}
        </p>
      ) : null}
    </header>
  );
}
