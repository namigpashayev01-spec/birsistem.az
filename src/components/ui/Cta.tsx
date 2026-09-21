import type { ComponentProps, ReactNode } from "react";
import { Link } from "@/i18n/navigation";

type Variant = "primary" | "secondary" | "quiet";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-[2px] px-5 text-[0.9375rem] font-medium transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-red text-white hover:bg-red-deep",
  secondary:
    "border border-rule-strong bg-card text-ink hover:border-ink hover:bg-paper-deep",
  quiet: "text-red-ink underline decoration-rule-strong underline-offset-4 hover:decoration-red",
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
