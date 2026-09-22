import { AppWindow, Chart, DataTable, Kpi, Pill, type ScreenKey } from "./AppWindow";

/**
 * Sample screens. Every figure is illustrative — the copy around them says so —
 * but the layouts match what each module actually does, so a visitor can
 * recognise their own work in them.
 */
export function ProductScreen({
  screen,
  className = "",
}: {
  screen: ScreenKey;
  className?: string;
}) {
  return SCREENS[screen](className);
}

const KPI_ROW = "grid grid-cols-2 items-stretch gap-2.5";

const SCREENS: Record<ScreenKey, (className: string) => React.ReactElement> = {
  icmal: (className) => (
    <AppWindow
      active="icmal"
      title="İcmal"
      period="1–30 sentyabr 2026"
      action="Hesabat"
      className={className}
    >
      <div className={KPI_ROW}>
        <Kpi label="Gəlir" value="84 250" unit="AZN" delta="+12,4% ötən aya" tone="up" />
        <Kpi label="Ümumi marja" value="26 180" unit="AZN" delta="+4,1%" tone="up" />
        <Kpi label="Debitor borcu" value="31 940" unit="AZN" delta="90+ gün: 4 120" tone="down" />
        <Kpi label="Kassa qalığı" value="18 600" unit="AZN" delta="bu gün" />
      </div>

      <div className="mt-3">
        <Chart
          title="Aylıq gəlir"
          unit="min AZN"
          labels={["Fev", "Mar", "Apr", "May", "İyn", "İyl", "Avq", "Sen"]}
          values={[46, 58, 51, 64, 59, 72, 68, 84]}
          ticks={[0, 50, 100]}
        />
      </div>

      <div className="mt-3">
        <DataTable
          head={["Son sənədlər", "Məbləğ", "Status"]}
          rows={[
            ["Qaimə № 1042 · Alfa Ticarət", "1 180,00", <Pill key="a" tone="ok">Göndərildi</Pill>],
            ["Qaimə № 1041 · Bərəkət MMC", "3 420,00", <Pill key="b" tone="ok">Göndərildi</Pill>],
            ["Ödəniş № 318 · Kaspi Tikinti", "2 000,00", <Pill key="c" tone="warn">Təsdiqdə</Pill>],
          ]}
        />
      </div>
    </AppWindow>
  ),

  crm: (className) => (
    <AppWindow
      active="crm"
      title="Satış boru xətti"
      period="Açıq sövdələşmələr — 16 ədəd"
      action="Yeni sövdələşmə"
      className={className}
    >
      <div className="grid grid-cols-3 gap-2.5">
        {[
          { stage: "Təklif", count: "8", sum: "42 500", deals: ["Alfa Ticarət", "Nur Aptek"] },
          {
            stage: "Razılaşdırma",
            count: "5",
            sum: "28 900",
            deals: ["Bərəkət MMC", "Kaspi Tikinti"],
          },
          { stage: "Müqavilə", count: "3", sum: "19 200", deals: ["Zəfər Logistika"] },
        ].map((column) => (
          <div key={column.stage} className="min-w-0 rounded-sm border border-rule">
            <div className="border-b border-rule bg-tint px-2.5 py-2">
              <div className="flex items-baseline justify-between gap-1">
                <span className="truncate text-[0.6875rem] font-medium text-ink">
                  {column.stage}
                </span>
                <span className="font-mono text-[0.625rem] text-ink-50">{column.count}</span>
              </div>
              <p className="mt-0.5 font-mono text-[0.75rem] text-ink-70">{column.sum}</p>
            </div>
            <ul className="space-y-1.5 p-2">
              {column.deals.map((deal) => (
                <li
                  key={deal}
                  className="truncate rounded-xs border border-rule px-2 py-1.5 text-[0.6875rem] text-ink-70"
                >
                  {deal}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-3">
        <DataTable
          head={["Bugünkü tapşırıqlar", "Vaxt", "Menecer"]}
          rows={[
            ["Alfa Ticarət — təklifi təkrar göndər", "11:00", <Pill key="a">R.M.</Pill>],
            ["Nur Aptek — qiymət razılaşdırması", "14:30", <Pill key="b">L.H.</Pill>],
            ["Kaspi Tikinti — müqavilə layihəsi", "gecikib", <Pill key="c" tone="bad">2 gün</Pill>],
          ]}
        />
      </div>
    </AppWindow>
  ),

  anbar: (className) => (
    <AppWindow
      active="anbar"
      title="Qalıqlar"
      period="Mərkəzi anbar — 1 284 mal mövqeyi"
      action="Qaimə yaz"
      className={className}
    >
      <div className={KPI_ROW}>
        <Kpi label="Anbar dəyəri" value="212 400" unit="AZN" />
        <Kpi label="Rezervdə" value="146" unit="mövqe" />
        <Kpi label="Minimumdan az" value="23" delta="sifariş lazımdır" tone="down" />
        <Kpi label="Dövriyyə" value="4,2" unit="dəfə" delta="illik" />
      </div>

      <div className="mt-3">
        <DataTable
          head={["Mal", "Qalıq", "Vəziyyət"]}
          rows={[
            ["Kabel NYM 3×2,5", "120 m", <Pill key="a" tone="ok">Kifayət</Pill>],
            ["Avtomat C16 1P", "14 əd", <Pill key="b" tone="warn">Az qalıb</Pill>],
            ["Kabel kanalı 40×25", "0 əd", <Pill key="c" tone="bad">Bitib</Pill>],
            ["Rozetka ağ 16A", "312 əd", <Pill key="d" tone="ok">Kifayət</Pill>],
            ["Lyustr klemi 4 mm", "58 əd", <Pill key="e" tone="ok">Kifayət</Pill>],
          ]}
        />
      </div>

      <p className="mt-3 rounded-sm bg-tint px-3 py-2 text-[0.6875rem] leading-relaxed text-ink-70">
        Qaimə № 1042 yazıldı — 12 ədəd qalıqdan silindi, rezerv bağlandı.
      </p>
    </AppWindow>
  ),

  muhasibat: (className) => (
    <AppWindow
      active="muhasibat"
      title="Elektron qaimələr"
      period="Sentyabr 2026 — 184 sənəd"
      action="Yeni qaimə"
      className={className}
    >
      <div className={KPI_ROW}>
        <Kpi label="Göndərilib" value="184" unit="sənəd" />
        <Kpi label="Qəbul edilib" value="171" delta="93%" tone="up" />
        <Kpi label="İmtina" value="3" delta="səbəb göstərilib" tone="down" />
        <Kpi label="Hesablanmış ƏDV" value="15 165" unit="AZN" />
      </div>

      <div className="mt-3">
        <DataTable
          head={["Sənəd", "Məbləğ", "Status"]}
          rows={[
            ["e-Qaimə № 1042 · Alfa Ticarət", "1 180,00", <Pill key="a" tone="ok">Qəbul</Pill>],
            ["e-Qaimə № 1041 · Bərəkət MMC", "3 420,00", <Pill key="b" tone="ok">Qəbul</Pill>],
            ["e-Qaimə № 1039 · Zəfər MMC", "870,00", <Pill key="c" tone="warn">Gözləyir</Pill>],
            ["e-Qaimə № 1036 · Nur Aptek", "2 140,00", <Pill key="d" tone="bad">İmtina</Pill>],
          ]}
        />
      </div>

      <div className="mt-3 rounded-sm border border-rule p-3">
        <p className="text-[0.6875rem] font-medium text-ink">Avtomatik yazılış — Qaimə № 1042</p>
        <dl className="mt-2 space-y-1 font-mono text-[0.6875rem] text-ink-70">
          {[
            ["Dt 211  Alıcılar", "1 180,00"],
            ["Kt 601  Satış", "1 000,00"],
            ["Kt 545  ƏDV", "180,00"],
          ].map(([account, amount]) => (
            <div key={account} className="flex items-baseline justify-between gap-3">
              <dt className="truncate">{account}</dt>
              <dd className="shrink-0 text-ink">{amount}</dd>
            </div>
          ))}
        </dl>
      </div>
    </AppWindow>
  ),

  maliyye: (className) => (
    <AppWindow
      active="maliyye"
      title="Ödəniş təqvimi"
      period="21–27 sentyabr 2026"
      action="Ödəniş sorğusu"
      className={className}
    >
      <div className={KPI_ROW}>
        <Kpi label="Kassa qalığı" value="18 600" unit="AZN" />
        <Kpi label="Daxilolma" value="24 300" unit="AZN" delta="6 sənəd" tone="up" />
        <Kpi label="Ödəniş" value="21 850" unit="AZN" delta="9 sənəd" tone="down" />
        <Kpi label="Həftə sonu" value="21 050" unit="AZN" />
      </div>

      <div className="mt-3">
        <Chart
          title="Həftəlik ödəniş axını"
          unit="min AZN"
          labels={["B.e", "Ç.a", "Ç", "C.a", "C", "Ş"]}
          values={[6, 3, 8, 4, 2, 1]}
          ticks={[0, 5, 10]}
        />
      </div>

      <div className="mt-3">
        <DataTable
          head={["Gözləyən ödənişlər", "Məbləğ", "Status"]}
          rows={[
            ["Bərəkət MMC — təchizat", "6 400,00", <Pill key="a" tone="warn">Təsdiqdə</Pill>],
            ["İcarə — sentyabr", "2 800,00", <Pill key="b" tone="ok">Planlı</Pill>],
            ["Zəfər Logistika — daşınma", "1 150,00", <Pill key="c" tone="bad">Gecikib</Pill>],
          ]}
        />
      </div>
    </AppWindow>
  ),

  hr: (className) => (
    <AppWindow
      active="hr"
      title="Tabel"
      period="Sentyabr 2026 — 48 işçi"
      action="Əmr yarat"
      className={className}
    >
      <div className={KPI_ROW}>
        <Kpi label="Bu gün işdə" value="44" unit="nəfər" />
        <Kpi label="Məzuniyyətdə" value="3" unit="nəfər" />
        <Kpi label="Xəstəlik" value="1" unit="nəfər" />
        <Kpi label="Əmək haqqı fondu" value="61 200" unit="AZN" />
      </div>

      <div className="mt-3 overflow-hidden rounded-sm border border-rule">
        <div className="grid grid-cols-[minmax(0,1fr)_repeat(7,1.4rem)] items-center gap-1 border-b border-rule bg-tint px-3 py-2 text-[0.625rem] font-medium text-ink-50">
          <span>İşçi</span>
          {["1", "2", "3", "4", "5", "6", "7"].map((day) => (
            <span key={day} className="text-center">
              {day}
            </span>
          ))}
        </div>
        {[
          { name: "R. Məmmədov", days: ["8", "8", "8", "8", "8", "—", "—"] },
          { name: "L. Həsənova", days: ["8", "8", "M", "M", "M", "—", "—"] },
          { name: "E. Quliyev", days: ["8", "10", "8", "8", "X", "—", "—"] },
          { name: "S. Əliyeva", days: ["8", "8", "8", "8", "8", "—", "—"] },
        ].map((person) => (
          <div
            key={person.name}
            className="grid grid-cols-[minmax(0,1fr)_repeat(7,1.4rem)] items-center gap-1 border-b border-rule px-3 py-2 text-[0.75rem] text-ink-70 last:border-b-0"
          >
            <span className="truncate">{person.name}</span>
            {person.days.map((day, index) => (
              <span
                key={index}
                className={`text-center font-mono text-[0.6875rem] ${
                  day === "M" ? "text-ok" : day === "X" ? "text-red-ink" : "text-ink-70"
                }`}
              >
                {day}
              </span>
            ))}
          </div>
        ))}
      </div>

      <p className="mt-3 rounded-sm bg-tint px-3 py-2 text-[0.6875rem] leading-relaxed text-ink-70">
        M — məzuniyyət, X — xəstəlik vərəqəsi. Tabel bağlananda hesablama hazır olur.
      </p>
    </AppWindow>
  ),

  hesabatlar: (className) => (
    <AppWindow
      active="hesabatlar"
      title="Mənfəətlilik"
      period="Mal qrupları — sentyabr 2026"
      action="Excel"
      className={className}
    >
      <Chart
        title="Ümumi marja"
        unit="min AZN"
        labels={["Fev", "Mar", "Apr", "May", "İyn", "İyl", "Avq", "Sen"]}
        values={[14, 17, 15, 20, 18, 23, 21, 26]}
        ticks={[0, 15, 30]}
      />

      <div className="mt-3">
        <DataTable
          head={["Mal qrupu", "Marja", "ABC"]}
          rows={[
            ["Kabel məhsulları", "31,4%", <Pill key="a" tone="ok">A</Pill>],
            ["Avtomatlar və qoruyucular", "27,8%", <Pill key="b" tone="ok">A</Pill>],
            ["İşıqlandırma", "19,2%", <Pill key="c">B</Pill>],
            ["Aksesuar", "8,6%", <Pill key="d" tone="warn">C</Pill>],
          ]}
        />
      </div>

      <div className="mt-3 grid grid-cols-2 items-stretch gap-2.5">
        <Kpi label="90+ gün durğun" value="42" unit="mal" tone="down" />
        <Kpi label="Ən gəlirli müştəri" value="Bərəkət" />
        <Kpi label="Plan icrası" value="104" unit="%" delta="+4%" tone="up" />
      </div>
    </AppWindow>
  ),
};
