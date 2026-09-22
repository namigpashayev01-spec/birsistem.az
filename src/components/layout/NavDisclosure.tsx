"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { usePathname } from "@/i18n/navigation";

/**
 * Desktop navigation panel. Opens on click rather than hover so a pointer
 * crossing the bar never covers the page, and so touch and keyboard behave the
 * same way. Escape closes it and returns focus to the trigger.
 */
export function NavDisclosure({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // Close on navigation. Adjusting state during render is the supported way to
  // react to a changed prop without an extra render pass.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      triggerRef.current?.focus();
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="static">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className={`inline-flex min-h-11 items-center gap-1.5 rounded-sm px-3 text-[0.9375rem] transition-colors ${
          open ? "bg-red-soft text-red-ink" : "text-ink hover:bg-tint"
        }`}
      >
        {label}
        <svg
          aria-hidden="true"
          viewBox="0 0 10 6"
          className={`h-1.5 w-2.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-rule bg-card shadow-lift"
      >
        {children}
      </div>
    </div>
  );
}
