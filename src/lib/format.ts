/**
 * Chrome's ICU data for `az-AZ` formats numbers as "1,704.50" and dates as
 * "2026-06-12" — neither is how Azerbaijani business documents are written.
 * So Azerbaijani gets an explicit formatter and the other locales use Intl.
 */
const NBSP = " ";

function formatAzNumber(value: number, digits: number) {
  const safe = Number.isFinite(value) ? value : 0;
  const [whole, fraction] = Math.abs(safe).toFixed(digits).split(".");
  const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, NBSP);
  const sign = safe < 0 ? "−" : "";
  return fraction ? `${sign}${grouped},${fraction}` : `${sign}${grouped}`;
}

export function formatNumber(value: number, locale: string, digits = 0) {
  if (locale === "az") return formatAzNumber(value, digits);
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(Number.isFinite(value) ? value : 0);
}

export function formatMoney(value: number, locale: string) {
  return formatNumber(value, locale, 2);
}

/** Day-first, dot-separated — the form used on Azerbaijani paperwork. */
export function formatDate(value: string | Date, locale: string) {
  const date = typeof value === "string" ? new Date(value) : value;
  if (locale === "az") {
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    return `${day}.${month}.${date.getUTCFullYear()}`;
  }
  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
