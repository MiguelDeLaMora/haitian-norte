import Image from "next/image";
import LeadForm from "@/components/ui/LeadForm";

const BENEFIT_PILLS = [
  "24 MSI",
  "15% de Enganche",
  "3 Meses de Gracia",
  "Aprobación en 48h",
  "Financiamiento Directo",
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-stretch overflow-hidden"
      style={{ background: "#203285" }}
    >
      {/* Grid overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      {/* Diagonal accent */}
      <div
        className="absolute bottom-0 right-0 h-full pointer-events-none"
        style={{
          width: "55%",
          background: "rgba(255,108,0,0.08)",
          clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 w-full max-w-[1280px] mx-auto px-0 py-20 grid gap-16 items-center"
        style={{ gridTemplateColumns: "1fr 420px" }}
      >
        {/* Left: copy */}
        <div>
          

          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-orange mb-4">
            Maquinaria CNC Industrial
          </p>

          <h1
            className="font-extrabold text-white leading-[1.1] tracking-[-0.02em] mb-5"
            style={{ fontSize: "clamp(36px, 4.5vw, 58px)" }}
          >
            Maquinaria CNC
            <br />
            <span className="text-brand-orange">con Financiamiento</span>
            <br />
            Directo
          </h1>

          <p className="text-[17px] text-white leading-[1.7] max-w-[500px] mb-10">
            Centros de maquinado y tornos CNC fabricados en México, respaldados
            por la tecnología global del Grupo Haitian. Ingeniería de precisión
            al alcance de su empresa.
          </p>

          {/* Benefit pills */}
          <div className="flex flex-wrap gap-2.5">
            {BENEFIT_PILLS.map((b) => (
              <div
                key={b}
                className="flex items-center gap-2 px-3.5 py-2 rounded"
                style={{
                  background: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.18)",
                }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
                <span className="text-[12px] font-semibold text-white whitespace-nowrap">
                  {b}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div className="bg-white rounded-lg p-8 shadow-[0_24px_64px_rgba(0,0,0,0.3)]">
          <div className="mb-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-orange mb-1.5">
              Solicitud Sin Costo
            </p>
            <h2 className="text-[20px] font-bold text-neutral-900 leading-snug">
              Cotice su Maquinaria CNC
            </h2>
            <p className="text-[12px] text-neutral-500 mt-1">
              Un asesor lo contactará en menos de 48 horas.
            </p>
          </div>
          <LeadForm compact />
        </div>
      </div>
    </section>
  );
}
