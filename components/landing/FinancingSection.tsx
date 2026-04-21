interface FinancingSectionProps {
  onContact: () => void;
}

const STATS = [
  {
    num: "24",
    unit: "MSI",
    desc: "Meses sin intereses",
    detail: "El plazo más largo del mercado para maquinaria CNC industrial",
  },
  {
    num: "15%",
    unit: "",
    desc: "Enganche mínimo",
    detail: "Comienza a producir con la menor inversión inicial posible",
  },
  {
    num: "48",
    unit: "hrs",
    desc: "Aprobación garantizada",
    detail: "Proceso ágil sin burocracia — decisión en menos de 2 días hábiles",
  },
  {
    num: "3",
    unit: "meses",
    desc: "Período de gracia",
    detail: "Produce y genera retorno antes de iniciar tus pagos",
  },
];

export default function FinancingSection({ onContact }: FinancingSectionProps) {
  return (
    <section
      id="financiamiento"
      className="relative py-24 px-8 overflow-hidden"
      style={{ background: "#203285" }}
    >
      {/* Grid overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="fin-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#fin-grid)" />
      </svg>

      <div className="relative z-10 max-w-[1280px] mx-auto">
        <div className="grid gap-16 items-center" style={{ gridTemplateColumns: "1fr 1fr" }}>
          {/* Left: copy */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-orange mb-3">
              Financiamiento Directo
            </p>
            <h2
              className="font-extrabold text-white leading-[1.15] tracking-[-0.02em] mb-5"
              style={{ fontSize: "clamp(28px, 3vw, 42px)" }}
            >
              Tu maquinaria CNC
              <br />
              <span className="text-brand-orange">al alcance de tu empresa</span>
            </h2>
            <p className="text-[15px] text-white/70 leading-[1.75] mb-8 max-w-[480px]">
              Financiamiento 100% directo con Haitian Norte — sin bancos, sin
              intermediarios. Aprobamos tu crédito en 48 horas y te damos hasta
              3 meses de gracia para que generes retorno antes de iniciar tus pagos.
            </p>
            <button
              onClick={onContact}
              className="bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-[14px] px-7 py-3.5 rounded cursor-pointer transition-all duration-150 hover:-translate-y-px"
            >
              Solicitar Financiamiento
            </button>
          </div>

          {/* Right: stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((it, i) => (
              <div
                key={i}
                className="rounded p-7"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.14)",
                }}
              >
                <div className="text-brand-orange font-extrabold leading-none mb-1">
                  <span className="text-[40px]">{it.num}</span>
                  <span className="text-base ml-0.5">{it.unit}</span>
                </div>
                <p className="text-[12px] font-bold text-white uppercase tracking-[0.06em] mb-2">
                  {it.desc}
                </p>
                <p className="text-[11px] text-white/55 leading-relaxed">{it.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
