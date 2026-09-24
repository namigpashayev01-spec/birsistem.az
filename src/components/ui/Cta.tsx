import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { Link } from "@/i18n/navigation";

type Variant = "primary" | "inverse" | "secondary" | "ghost" | "quiet";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-pill px-7 text-[0.9375rem] font-bold transition-[background-color,border-color,color,box-shadow,transform] duration-150 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60";

/**
 * One filled control per band, and it is always the same shape and weight, so a
 * visitor never has to work out which is the primary action on the section they
 * are looking at. On the red slabs the fill inverts to white — red on red would
 * disappear — and everything else stays put.
 */
const variants: Record<Variant, string> = {
  primary: "bg-brand text-white shadow-card hover:bg-brand-deep",
  inverse: "bg-white text-brand-ink shadow-card hover:bg-brand-soft",
  secondary: "border border-rule-strong bg-card text-ink hover:border-brand-ink/40 hover:bg-cloud",
  ghost: "border border-on-deep/55 text-on-deep hover:border-on-deep hover:bg-white/12",
  quiet: "min-h-11 px-0 font-bold text-brand-ink hover:text-brand-deep",
};

export function CtaLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: { variant?: Variant; children: ReactNode } & ComponentProps<typeof Link>) {
  return (
    <Link {...props} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function CtaButton({
  variant = "primary",
  className = "",
  children,
  ...props
}: { variant?: Variant; children: ReactNode } & ComponentProps<"button">) {
  return (
    <button {...props} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}

/** For in-page anchors (`#section`), which the typed router Link does not take. */
export function CtaAnchor({
  variant = "primary",
  className = "",
  children,
  ...props
}: { variant?: Variant; children: ReactNode } & ComponentProps<"a">) {
  return (
    <a {...props} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}

/**
 * Onward link: deep teal, bold, and an arrow that nudges forward on hover. The
 * arrow is an icon rather than a typed "→" so it keeps the right weight and
 * baseline at every size.
 */
export function TextLink({
  className = "",
  children,
  arrow = true,
  ...props
}: { arrow?: boolean } & ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      className={`group/link inline-flex min-h-11 items-center gap-2 font-bold text-brand-ink underline decoration-brand-ink/25 decoration-2 underline-offset-[6px] transition-colors hover:decoration-brand-ink ${className}`}
    >
      {children}
      {arrow ? (
        <ArrowRight
          size={17}
          strokeWidth={2.5}
          aria-hidden="true"
          className="shrink-0 no-underline transition-transform duration-200 ease-out-soft group-hover/link:translate-x-1"
        />
      ) : null}
    </Link>
  );
}
