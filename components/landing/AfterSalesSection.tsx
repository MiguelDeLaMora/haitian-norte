import { type AfterSalesContent } from "@/lib/landing-variants";

interface AfterSalesSectionProps {
  content: AfterSalesContent;
}

/** Resalta en naranja los fragmentos marcados con [corchetes] en el copy. */
function highlight(text: string) {
  return text.split(/\[(.+?)\]/g).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="font-semibold text-brand-blue">
        {part}
      </span>
    ) : (
      part
    )
  );
}

const PILLAR_ICONS = [
  // Instalación y puesta en marcha — llave / herramienta
  "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
  // Refacciones en existencia — caja / almacén
  "M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z M3.27 6.96L12 12.01l8.73-5.05 M12 22.08V12",
  // Servicio técnico y mantenimiento — soporte / auricular
  "M21 12a9 9 0 10-18 0 M21 12v4a2 2 0 01-2 2h-1a2 2 0 01-2-2v-2a2 2 0 012-2h3 M3 12v2a2 2 0 002 2h1a2 2 0 002-2v-2a2 2 0 00-2-2H3",
];

export default function AfterSalesSection({ content }: AfterSalesSectionProps) {
  return (
    <section id="postventa" className="bg-white py-14 sm:py-24 px-4 sm:px-8">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-orange mb-2.5">
            {content.eyebrow}
          </p>
          <h2
            className="font-extrabold text-neutral-900 tracking-[-0.02em] mb-4 leading-[1.15]"
            style={{ fontSize: "clamp(26px, 3vw, 40px)" }}
          >
            {content.heading}
          </h2>
          <p className="text-[14px] sm:text-[15px] text-neutral-500 max-w-[680px] mx-auto leading-[1.75]">
            {content.subhead}
          </p>
        </div>

        {/* Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {content.pillars.map((p, i) => (
            <div
              key={i}
              className="bg-neutral-50 rounded p-6 sm:p-7 flex flex-col"
              style={{ border: "1px solid #E5E7EB", borderTop: "3px solid #FF6C00" }}
            >
              <div
                className="w-11 h-11 rounded flex items-center justify-center mb-4"
                style={{ background: "rgba(255,108,0,0.12)" }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF6C00"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={PILLAR_ICONS[i % PILLAR_ICONS.length]} />
                </svg>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[11px] font-extrabold text-brand-orange tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[16px] sm:text-[17px] font-bold text-neutral-900 leading-snug">
                  {p.title}
                </h3>
              </div>

              <p className="text-[13px] text-neutral-600 leading-[1.7]">
                {highlight(p.desc)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
