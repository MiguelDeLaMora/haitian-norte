import { HOME_VARIANT, type LandingVariant } from "@/lib/landing-variants";

interface FinancingSectionProps {
  onContact: () => void;
  content?: LandingVariant["financing"];
}

export default function FinancingSection({
  onContact,
  content = HOME_VARIANT.financing,
}: FinancingSectionProps) {
  const stats = [
    {
      num: "24",
      unit: "MSI",
      desc: "Meses sin intereses",
      detail: content.statDetail,
    },
    {
      num: "15%",
      unit: "",
      desc: "Enganche mínimo",
      detail: "Comienza a producir con la menor inversión inicial posible",
    },
  ];

  return (
    <section
      id="financiamiento"
      className="relative py-16 sm:py-24 px-4 sm:px-8 overflow-hidden"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-orange mb-3">
              Financiamiento Directo
            </p>
            <h2
              className="font-extrabold text-white leading-[1.15] tracking-[-0.02em] mb-5"
              style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
            >
              {content.titleTop}
              <br />
              <span className="text-brand-orange">{content.titleAccent}</span>
            </h2>
            <p className="text-[14px] sm:text-[15px] text-white/70 leading-[1.75] mb-8 max-w-[480px]">
              Financiamiento 100% directo desde fábrica — sin bancos, sin
              intermediarios. Aprobamos tu crédito con un sencillo formulario.
            </p>
            <button
              onClick={onContact}
              className="bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-[14px] px-7 py-3.5 rounded cursor-pointer transition-all duration-150 hover:-translate-y-px"
            >
              Solicitar Financiamiento
            </button>
          </div>

          {/* Right: stats 3×1 mobile/tablet, 1×3 desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
            {stats.map((it, i) => (
              <div
                key={i}
                className="rounded p-5 sm:p-7"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.14)",
                }}
              >
                <div className="text-brand-orange font-extrabold leading-none mb-1">
                  <span className="text-[32px] sm:text-[40px]">{it.num}</span>
                  <span className="text-sm ml-0.5">{it.unit}</span>
                </div>
                <p className="text-[11px] sm:text-[12px] font-bold text-white uppercase tracking-[0.06em] mb-2">
                  {it.desc}
                </p>
                <p className="text-[10px] sm:text-[11px] text-white/55 leading-relaxed">{it.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
