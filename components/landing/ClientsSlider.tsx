import Image from "next/image";
import { CLIENT_LOGOS } from "@/lib/landing-data";

export default function ClientsSlider() {
  const doubled = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section id="clientes" className="bg-neutral-50 py-[72px]">
      <div className="max-w-[1280px] mx-auto px-8 mb-8 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-neutral-400 mb-2">
          Nuestros Clientes
        </p>
        <h2 className="text-[28px] font-bold text-neutral-900 tracking-[-0.01em]">
          Empresas que Confían en Haitian Norte
        </h2>
      </div>

      <div className="overflow-hidden relative">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none" />

        <div className="slider-track-reverse">
          {doubled.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center flex-shrink-0 mx-3 rounded bg-white px-6"
              style={{
                minWidth: 180,
                height: 80,
                border: "1.5px solid #E5E7EB",
              }}
            >
              <Image
                src={client.src}
                alt={client.name}
                width={0}
                height={0}
                sizes="160px"
                className="object-contain"
                style={{ height: 40, width: "auto", maxWidth: 140 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
