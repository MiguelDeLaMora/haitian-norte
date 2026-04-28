import Image from "next/image";
import LeadForm from "@/components/ui/LeadForm";

const BENEFIT_PILLS = [
  "24 MSI",
  "15% de Enganche",
  "3 Meses de Gracia",
  "Financiamiento Directo",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-stretch overflow-hidden px-4 sm:px-8">
      {/* Background photo */}
      <Image
        src="/Hero-image-haitian.webp"
        alt=""
        fill
        className="object-cover object-center"
        priority
      />

      {/* Mobile overlay — uniform */}
      <div
        className="absolute inset-0 lg:hidden pointer-events-none"
        style={{ background: "rgba(32,50,133,0.87)" }}
      />
      {/* Desktop overlay — gradient left→right */}
      <div
        className="absolute inset-0 hidden lg:block pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(32,50,133,0.88) 0%, rgba(32,50,133,0.72) 40%, rgba(32,50,133,0.40) 100%)",
        }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(32,50,133,0.5), transparent)" }}
      />

      {/* Grid overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      {/* Diagonal accent — desktop only */}
      <div
        className="absolute bottom-0 right-0 h-full pointer-events-none hidden lg:block"
        style={{
          width: "55%",
          background: "rgba(255,108,0,0.07)",
          clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto  pt-28 pb-12 lg:py-20 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 lg:gap-16 items-center">
        {/* Left: copy */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-orange mb-3 sm:mb-4">
            Maquinaria CNC Industrial
          </p>

          <h1
            className="font-extrabold text-white leading-[1.1] tracking-[-0.02em] mb-4 sm:mb-5"
            style={{ fontSize: "clamp(32px, 5vw, 58px)" }}
          >
            Maquinaria CNC
            <br />
            <span className="text-brand-orange">con Financiamiento</span>
            <br />
            Directo
          </h1>

          <p className="text-[15px] sm:text-[17px] text-white/85 leading-[1.7] max-w-[500px] mb-8 sm:mb-10">
            Centros de maquinado y tornos CNC fabricados en México, respaldados
            por la tecnología global del Grupo Haitian. Ingeniería de precisión
            al alcance de su empresa.
          </p>

          {/* Benefit pills */}
          <div className="flex flex-wrap gap-2">
            {BENEFIT_PILLS.map((b) => (
              <div
                key={b}
                className="flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded"
                style={{
                  background: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.18)",
                }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
                <span className="text-[11px] sm:text-[12px] font-semibold text-white whitespace-nowrap">
                  {b}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div className="bg-white rounded-lg p-6 sm:p-8 shadow-[0_24px_64px_rgba(0,0,0,0.4)]">
          <div className="mb-5 sm:mb-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-orange mb-1.5">
              Solicitud Sin Costo
            </p>
            <h2 className="text-[18px] sm:text-[20px] font-bold text-neutral-900 leading-snug">
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
