/**
 * The page's single decorative element: a small brand, borrowed from the stamped
 * paperwork this product replaces. Used once per page, never twice.
 */
export function Stamp({ label }: { label: string }) {
  return (
    <span
      aria-hidden="true"
      className="inline-block -rotate-6 rounded-sm border-2 border-brand-deep px-3 py-1.5 font-mono text-2xs uppercase tracking-[0.18em] text-brand-deep"
    >
      {label}
    </span>
  );
}
