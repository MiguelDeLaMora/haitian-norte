"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface NavProps {
  onContact: () => void;
}

const NAV_LINKS = ["Productos", "Financiamiento", "Certificaciones", "Clientes"];

export default function Nav({ onContact }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-[250ms]"
      style={{
        background: scrolled ? "rgba(32,50,133,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.1)" : "none",
        padding: scrolled ? "14px 32px" : "20px 32px",
      }}
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        <Image
          src="/logo-white.webp"
          alt="Haitian Norte"
          width={0}
          height={0}
          sizes="200px"
          className="object-contain transition-all duration-[250ms]"
          style={{ height: scrolled ? 36 : 44, width: "auto" }}
          priority
        />

        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-7">
            {NAV_LINKS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[12px] font-semibold text-white/82 no-underline tracking-[0.03em] hover:text-white transition-colors duration-150"
              >
                {item}
              </a>
            ))}
          </div>

          <button
            onClick={onContact}
            className="bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-[12px] px-5 py-2.5 rounded cursor-pointer transition-all duration-150 hover:-translate-y-px"
          >
            Cotizar Ahora
          </button>
        </div>
      </div>
    </nav>
  );
}
