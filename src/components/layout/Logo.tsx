import { Link } from "@/i18n/navigation";
import { SITE_NAME } from "@/lib/site";

/**
 * The wordmark carries the layout idea: the red bar is the register rule that
 * runs down the left edge of every page, shrunk to brand size.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group flex shrink-0 items-center gap-2.5 ${className}`}
      aria-label={SITE_NAME}
    >
      <span
        aria-hidden="true"
        className="block h-6 w-[3px] bg-red transition-[height] duration-200 group-hover:h-7"
      />
      <span className="text-[1.0625rem] font-semibold tracking-[-0.03em] text-ink">
        birsistem
      </span>
    </Link>
  );
}
