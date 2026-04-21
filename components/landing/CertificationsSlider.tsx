import Image from "next/image";
import { CERT_LOGOS } from "@/lib/landing-data";

export default function CertificationsSlider() {
  const doubled = [...CERT_LOGOS, ...CERT_LOGOS, ...CERT_LOGOS];

  return (
    <section
      id="certificaciones"
      className="bg-white py-[72px] border-t border-b border-neutral-100"
    >
      <div className="max-w-[1280px] mx-auto px-8 mb-8 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-neutral-400">
          Certificaciones Internacionales
        </p>
      </div>

      <div className="overflow-hidden relative">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="slider-track">
          {doubled.map((cert, i) => (
            <div
              key={i}
              className="flex items-center justify-center flex-shrink-0 mx-4 rounded bg-neutral-50"
              style={{
                minWidth: 240,
                height: 100,
                border: "1.5px solid #E5E7EB",
              }}
            >
              <Image
                src={cert.src}
                alt={cert.name}
                width={0}
                height={0}
                sizes="220px"
                className="object-contain"
                style={{ height: 60, width: "auto", maxWidth: 200 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
