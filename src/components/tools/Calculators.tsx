"use client";

import { useMemo, useState } from "react";

import type { CalcLabels } from "@/content/calc";
import type { ToolSlug } from "@/content/tools";
import {
  MEDICAL_INSURANCE_BRACKETS,
  SICK_LEAVE_EMPLOYER_DAYS,
  SICK_LEAVE_TIERS,
  SOCIAL_INSURANCE,
  UNEMPLOYMENT_RATE,
  VAT_RATE,
  breakdownFromGross,
  grossFromNet,
  progressive,
} from "@/lib/rates";
import {
  ModeToggle,
  NumberField,
  ResultPanel,
  SelectField,
  formatMoney,
  formatNumber,
  toNumber,
} from "./ui";

type Props = { labels: CalcLabels; locale: string };

function Layout({
  inputs,
  result,
}: {
  inputs: React.ReactNode;
  result: React.ReactNode;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-12">
      <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
        {inputs}
      </form>
      <div aria-live="polite">{result}</div>
    </div>
  );
}

function VatCalculator({ labels, locale }: Props) {
  const l = labels.edv;
  const [mode, setMode] = useState("add");
  const [amount, setAmount] = useState("1000");

  const value = toNumber(amount);
  const { net, vat, gross } = useMemo(() => {
    if (mode === "add") {
      const vatValue = value * VAT_RATE;
      return { net: value, vat: vatValue, gross: value + vatValue };
    }
    const netValue = value / (1 + VAT_RATE);
    return { net: netValue, vat: value - netValue, gross: value };
  }, [mode, value]);

  return (
    <Layout
      inputs={
        <>
          <ModeToggle
            label={l.mode}
            value={mode}
            onChange={setMode}
            options={[
              { value: "add", label: l.modeAdd },
              { value: "extract", label: l.modeExtract },
            ]}
          />
          <NumberField
            label={mode === "add" ? l.amountAdd : l.amountExtract}
            value={amount}
            onChange={setAmount}
            suffix={labels.common.currency}
          />
          <p className="text-sm text-ink-50">
            {l.rate}: {formatNumber(VAT_RATE * 100, locale)}%
          </p>
        </>
      }
      result={
        <ResultPanel
          headlineLabel={mode === "add" ? l.headlineAdd : l.headlineExtract}
          headline={formatMoney(mode === "add" ? gross : net, locale)}
          rows={[
            { label: l.net, value: formatMoney(net, locale) },
            { label: l.vat, value: formatMoney(vat, locale), strong: true },
            { label: l.gross, value: formatMoney(gross, locale) },
          ]}
        />
      }
    />
  );
}

function SalaryCalculator({ labels, locale }: Props) {
  const l = labels.salary;
  const [mode, setMode] = useState("gross");
  const [amount, setAmount] = useState("2000");

  const value = toNumber(amount);
  const data = useMemo(
    () => breakdownFromGross(mode === "gross" ? value : grossFromNet(value)),
    [mode, value],
  );

  return (
    <Layout
      inputs={
        <>
          <ModeToggle
            label={l.mode}
            value={mode}
            onChange={setMode}
            options={[
              { value: "gross", label: l.modeGross },
              { value: "net", label: l.modeNet },
            ]}
          />
          <NumberField
            label={mode === "gross" ? l.grossInput : l.netInput}
            value={amount}
            onChange={setAmount}
            suffix={labels.common.currency}
          />
        </>
      }
      result={
        <ResultPanel
          headlineLabel={l.headline}
          headline={formatMoney(data.net, locale)}
          rows={[
            { label: l.gross, value: formatMoney(data.gross, locale), strong: true },
            { label: l.incomeTax, value: `−${formatMoney(data.incomeTax, locale)}` },
            { label: l.social, value: `−${formatMoney(data.socialEmployee, locale)}` },
            {
              label: l.unemployment,
              value: `−${formatMoney(data.unemploymentEmployee, locale)}`,
            },
            { label: l.medical, value: `−${formatMoney(data.medicalEmployee, locale)}` },
            { label: l.net, value: formatMoney(data.net, locale), strong: true },
            { label: l.employerSocial, value: formatMoney(data.socialEmployer, locale) },
            {
              label: l.employerUnemployment,
              value: formatMoney(data.unemploymentEmployer, locale),
            },
            { label: l.employerMedical, value: formatMoney(data.medicalEmployer, locale) },
            {
              label: l.employerCost,
              value: formatMoney(data.employerCost, locale),
              strong: true,
            },
          ]}
        />
      }
    />
  );
}

function DsmfCalculator({ labels, locale }: Props) {
  const l = labels.dsmf;
  const [amount, setAmount] = useState("2000");
  const gross = toNumber(amount);

  const data = useMemo(() => {
    const socialEmployee = progressive(gross, SOCIAL_INSURANCE.employee);
    const socialEmployer = progressive(gross, SOCIAL_INSURANCE.employer);
    const unemployment = gross * UNEMPLOYMENT_RATE;
    const medical = progressive(gross, MEDICAL_INSURANCE_BRACKETS);
    const employeeTotal = socialEmployee + unemployment + medical;
    const employerTotal = socialEmployer + unemployment + medical;
    return {
      socialEmployee,
      socialEmployer,
      unemployment,
      medical,
      employeeTotal,
      employerTotal,
      grandTotal: employeeTotal + employerTotal,
    };
  }, [gross]);

  return (
    <Layout
      inputs={
        <NumberField
          label={l.gross}
          value={amount}
          onChange={setAmount}
          suffix={labels.common.currency}
        />
      }
      result={
        <ResultPanel
          headlineLabel={l.headline}
          headline={formatMoney(data.grandTotal, locale)}
          rows={[
            {
              label: `${l.social} · ${l.employeeTotal}`,
              value: formatMoney(data.socialEmployee, locale),
            },
            {
              label: `${l.social} · ${l.employerTotal}`,
              value: formatMoney(data.socialEmployer, locale),
            },
            { label: l.unemployment, value: formatMoney(data.unemployment * 2, locale) },
            { label: l.medical, value: formatMoney(data.medical * 2, locale) },
            {
              label: l.employeeTotal,
              value: formatMoney(data.employeeTotal, locale),
              strong: true,
            },
            {
              label: l.employerTotal,
              value: formatMoney(data.employerTotal, locale),
              strong: true,
            },
            { label: l.grandTotal, value: formatMoney(data.grandTotal, locale), strong: true },
          ]}
        />
      }
    />
  );
}

function VacationCalculator({ labels, locale }: Props) {
  const l = labels.vacation;
  const [daily, setDaily] = useState("70");
  const [days, setDays] = useState("21");

  const dailyValue = toNumber(daily);
  const dayCount = Math.max(0, Math.round(toNumber(days)));
  const gross = dailyValue * dayCount;
  const monthlyEquivalent = dailyValue * 30;
  const deductionRatio = useMemo(() => {
    if (monthlyEquivalent <= 0) return 0;
    const data = breakdownFromGross(monthlyEquivalent);
    return 1 - data.net / data.gross;
  }, [monthlyEquivalent]);

  const deductions = gross * deductionRatio;

  return (
    <Layout
      inputs={
        <>
          <NumberField
            label={l.averageDaily}
            value={daily}
            onChange={setDaily}
            suffix={labels.common.currency}
            hint={l.averageDailyHint}
          />
          <NumberField
            label={l.days}
            value={days}
            onChange={setDays}
            step="1"
            suffix={labels.common.days}
          />
        </>
      }
      result={
        <ResultPanel
          headlineLabel={l.headline}
          headline={formatMoney(gross, locale)}
          rows={[
            { label: l.daily, value: formatMoney(dailyValue, locale) },
            { label: l.dayCount, value: formatNumber(dayCount, locale) },
            { label: l.gross, value: formatMoney(gross, locale), strong: true },
            { label: l.deductions, value: `−${formatMoney(deductions, locale)}` },
            { label: l.net, value: formatMoney(gross - deductions, locale), strong: true },
          ]}
        />
      }
    />
  );
}

function SickLeaveCalculator({ labels, locale }: Props) {
  const l = labels.sick;
  const [daily, setDaily] = useState("70");
  const [days, setDays] = useState("10");
  const [service, setService] = useState("under8");

  const dailyValue = toNumber(daily);
  const dayCount = Math.max(0, Math.round(toNumber(days)));
  const tier =
    SICK_LEAVE_TIERS.find((candidate) => candidate.labelKey === service) ?? SICK_LEAVE_TIERS[0];

  const dailyBenefit = dailyValue * tier.share;
  const employerDays = Math.min(dayCount, SICK_LEAVE_EMPLOYER_DAYS);
  const stateDays = Math.max(0, dayCount - SICK_LEAVE_EMPLOYER_DAYS);

  return (
    <Layout
      inputs={
        <>
          <NumberField
            label={l.averageDaily}
            value={daily}
            onChange={setDaily}
            suffix={labels.common.currency}
          />
          <NumberField
            label={l.days}
            value={days}
            onChange={setDays}
            step="1"
            suffix={labels.common.days}
          />
          <SelectField
            label={l.service}
            value={service}
            onChange={setService}
            options={[
              { value: "under8", label: l.serviceUnder8 },
              { value: "from8to12", label: l.serviceFrom8to12 },
              { value: "over12", label: l.serviceOver12 },
            ]}
          />
        </>
      }
      result={
        <ResultPanel
          headlineLabel={l.headline}
          headline={formatMoney(dailyBenefit * dayCount, locale)}
          rows={[
            { label: l.share, value: `${formatNumber(tier.share * 100, locale)}%` },
            { label: l.dailyBenefit, value: formatMoney(dailyBenefit, locale) },
            {
              label: l.employerPart,
              value: formatMoney(dailyBenefit * employerDays, locale),
            },
            { label: l.statePart, value: formatMoney(dailyBenefit * stateDays, locale) },
            {
              label: l.total,
              value: formatMoney(dailyBenefit * dayCount, locale),
              strong: true,
            },
          ]}
        />
      }
    />
  );
}

/** Cash tied up in overdue receivables is valued at a deliberately modest 2%/month. */
const OVERDUE_MONTHLY_BENEFIT = 0.02;

function RoiCalculator({ labels, locale }: Props) {
  const l = labels.roi;
  const [hours, setHours] = useState("60");
  const [hourlyCost, setHourlyCost] = useState("12");
  const [stockLoss, setStockLoss] = useState("800");
  const [overdue, setOverdue] = useState("30000");
  const [monthlyFee, setMonthlyFee] = useState("400");
  const [setupFee, setSetupFee] = useState("2500");

  const data = useMemo(() => {
    const savingHours = toNumber(hours) * toNumber(hourlyCost) * 0.6;
    const savingStock = toNumber(stockLoss) * 0.5;
    const savingCash = toNumber(overdue) * OVERDUE_MONTHLY_BENEFIT * 0.3;
    const monthlySaving = savingHours + savingStock + savingCash;
    const netMonthly = monthlySaving - toNumber(monthlyFee);
    const payback = netMonthly > 0 ? toNumber(setupFee) / netMonthly : null;
    return { savingHours, savingStock, savingCash, monthlySaving, netMonthly, payback };
  }, [hours, hourlyCost, stockLoss, overdue, monthlyFee, setupFee]);

  return (
    <Layout
      inputs={
        <>
          <NumberField label={l.hours} value={hours} onChange={setHours} hint={l.hoursHint} />
          <NumberField
            label={l.hourlyCost}
            value={hourlyCost}
            onChange={setHourlyCost}
            suffix={labels.common.currency}
          />
          <NumberField
            label={l.stockLoss}
            value={stockLoss}
            onChange={setStockLoss}
            suffix={labels.common.currency}
          />
          <NumberField
            label={l.overdue}
            value={overdue}
            onChange={setOverdue}
            suffix={labels.common.currency}
            hint={l.overdueHint}
          />
          <NumberField
            label={l.monthlyFee}
            value={monthlyFee}
            onChange={setMonthlyFee}
            suffix={labels.common.currency}
          />
          <NumberField
            label={l.setupFee}
            value={setupFee}
            onChange={setSetupFee}
            suffix={labels.common.currency}
          />
        </>
      }
      result={
        <ResultPanel
          headlineLabel={l.headline}
          headline={
            data.payback === null
              ? "—"
              : `${formatNumber(data.payback, locale, 1)} ${labels.common.months}`
          }
          rows={[
            { label: l.savingHours, value: formatMoney(data.savingHours, locale) },
            { label: l.savingStock, value: formatMoney(data.savingStock, locale) },
            { label: l.savingCash, value: formatMoney(data.savingCash, locale) },
            {
              label: l.monthlySaving,
              value: formatMoney(data.monthlySaving, locale),
              strong: true,
            },
            { label: l.netMonthly, value: formatMoney(data.netMonthly, locale), strong: true },
          ]}
          footnote={data.payback === null ? l.paybackNever : undefined}
        />
      }
    />
  );
}

function CreditCalculator({ labels, locale }: Props) {
  const l = labels.credit;
  const [amount, setAmount] = useState("50000");
  const [rate, setRate] = useState("16");
  const [term, setTerm] = useState("36");

  const data = useMemo(() => {
    const principal = toNumber(amount);
    const monthlyRate = toNumber(rate) / 100 / 12;
    const months = Math.max(1, Math.round(toNumber(term)));
    const monthly =
      monthlyRate === 0
        ? principal / months
        : (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
    const totalPaid = monthly * months;
    return {
      monthly,
      months,
      totalPaid,
      totalInterest: totalPaid - principal,
      firstInterest: principal * monthlyRate,
    };
  }, [amount, rate, term]);

  return (
    <Layout
      inputs={
        <>
          <NumberField
            label={l.amount}
            value={amount}
            onChange={setAmount}
            suffix={labels.common.currency}
          />
          <NumberField label={l.rate} value={rate} onChange={setRate} suffix="%" />
          <NumberField
            label={l.term}
            value={term}
            onChange={setTerm}
            step="1"
            suffix={labels.common.months}
          />
        </>
      }
      result={
        <ResultPanel
          headlineLabel={l.headline}
          headline={formatMoney(data.monthly, locale)}
          rows={[
            { label: l.monthly, value: formatMoney(data.monthly, locale), strong: true },
            { label: l.firstInterest, value: formatMoney(data.firstInterest, locale) },
            {
              label: l.totalInterest,
              value: formatMoney(data.totalInterest, locale),
              strong: true,
            },
            { label: l.totalPaid, value: formatMoney(data.totalPaid, locale) },
          ]}
        />
      }
    />
  );
}

const REGISTRY: Record<ToolSlug, (props: Props) => React.ReactElement> = {
  "edv-kalkulyatoru": VatCalculator,
  "emek-haqqi-kalkulyatoru": SalaryCalculator,
  "dsmf-kalkulyatoru": DsmfCalculator,
  "mezuniyyet-pulu-kalkulyatoru": VacationCalculator,
  "xestelik-vereqesi-kalkulyatoru": SickLeaveCalculator,
  "roi-kalkulyatoru": RoiCalculator,
  "kredit-kalkulyatoru": CreditCalculator,
};

export function Calculator({
  slug,
  labels,
  locale,
}: {
  slug: ToolSlug;
  labels: CalcLabels;
  locale: string;
}) {
  const Component = REGISTRY[slug];
  return <Component labels={labels} locale={locale} />;
}
