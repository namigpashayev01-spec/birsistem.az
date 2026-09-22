import { AppWindow, Bars, Kpi, Pill, Row, type ScreenKey } from "./AppWindow";

/**
 * Sample screens. Every figure here is illustrative — the copy around them says
 * so — but the layouts match what each module actually does, so a visitor can
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

const SCREENS: Record<ScreenKey, (className: string) => React.ReactElement> = {
  icmal: (className) => (
    <AppWindow active="icmal" title="İcmal — sentyabr" action="Hesabat" className={className}>
      <div className="grid grid-cols-2 items-stretch gap-2 lg:grid-cols-4">
        <Kpi label="Gəlir" value="84 250" delta="+12,4%" tone="up" />
        <Kpi label="Marja" value="26 180" delta="+4,1%" tone="up" />
        <Kpi label="Debitor borcu" value="31 940" delta="90 gün: 4 120" tone="down" />
        <Kpi label="Kassa qalığı" value="18 600" delta="bu həftə" />
      </div>

      <div className="mt-3 rounded-sm border border-rule p-3">
        <div className="flex items-baseline justify-between">
          <span className="text-[0.6875rem] text-ink-50">Gündəlik satış</span>
          <span className="font-mono text-[0.6875rem] text-ink-70">son 10 gün</span>
        </div>
        <Bars values={[42, 58, 47, 66, 71, 52, 80, 63, 74, 92]} className="mt-2" />
      </div>

      <div className="mt-3">
        <Row head cells={["Son sənədlər", "Məbləğ", "Status"]} />
        <Row cells={["Qaimə № 1042 · Alfa Ticarət", "1 180,00", <Pill key="a" tone="ok">Göndərildi</Pill>]} />
        <Row cells={["Qaimə № 1041 · Bərəkət MMC", "3 420,00", <Pill key="b" tone="ok">Göndərildi</Pill>]} />
        <Row cells={["Ödəniş tapşırığı № 318", "2 000,00", <Pill key="c" tone="warn">Təsdiq gözləyir</Pill>]} />
      </div>
    </AppWindow>
  ),

  crm: (className) => (
    <AppWindow active="crm" title="Satış boru xətti" action="Yeni sövdələşmə" className={className}>
      <div className="grid grid-cols-3 gap-2">
        {[
          { stage: "Təklif", count: "8", sum: "42 500", deals: ["Alfa Ticarət", "Nur Aptek"] },
          { stage: "Razılaşdırma", count: "5", sum: "28 900", deals: ["Bərəkət MMC", "Kaspi Tikinti"] },
          { stage: "Müqavilə", count: "3", sum: "19 200", deals: ["Zəfər Logistika"] },
        ].map((column) => (
          <div key={column.stage} className="min-w-0 rounded-sm border border-rule p-2.5">
            <div className="flex items-baseline justify-between gap-1">
              <span className="truncate text-[0.6875rem] font-medium text-ink">{column.stage}</span>
              <span className="font-mono text-[0.625rem] text-ink-50">{column.count}</span>
            </div>
            <p className="mt-0.5 font-mono text-[0.6875rem] text-ink-70">{column.sum}</p>
            <ul className="mt-2 space-y-1.5">
              {column.deals.map((deal) => (
                <li
                  key={deal}
                  className="truncate rounded-xs border border-rule bg-tint px-2 py-1 text-[0.6875rem] text-ink-70"
                >
                  {deal}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-3">
        <Row head cells={["Bu günə tapşırıqlar", "Vaxt", "Menecer"]} />
        <Row cells={["Alfa Ticarət — təklifi təkrar göndər", "11:00", <Pill key="a">R.M.</Pill>]} />
        <Row cells={["Nur Aptek — qiymət razılaşdırması", "14:30", <Pill key="b">L.H.</Pill>]} />
        <Row cells={["Kaspi Tikinti — müqavilə layihəsi", "gecikib", <Pill key="c" tone="bad">2 gün</Pill>]} />
      </div>
    </AppWindow>
  ),

  anbar: (className) => (
    <AppWindow active="anbar" title="Qalıqlar — Mərkəzi anbar" action="Qaimə yaz" className={className}>
      <div className="grid grid-cols-2 items-stretch gap-2 lg:grid-cols-4">
        <Kpi label="Mal mövqeyi" value="1 284" />
        <Kpi label="Rezervdə" value="146" />
        <Kpi label="Minimumdan az" value="23" delta="sifariş lazımdır" tone="down" />
        <Kpi label="Anbar dəyəri" value="212 400" />
      </div>

      <div className="mt-3">
        <Row head cells={["Mal", "Qalıq", "Vəziyyət"]} />
        <Row cells={["Kabel NYM 3×2,5", "120 m", <Pill key="a" tone="ok">Kifayət</Pill>]} />
        <Row cells={["Avtomat C16 1P", "14 əd", <Pill key="b" tone="warn">Az qalıb</Pill>]} />
        <Row cells={["Kabel kanalı 40×25", "0 əd", <Pill key="c" tone="bad">Bitib</Pill>]} />
        <Row cells={["Rozetka ağ 16A", "312 əd", <Pill key="d" tone="ok">Kifayət</Pill>]} />
        <Row cells={["Lyustr klemi 4 mm", "58 əd", <Pill key="e" tone="ok">Kifayət</Pill>]} />
      </div>

      <p className="mt-3 rounded-sm bg-red-soft px-3 py-2 text-[0.6875rem] text-ink-70">
        Satılan 12 ədəd qaimə yazılan anda qalıqdan silindi.
      </p>
    </AppWindow>
  ),

  muhasibat: (className) => (
    <AppWindow active="muhasibat" title="Elektron qaimələr" action="Yeni qaimə" className={className}>
      <div className="grid grid-cols-2 items-stretch gap-2 lg:grid-cols-4">
        <Kpi label="Bu ay göndərilib" value="184" />
        <Kpi label="Qəbul edilib" value="171" delta="93%" tone="up" />
        <Kpi label="İmtina" value="3" tone="down" />
        <Kpi label="Hesablanmış ƏDV" value="15 165" />
      </div>

      <div className="mt-3">
        <Row head cells={["Sənəd", "Məbləğ", "Status"]} />
        <Row cells={["e-Qaimə № 1042 · Alfa Ticarət", "1 180,00", <Pill key="a" tone="ok">Qəbul</Pill>]} />
        <Row cells={["e-Qaimə № 1041 · Bərəkət MMC", "3 420,00", <Pill key="b" tone="ok">Qəbul</Pill>]} />
        <Row cells={["e-Qaimə № 1039 · Zəfər MMC", "870,00", <Pill key="c" tone="warn">Gözləyir</Pill>]} />
        <Row cells={["e-Qaimə № 1036 · Nur Aptek", "2 140,00", <Pill key="d" tone="bad">İmtina</Pill>]} />
      </div>

      <div className="mt-3 rounded-sm border border-rule p-3">
        <p className="text-[0.6875rem] text-ink-50">Avtomatik yazılış — Qaimə № 1042</p>
        <div className="mt-1.5 space-y-1 font-mono text-[0.6875rem] text-ink-70">
          <p>Dt 211 Alıcılar ............ 1 180,00</p>
          <p>Kt 601 Satış ................. 1 000,00</p>
          <p>Kt 545 ƏDV ..................... 180,00</p>
        </div>
      </div>
    </AppWindow>
  ),

  maliyye: (className) => (
    <AppWindow active="maliyye" title="Ödəniş təqvimi" action="Ödəniş sorğusu" className={className}>
      <div className="grid grid-cols-2 items-stretch gap-2 lg:grid-cols-4">
        <Kpi label="Kassa qalığı" value="18 600" />
        <Kpi label="Daxilolma" value="24 300" tone="up" delta="+6 sənəd" />
        <Kpi label="Ödəniş" value="21 850" tone="down" />
        <Kpi label="Həftə sonu" value="21 050" />
      </div>

      <div className="mt-3 grid grid-cols-5 gap-1.5">
        {[
          { day: "B.e", inflow: 60, outflow: 25 },
          { day: "Ç.a", inflow: 30, outflow: 70 },
          { day: "Ç", inflow: 80, outflow: 35 },
          { day: "C.a", inflow: 45, outflow: 40 },
          { day: "C", inflow: 55, outflow: 95 },
        ].map((day) => (
          <div key={day.day} className="min-w-0 rounded-sm border border-rule px-2 py-2">
            <p className="text-center text-[0.625rem] text-ink-50">{day.day}</p>
            <div aria-hidden="true" className="mt-1.5 flex h-10 items-end justify-center gap-1">
              <span className="block w-1.5 rounded-xs bg-ok" style={{ height: `${day.inflow}%` }} />
              <span className="block w-1.5 rounded-xs bg-red" style={{ height: `${day.outflow}%` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3">
        <Row head cells={["Gözləyən ödənişlər", "Məbləğ", "Status"]} />
        <Row cells={["Bərəkət MMC — təchizat", "6 400,00", <Pill key="a" tone="warn">Təsdiq</Pill>]} />
        <Row cells={["İcarə — sentyabr", "2 800,00", <Pill key="b" tone="ok">Planlı</Pill>]} />
        <Row cells={["Zəfər Logistika — daşınma", "1 150,00", <Pill key="c" tone="bad">Gecikib</Pill>]} />
      </div>
    </AppWindow>
  ),

  hr: (className) => (
    <AppWindow active="hr" title="Tabel — sentyabr" action="Əmr yarat" className={className}>
      <div className="grid grid-cols-2 items-stretch gap-2 lg:grid-cols-4">
        <Kpi label="İşçi sayı" value="48" />
        <Kpi label="Bu gün işdə" value="44" />
        <Kpi label="Məzuniyyətdə" value="3" />
        <Kpi label="Əmək haqqı fondu" value="61 200" />
      </div>

      <div className="mt-3 overflow-hidden rounded-sm border border-rule">
        <div className="grid grid-cols-[minmax(0,1fr)_repeat(7,1.25rem)] items-center gap-1 border-b border-rule px-2 py-1.5 text-[0.625rem] text-ink-50">
          <span>İşçi</span>
          {["1", "2", "3", "4", "5", "6", "7"].map((d) => (
            <span key={d} className="text-center">{d}</span>
          ))}
        </div>
        {[
          { name: "R. Məmmədov", days: ["8", "8", "8", "8", "8", "—", "—"] },
          { name: "L. Həsənova", days: ["8", "8", "M", "M", "M", "—", "—"] },
          { name: "E. Quliyev", days: ["8", "10", "8", "8", "X", "—", "—"] },
        ].map((person) => (
          <div
            key={person.name}
            className="grid grid-cols-[minmax(0,1fr)_repeat(7,1.25rem)] items-center gap-1 border-b border-rule px-2 py-1.5 text-[0.6875rem] text-ink-70 last:border-b-0"
          >
            <span className="truncate">{person.name}</span>
            {person.days.map((day, index) => (
              <span
                key={index}
                className={`text-center font-mono text-[0.625rem] ${
                  day === "M" ? "text-ok" : day === "X" ? "text-red-ink" : "text-ink-70"
                }`}
              >
                {day}
              </span>
            ))}
          </div>
        ))}
      </div>

      <p className="mt-3 rounded-sm bg-red-soft px-3 py-2 text-[0.6875rem] text-ink-70">
        M — məzuniyyət, X — xəstəlik vərəqəsi. Tabel bağlananda hesablama hazır olur.
      </p>
    </AppWindow>
  ),

  hesabatlar: (className) => (
    <AppWindow active="hesabatlar" title="Mənfəətlilik — mal qrupları" action="Excel" className={className}>
      <div className="rounded-sm border border-rule p-3">
        <div className="flex items-baseline justify-between">
          <span className="text-[0.6875rem] text-ink-50">Aylıq ümumi marja</span>
          <span className="font-mono text-[0.6875rem] text-ink-70">son 8 ay</span>
        </div>
        <Bars values={[38, 44, 41, 55, 49, 62, 58, 71]} className="mt-2" />
      </div>

      <div className="mt-3">
        <Row head cells={["Mal qrupu", "Marja", "ABC"]} />
        <Row cells={["Kabel məhsulları", "31,4%", <Pill key="a" tone="ok">A</Pill>]} />
        <Row cells={["Avtomatlar və qoruyucular", "27,8%", <Pill key="b" tone="ok">A</Pill>]} />
        <Row cells={["İşıqlandırma", "19,2%", <Pill key="c">B</Pill>]} />
        <Row cells={["Aksesuar", "8,6%", <Pill key="d" tone="warn">C</Pill>]} />
      </div>

      <div className="mt-3 grid grid-cols-2 items-stretch gap-2 lg:grid-cols-3">
        <Kpi label="90+ gün durğun" value="42 mal" tone="down" />
        <Kpi label="Ən gəlirli müştəri" value="Bərəkət MMC" />
        <Kpi label="Plan icrası" value="104%" delta="+4%" tone="up" />
      </div>
    </AppWindow>
  ),
};
