import type { Prose as ProseSection } from "@/content/pages";

/** Long-form body copy. Kept narrow so lines stay under ~75 characters. */
export function Prose({ sections }: { sections: ProseSection[] }) {
  return (
    <div className="space-y-10">
      {sections.map((section) => (
        <section key={section.title}>
          <h2 className="text-h3 font-semibold text-ink">{section.title}</h2>
          {section.body.map((paragraph, index) => (
            <p key={index} className="mt-3 max-w-2xl leading-relaxed text-ink-70">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </div>
  );
}
