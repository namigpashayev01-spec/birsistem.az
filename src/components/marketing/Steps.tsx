/**
 * Numbered because this genuinely is a sequence: each step only starts once the
 * previous one has produced something. On wide screens a hairline runs behind
 * the numbers so the four cards read as one path rather than four boxes.
 */
export function Steps({
  items,
}: {
  items: { title: string; text: string; duration: string }[];
}) {
  return (
    <ol className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <span
        aria-hidden="true"
        className="absolute left-0 right-0 top-[3.25rem] hidden h-px bg-rule lg:block"
      />
      {items.map((item, index) => (
        <li
          key={item.title}
          className="relative flex min-w-0 flex-col rounded-lg border border-rule bg-card p-6 shadow-card"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-h3 font-medium text-red">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="shrink-0 rounded-full bg-tint px-2.5 py-1 text-2xs font-medium text-ink-70">
              {item.duration}
            </span>
          </div>
          <h3 className="mt-5 font-semibold text-ink">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-70">{item.text}</p>
        </li>
      ))}
    </ol>
  );
}
