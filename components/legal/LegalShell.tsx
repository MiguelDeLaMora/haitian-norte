"use client";

import { useState } from "react";
import Nav from "@/components/landing/Nav";
import LandingFooter from "@/components/landing/LandingFooter";
import ContactModal from "@/components/ui/ContactModal";

interface LegalShellProps {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}

/**
 * Encabezado + banda de marca para las páginas legales, para que sigan leyéndose
 * como parte del sitio. La banda azul además da fondo al Nav, que es
 * transparente hasta que se hace scroll.
 */
export default function LegalShell({ eyebrow, title, children }: LegalShellProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Nav onContact={() => setModalOpen(true)} minimal />

      <main>
        <section
          className="bg-brand-blue px-4 sm:px-8"
          style={{ paddingTop: "clamp(7rem, 12vw, 9rem)", paddingBottom: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          <div className="max-w-[820px] mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-orange mb-3">
              {eyebrow}
            </p>
            <h1
              className="font-extrabold text-white tracking-[-0.02em] leading-[1.15] m-0"
              style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
            >
              {title}
            </h1>
          </div>
        </section>

        <div className="legal max-w-[820px] mx-auto px-4 sm:px-8 py-12 sm:py-16">{children}</div>
      </main>

      <LandingFooter />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
