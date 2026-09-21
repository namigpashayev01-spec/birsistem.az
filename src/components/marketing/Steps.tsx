/**
 * Numbered because this genuinely is a sequence: each step only starts once the
 * previous one has produced something.
 */
export function Steps({
  items,
}: {
  items: { title: string; text: string; duration: string }[];
}) {
  return (
    <ol className="border-t border-rule">
      {items.map((item, index) => (
        <li key={item.title} className="border-b border-rule py-5">
          <div className="grid gap-x-8 gap-y-2 md:grid-cols-[3rem_minmax(0,1fr)_7rem]">
            <span className="font-mono text-sm text-ink-50">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-medium text-ink">{item.title}</h3>
              <p className="mt-1 max-w-xl text-ink-70">{item.text}</p>
            </div>
            <span className="font-mono text-sm text-ink-50 md:text-right">
              {item.duration}
            </span>
          </div>
        </li>
      ))}
    </ol>
  );
}
