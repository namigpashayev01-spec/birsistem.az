/**
 * Every statutory rate the calculators use lives here, in one place, with the
 * date it applies from and the source it came from. When the law changes this
 * is the only file that needs editing.
 *
 * IMPORTANT: verify with an accountant before launch. In particular, confirm
 * whether the income-tax base is the full gross salary or gross less a fixed
 * allowance — sources differ on that detail.
 *
 * Sources (checked 2026-09-21):
 *  - https://www.taxes.gov.az/az/post/4461
 *  - https://www.muhasibat.az/2026-emekhaqqidan-tutulmalar/
 *  - https://bizcon.az/az/blog/2026-ci-ilden-emek-haqqindan-gelir-vergisi-nece-tutulacaq
 *  - https://partnergroupmmc.az (temporary incapacity benefit, 2026)
 */

export const RATES_AS_OF = "2026-01-01";
export const RATES_LABEL = "2026";

export const VAT_RATE = 0.18;

/**
 * Salary income tax, non-oil-and-gas private sector, from 1 January 2026.
 * The seven-year exemption that ran from 2019 ended on 31 December 2025.
 */
export const INCOME_TAX_BRACKETS = [
  { upTo: 2500, base: 0, rate: 0.03, over: 0 },
  { upTo: 8000, base: 75, rate: 0.1, over: 2500 },
  { upTo: Infinity, base: 625, rate: 0.14, over: 8000 },
] as const;

/** Mandatory state social insurance (DSMF), non-oil private sector. */
export const SOCIAL_INSURANCE = {
  employee: [
    { upTo: 200, base: 0, rate: 0.03, over: 0 },
    { upTo: Infinity, base: 6, rate: 0.1, over: 200 },
  ],
  employer: [
    { upTo: 200, base: 0, rate: 0.22, over: 0 },
    { upTo: 8000, base: 44, rate: 0.15, over: 200 },
    { upTo: Infinity, base: 44 + 7800 * 0.15, rate: 0.11, over: 8000 },
  ],
} as const;

/** Unemployment insurance — symmetric between the two sides. */
export const UNEMPLOYMENT_RATE = 0.005;

/** Compulsory medical insurance — symmetric between the two sides. */
export const MEDICAL_INSURANCE_BRACKETS = [
  { upTo: 2500, base: 0, rate: 0.02, over: 0 },
  { upTo: Infinity, base: 50, rate: 0.005, over: 2500 },
] as const;

/**
 * Temporary incapacity (sick leave) benefit as a share of average earnings,
 * by length of insured service. The employer covers the first 14 calendar days.
 */
export const SICK_LEAVE_TIERS = [
  { maxYears: 8, share: 0.6, labelKey: "under8" },
  { maxYears: 12, share: 0.8, labelKey: "from8to12" },
  { maxYears: Infinity, share: 1, labelKey: "over12" },
] as const;

export const SICK_LEAVE_EMPLOYER_DAYS = 14;

type Bracket = { upTo: number; base: number; rate: number; over: number };

/** Progressive amount for a bracket table: base of the band plus rate on the excess. */
export function progressive(amount: number, brackets: readonly Bracket[]): number {
  if (amount <= 0) return 0;
  const bracket =
    brackets.find((candidate) => amount <= candidate.upTo) ?? brackets[brackets.length - 1];
  return bracket.base + (amount - bracket.over) * bracket.rate;
}

export type SalaryBreakdown = {
  gross: number;
  incomeTax: number;
  socialEmployee: number;
  unemploymentEmployee: number;
  medicalEmployee: number;
  net: number;
  socialEmployer: number;
  unemploymentEmployer: number;
  medicalEmployer: number;
  employerCost: number;
};

export function breakdownFromGross(gross: number): SalaryBreakdown {
  const incomeTax = progressive(gross, INCOME_TAX_BRACKETS);
  const socialEmployee = progressive(gross, SOCIAL_INSURANCE.employee);
  const unemploymentEmployee = gross * UNEMPLOYMENT_RATE;
  const medicalEmployee = progressive(gross, MEDICAL_INSURANCE_BRACKETS);

  const socialEmployer = progressive(gross, SOCIAL_INSURANCE.employer);
  const unemploymentEmployer = gross * UNEMPLOYMENT_RATE;
  const medicalEmployer = progressive(gross, MEDICAL_INSURANCE_BRACKETS);

  return {
    gross,
    incomeTax,
    socialEmployee,
    unemploymentEmployee,
    medicalEmployee,
    net: gross - incomeTax - socialEmployee - unemploymentEmployee - medicalEmployee,
    socialEmployer,
    unemploymentEmployer,
    medicalEmployer,
    employerCost: gross + socialEmployer + unemploymentEmployer + medicalEmployer,
  };
}

/**
 * Net to gross has no closed form across bracket boundaries, so it is solved by
 * bisection — 60 iterations is far more precision than currency needs.
 */
export function grossFromNet(net: number): number {
  if (net <= 0) return 0;
  let low = net;
  let high = net * 3 + 1000;
  for (let i = 0; i < 60; i += 1) {
    const mid = (low + high) / 2;
    if (breakdownFromGross(mid).net < net) low = mid;
    else high = mid;
  }
  return (low + high) / 2;
}
