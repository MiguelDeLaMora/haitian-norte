"use client";

import { useState, useEffect, useCallback } from "react";
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

const INTERVAL = 2500;

export default function GallerySection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = useCallback(() =>
    setCurrent((i) => (i - 1 + IMAGES.length) % IMAGES.length), []);

  const next = useCallback(() =>
    setCurrent((i) => (i + 1) % IMAGES.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section className="bg-neutral-900 py-14 sm:py-20 px-4 sm:px-8">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-10 gap-4">
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
          <p className="hidden md:block text-[13px] text-white/45 max-w-[320px] sm:text-right leading-relaxed">
            Equipos instalados y en operación en plantas de manufactura a lo
            largo de México.
          </p>
        </div>

        {/* Slider */}
        <div
          className="relative overflow-hidden rounded-lg"
          style={{ aspectRatio: "16/7" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Slides */}
          {IMAGES.map((img, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1280px"
                priority={i === 0}
              />
              {/* Bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-14 sm:bottom-12 left-6 sm:left-8">
                <span className="text-[11px] sm:text-[12px] font-semibold text-white/80 uppercase tracking-[0.12em]">
                  {img.caption}
                </span>
              </div>
            </div>
          ))}

          {/* Prev / Next buttons */}
          <button
            onClick={prev}
            aria-label="Anterior"
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-150 cursor-pointer"
            style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(6px)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.28)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            onClick={next}
            aria-label="Siguiente"
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-150 cursor-pointer"
            style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(6px)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.28)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-2">
            {IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Ir a imagen ${i + 1}`}
                className="transition-all duration-300 rounded-full cursor-pointer"
                style={{
                  width: i === current ? 24 : 8,
                  height: 8,
                  background: i === current ? "#FF6C00" : "rgba(255,255,255,0.4)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
