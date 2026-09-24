"use client";

import { useActionState } from "react";

import { login, type LoginState } from "../actions";

const MESSAGE: Record<NonNullable<LoginState["error"]>, string> = {
  wrong: "Parol yanlışdır.",
  rate: "Çox cəhd edildi. 15 dəqiqədən sonra yenidən yoxlayın.",
  config: "Giriş serverdə qurulmayıb.",
};

export function LoginForm() {
  const [state, action, pending] = useActionState(login, {});

  return (
    <form action={action} className="mt-6">
      <label htmlFor="password" className="text-sm font-medium text-ink">
        Parol
      </label>
      <input
        id="password"
        name="password"
        type="password"
        required
        autoFocus
        autoComplete="current-password"
        aria-invalid={state.error ? true : undefined}
        aria-describedby={state.error ? "login-error" : undefined}
        className="mt-2 block h-12 w-full rounded-sm border border-rule-strong bg-card px-4 text-ink outline-none transition-colors focus:border-brand-ink"
      />
      {state.error ? (
        <p id="login-error" role="alert" className="mt-2 text-sm text-alert">
          {MESSAGE[state.error]}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-pill bg-brand px-7 text-[0.9375rem] font-bold text-white shadow-card transition-colors hover:bg-brand-deep disabled:opacity-60"
      >
        {pending ? "Yoxlanılır…" : "Daxil ol"}
      </button>
    </form>
  );
}
