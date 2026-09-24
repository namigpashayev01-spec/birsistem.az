import { Link } from "@/i18n/navigation";
import { SITE_NAME } from "@/lib/site";

/**
 * The wordmark carries the layout idea: the rule is the margin line ruled down
 * the side of a ledger page, and the red bead is the stamp set beside it. On
 * hover the bead travels down the rule — the one piece of play in the chrome,
 * and it only ever answers a pointer.
 */
export function Logo({ className = "", tone = "ink" }: { className?: string; tone?: "ink" | "light" }) {
  const light = tone === "light";
  return (
    <Link
      href="/"
      className={`group flex shrink-0 items-center gap-2.5 ${className}`}
      aria-label={SITE_NAME}
    >
      <span
        aria-hidden="true"
        className={`relative block h-6 w-[3px] rounded-pill ${light ? "bg-on-deep/45" : "bg-ink"}`}
      >
        <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-brand transition-transform duration-300 ease-out-soft group-hover:translate-y-5" />
      </span>
      <span
        className={`text-[1.125rem] font-extrabold tracking-[-0.04em] ${
          light ? "text-on-deep" : "text-ink"
        }`}
      >
        birsistem
      </span>
    </Link>
  );
}
