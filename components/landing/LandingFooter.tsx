import Image from "next/image";
import Link from "next/link";

const SECTORS = ["Automotriz", "Aeroespacial", "Moldes y Troqueles"];

interface LandingFooterProps {
  /** Footer reducido a la línea de distribuidor (landings dedicadas de campaña). */
  minimal?: boolean;
}

export default function LandingFooter({ minimal = false }: LandingFooterProps) {
  if (minimal) {
    return (
      <footer className="bg-brand-blue-navy px-4 sm:px-8 py-6">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[10px] text-white/15 text-center leading-relaxed">
            Distribuidor Autorizado Haitian — operado por MTE Global Solutions
          </p>
          {/* Requerido por las políticas de Google Ads y Meta para tráfico pagado. */}
          <p className="text-[10px] text-center mt-1.5">
            <Link href="/privacidad" className="text-white/25 hover:text-white/50 transition-colors">
              Aviso de privacidad
            </Link>
          </p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-brand-blue-navy px-4 sm:px-8 pt-10 sm:pt-12 pb-8">
      <div className="max-w-[1280px] mx-auto">
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 sm:pb-8"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
        >
          <Image
            src="/logo-white.webp"
            alt="Haitian Norte"
            width={0}
            height={0}
            sizes="160px"
            className="object-contain"
            style={{ height: 70, width: "auto" }}
          />
          <div className="text-[12px] text-white/40 sm:text-right">
            <p>Monterrey, Nuevo León, México</p>
            <p className="mt-1">
              Tecnología global, fabricación local
            </p>
          </div>
        </div>

        <div className="pt-5 sm:pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-[11px] text-white/30">
            © 2026 Haitian Norte. Todos los derechos reservados.{" "}
            <Link href="/privacidad" className="text-white/45 hover:text-white/70 transition-colors underline">
              Aviso de privacidad
            </Link>
          </p>
          <div className="flex flex-wrap gap-2">
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
