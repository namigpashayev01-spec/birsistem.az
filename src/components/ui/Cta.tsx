import type { ComponentProps, ReactNode } from "react";
import { Link } from "@/i18n/navigation";

type Variant = "primary" | "secondary" | "ghost" | "quiet";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 text-[0.9375rem] font-medium transition-[background-color,border-color,color,box-shadow] duration-150 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-red text-white shadow-card hover:bg-red-deep",
  secondary: "border border-rule-strong bg-card text-ink hover:border-ink/30 hover:bg-tint",
  ghost: "border border-white/25 text-white hover:border-white/60 hover:bg-white/10",
  quiet: "min-h-11 px-0 font-medium text-red-ink underline decoration-red/30 underline-offset-4 hover:decoration-red",
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

/** Plain text link in brand colour, used inside body copy and card footers. */
export function TextLink({
  className = "",
  children,
  ...props
}: ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      className={`inline-flex min-h-11 items-center font-medium text-red-ink underline decoration-red/30 underline-offset-4 transition-colors hover:decoration-red ${className}`}
    >
      {children}
    </Link>
  );
}
