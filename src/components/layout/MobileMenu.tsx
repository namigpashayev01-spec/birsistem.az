"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname } from "@/i18n/navigation";

export function MobileMenu({
  openLabel,
  closeLabel,
  children,
}: {
  openLabel: string;
  closeLabel: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
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
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      triggerRef.current?.focus();
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
        className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-ink lg:hidden"
      >
        <span className="sr-only">{open ? closeLabel : openLabel}</span>
        <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5">
          {open ? (
            <path
              d="M4 4l12 12M16 4L4 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            />
          ) : (
            <path
              d="M2 5h16M2 10h16M2 15h16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            />
          )}
        </svg>
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto overscroll-contain border-t border-rule bg-paper lg:hidden"
      >
        {children}
      </div>
    </>
  );
}
