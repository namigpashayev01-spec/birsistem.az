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
        className="absolute left-0 right-0 top-[3.75rem] hidden h-px bg-rule-strong lg:block"
      />
      {items.map((item, index) => (
        <li
          key={item.title}
          className="relative flex min-w-0 flex-col rounded-md bg-card p-7 shadow-card"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-sm font-medium text-paper">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="shrink-0 rounded-pill bg-cloud px-3 py-1.5 text-2xs font-bold text-ink-70">
              {item.duration}
            </span>
          </div>
          <h3 className="mt-6 text-h3 font-bold text-ink">{item.title}</h3>
          <p className="mt-2.5 text-sm leading-relaxed text-ink-70">{item.text}</p>
        </li>
      ))}
    </ol>
  );
}
