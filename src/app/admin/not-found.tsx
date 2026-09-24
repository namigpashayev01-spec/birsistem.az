import Link from "next/link";

export default function AdminNotFound() {
  return (
    <main className="grid min-h-dvh place-items-center px-4">
      <div className="max-w-sm text-center">
        <p className="font-mono text-sm text-ink-50">404</p>
        <h1 className="mt-2 text-h3 font-extrabold text-ink">Bu sorğu tapılmadı</h1>
        <p className="mt-2 text-sm text-ink-70">Ola bilsin, ünvan səhvdir və ya sorğu silinib.</p>
        <Link
          href="/admin"
          className="mt-6 inline-flex min-h-11 items-center rounded-pill bg-brand px-6 text-sm font-bold text-white hover:bg-brand-deep"
        >
          Sorğulara qayıt
        </Link>
      </div>
    </main>
  );
}
