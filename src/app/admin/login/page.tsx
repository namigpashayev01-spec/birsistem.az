import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { adminConfigured, isAdmin } from "@/lib/admin/session";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = { title: "Giriş" };

export default async function LoginPage() {
  if (await isAdmin()) redirect("/admin");

  return (
    <main className="grid min-h-dvh place-items-center px-4 py-12">
      <div className="w-full max-w-sm rounded-lg bg-paper p-8 shadow-lift md:p-10">
        <div className="flex items-center gap-2.5">
          <span aria-hidden="true" className="relative block h-6 w-[3px] rounded-pill bg-ink">
            <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-brand" />
          </span>
          <span className="text-lg font-extrabold tracking-[-0.04em] text-ink">birsistem</span>
        </div>

        <h1 className="mt-8 text-h3 font-extrabold text-ink">Admin panelə giriş</h1>
        <p className="mt-2 text-sm leading-relaxed text-ink-70">
          Saytdan gələn sorğulara baxmaq və onları idarə etmək üçün.
        </p>

        {adminConfigured() ? (
          <LoginForm />
        ) : (
          <p className="mt-6 rounded-sm bg-brand-soft px-4 py-3 text-sm leading-relaxed text-brand-ink">
            Giriş hələ qurulmayıb. Serverdə <code className="font-mono">ADMIN_PASSWORD</code> və{" "}
            <code className="font-mono">ADMIN_SESSION_SECRET</code> dəyişənlərini təyin edin.
          </p>
        )}
      </div>
    </main>
  );
}
