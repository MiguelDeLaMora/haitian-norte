import Image from "next/image";

const SECTORS = ["Automotriz", "Aeroespacial", "Moldes y Troqueles"];

export default function LandingFooter() {
  return (
    <footer className="bg-brand-blue-navy px-8 pt-12 pb-8">
      <div className="max-w-[1280px] mx-auto">
        <div
          className="flex justify-between items-center pb-8"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
        >
          <Image
            src="/logo-white.webp"
            alt="Haitian Norte"
            width={0}
            height={0}
            sizes="160px"
            className="object-contain"
            style={{ height: 40, width: "auto" }}
          />
          <div className="text-right text-[12px] text-white/40">
            <p>Guadalajara, Jalisco, México</p>
            <p className="mt-1">
              Parte del Haitian Group — Tecnología global, fabricación local
            </p>
          </div>
        </div>

        <div className="pt-6 flex justify-between items-center">
          <p className="text-[11px] text-white/30">
            © 2026 Haitian Norte. Todos los derechos reservados.
          </p>
          <div className="flex gap-2">
            {SECTORS.map((s) => (
              <span
                key={s}
                className="text-[10px] font-semibold uppercase tracking-[0.08em] text-white/35 px-2 py-0.5 rounded-[2px]"
                style={{ border: "1px solid rgba(255,255,255,0.12)" }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
