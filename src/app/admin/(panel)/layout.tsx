import Link from "next/link";
import type { ReactNode } from "react";

import { logout } from "../actions";
import { requireAdmin } from "@/lib/admin/session";

/** The signed-in shell: the same floating pill bar as the public site, in miniature. */
export default async function PanelLayout({ children }: { children: ReactNode }) {
  await requireAdmin();

  return (
    <>
      <header className="sticky top-0 z-30 px-3 pt-3 md:px-4 md:pt-4">
        <div className="mx-auto flex h-14 max-w-[82rem] items-center gap-3 rounded-pill border border-rule bg-paper/92 pl-5 pr-2 shadow-bar backdrop-blur-xl md:pl-7">
          <Link href="/admin" className="flex items-center gap-2.5">
            <span aria-hidden="true" className="relative block h-5 w-[3px] rounded-pill bg-ink">
              <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-brand" />
            </span>
            <span className="text-base font-extrabold tracking-[-0.04em] text-ink">birsistem</span>
            <span className="rounded-pill bg-cloud px-2.5 py-1 text-xs font-bold text-ink-70">
              Admin
            </span>
          </Link>

          <nav aria-label="Admin" className="ml-4 hidden sm:block">
            <Link
              href="/admin"
              className="inline-flex min-h-10 items-center rounded-pill px-3.5 text-sm font-medium text-ink hover:bg-cloud"
            >
              Sorğular
            </Link>
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="hidden min-h-10 items-center rounded-pill px-3.5 text-sm font-medium text-ink-70 hover:bg-cloud hover:text-ink sm:inline-flex"
            >
              Sayta keç
            </a>
            <form action={logout}>
              <button
                type="submit"
                className="inline-flex min-h-10 items-center rounded-pill border border-rule px-4 text-sm font-bold text-ink hover:bg-cloud"
              >
                Çıxış
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[82rem] px-3 pb-16 pt-8 md:px-4 md:pt-10">{children}</main>
    </>
  );
}
