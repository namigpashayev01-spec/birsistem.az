import type { ReactNode } from "react";

/**
 * The page grid: a narrow margin column carrying the section label, and the
 * content leaning against a vertical rule — a register page rather than a
 * stack of cards. Sections are separated by a full-width hairline.
 */
export function Section({
  label,
  aside,
  children,
  tone = "paper",
  id,
}: {
  label?: string;
  /** Extra material for the margin column, e.g. a link back to a hub. */
  aside?: ReactNode;
  children: ReactNode;
  tone?: "paper" | "card" | "oxblood";
  id?: string;
}) {
  const tones = {
    paper: "border-t border-rule",
    card: "border-t border-rule bg-card",
    oxblood: "bg-oxblood text-on-oxblood",
  } as const;

  const ruleColor = tone === "oxblood" ? "md:border-on-oxblood/20" : "md:border-rule";
  const labelColor = tone === "oxblood" ? "text-on-oxblood/70" : "text-ink-50";

  return (
    <section id={id} className={tones[tone]}>
      <div className="mx-auto max-w-[80rem] px-4 py-14 md:px-8 md:py-20">
        <div className="grid gap-6 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-0">
          <div className="md:sticky md:top-24 md:self-start md:pr-8">
            {label ? (
              <p className={`text-sm font-medium ${labelColor}`}>{label}</p>
            ) : null}
            {aside ? <div className="mt-3">{aside}</div> : null}
          </div>
          <div className={`min-w-0 md:border-l ${ruleColor} md:pl-10`}>{children}</div>
        </div>
      </div>
    </section>
  );
}

/** Heading that sits at the top of a section's content column. */
export function SectionTitle({
  children,
  sub,
  tone = "paper",
}: {
  children: ReactNode;
  sub?: ReactNode;
  tone?: "paper" | "oxblood";
}) {
  return (
    <header className="max-w-2xl">
      <h2
        className={`text-h2 font-semibold ${tone === "oxblood" ? "text-on-oxblood" : "text-ink"}`}
      >
        {children}
      </h2>
      {sub ? (
        <p
          className={`mt-4 text-lead ${tone === "oxblood" ? "text-on-oxblood/80" : "text-ink-70"}`}
        >
          {sub}
        </p>
      ) : null}
    </header>
  );
}
