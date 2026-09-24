"use client";

import { useActionState, useState } from "react";

import type { LeadStatus } from "@/generated/prisma/enums";
import { STATUS_LABEL, STATUS_ORDER } from "@/lib/admin/labels";
import { updateLead, type UpdateState } from "../../../actions";

/** Status and note: the only two things the team changes on a lead. */
export function LeadEditor({ id, status, note }: { id: string; status: LeadStatus; note: string }) {
  const [state, action, pending] = useActionState<UpdateState, FormData>(updateLead, {});
  const [current, setCurrent] = useState(status);
  const [dirty, setDirty] = useState(false);

  return (
    <form
      action={(formData) => {
        setDirty(false);
        return action(formData);
      }}
      onChange={() => setDirty(true)}
      className="rounded-md bg-paper p-6 shadow-card md:p-8"
    >
      <input type="hidden" name="id" value={id} />

      <fieldset>
        <legend className="font-bold text-ink">Status</legend>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {STATUS_ORDER.map((value) => (
            <label
              key={value}
              className={`inline-flex min-h-10 cursor-pointer items-center rounded-pill border px-3.5 text-sm font-bold transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand ${
                current === value
                  ? "border-ink bg-ink text-paper"
                  : "border-rule-strong text-ink-70 hover:border-ink/40 hover:text-ink"
              }`}
            >
              <input
                type="radio"
                name="status"
                value={value}
                checked={current === value}
                onChange={() => setCurrent(value)}
                className="sr-only"
              />
              {STATUS_LABEL[value]}
            </label>
          ))}
        </div>
      </fieldset>

      <label htmlFor="note" className="mt-6 block font-bold text-ink">
        Qeyd
      </label>
      <p className="mt-1 text-sm text-ink-50">Yalnız komanda görür: nə danışıldı, növbəti addım nədir.</p>
      <textarea
        id="note"
        name="note"
        defaultValue={note}
        rows={6}
        maxLength={4000}
        className="mt-3 block w-full rounded-sm border border-rule-strong bg-card px-4 py-3 text-sm leading-relaxed text-ink outline-none transition-colors focus:border-brand-ink"
      />

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex min-h-11 items-center rounded-pill bg-brand px-6 text-sm font-bold text-white shadow-card hover:bg-brand-deep disabled:opacity-60"
        >
          {pending ? "Saxlanılır…" : "Yadda saxla"}
        </button>
        <p role="status" className="text-sm">
          {state.error ? (
            <span className="text-alert">Saxlanılmadı. Yenidən cəhd edin.</span>
          ) : state.saved && !dirty && !pending ? (
            <span className="text-ok">Yadda saxlanıldı.</span>
          ) : null}
        </p>
      </div>
    </form>
  );
}
