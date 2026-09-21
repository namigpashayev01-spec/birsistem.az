/**
 * The page's single decorative element: a small seal, borrowed from the stamped
 * paperwork this product replaces. Used once per page, never twice.
 */
export function Stamp({ label }: { label: string }) {
  return (
    <span
      aria-hidden="true"
      className="inline-block -rotate-6 border-2 border-red px-3 py-1.5 font-mono text-2xs uppercase tracking-[0.18em] text-red opacity-90"
    >
      {label}
    </span>
  );
}
