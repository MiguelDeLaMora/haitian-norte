import Image from "next/image";

const IMAGES = [
  {
    src: "/image-1-haitian.webp",
    alt: "Haitian Norte — Maquinaria CNC en operación",
    caption: "Precisión en cada ciclo",
  },
  {
    src: "/image-2-haitian.webp",
    alt: "Haitian Norte — Centro de maquinado",
    caption: "Tecnología de clase mundial",
  },
  {
    src: "/image-3-haitian.webp",
    alt: "Pieza maquinada — tiempo de actividad continuo",
    caption: "Continuidad operativa garantizada",
  },
];

export default function GallerySection() {
  return (
    <section className="bg-neutral-900 py-20 px-8">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-orange mb-2">
              En Operación
            </p>
            <h2
              className="font-extrabold text-white tracking-[-0.02em] leading-tight"
              style={{ fontSize: "clamp(24px, 2.5vw, 36px)" }}
            >
              Maquinaria que produce,
              <br />
              <span className="text-brand-orange">día tras día</span>
            </h2>
          </div>
          <p className="hidden md:block text-[13px] text-white/45 max-w-[320px] text-right leading-relaxed">
            Equipos instalados y en operación en plantas de manufactura a lo
            largo de México.
          </p>
        </div>

        {/* Grid: large left + 2 stacked right */}
        <div className="grid gap-3" style={{ gridTemplateColumns: "1fr 1fr", gridTemplateRows: "auto" }}>
          {/* Large image */}
          <div className="relative overflow-hidden rounded-lg group" style={{ aspectRatio: "4/3" }}>
            <Image
              src={IMAGES[0].src}
              alt={IMAGES[0].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="text-[11px] font-semibold text-white/80 uppercase tracking-[0.1em]">
                {IMAGES[0].caption}
              </span>
            </div>
          </div>

          {/* Right column: 2 stacked */}
          <div className="flex flex-col gap-3">
            {IMAGES.slice(1).map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-lg group flex-1"
                style={{ minHeight: 0 }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="text-[11px] font-semibold text-white/80 uppercase tracking-[0.1em]">
                    {img.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
