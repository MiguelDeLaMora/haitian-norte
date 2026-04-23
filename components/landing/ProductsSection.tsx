"use client";

import { useState } from "react";
import { PRODUCT_CATEGORIES } from "@/lib/landing-data";
import ProductCard from "@/components/ui/ProductCard";

interface ProductsSectionProps {
  onContact: () => void;
}

export default function ProductsSection({ onContact }: ProductsSectionProps) {
  const [activeTab, setActiveTab] = useState("horizontal");
  const cat = PRODUCT_CATEGORIES.find((c) => c.id === activeTab)!;

  const gridClass =
    cat.products.length === 2
      ? "grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[780px] mx-auto"
      : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5";

  return (
    <section id="productos" className="bg-neutral-50 py-14 sm:py-24 px-4 sm:px-8">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-orange mb-2.5">
            Catálogo de Equipos
          </p>
          <h2
            className="font-extrabold text-neutral-900 tracking-[-0.02em] mb-4"
            style={{ fontSize: "clamp(26px, 3vw, 40px)" }}
          >
            Líneas de Producto
          </h2>
          <p className="text-[14px] sm:text-[15px] text-neutral-500 max-w-[560px] mx-auto leading-[1.7]">
            Cuatro líneas especializadas para cubrir cada necesidad de su planta.
            Todos los equipos con soporte técnico local en Guadalajara.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 justify-center mb-8 sm:mb-10 flex-wrap">
          {PRODUCT_CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className="cursor-pointer px-4 sm:px-5 py-2 sm:py-2.5 rounded text-[12px] sm:text-[13px] font-semibold transition-all duration-150"
              style={{
                border: "1.5px solid",
                borderColor: activeTab === c.id ? "#203285" : "#E5E7EB",
                background: activeTab === c.id ? "#203285" : "#fff",
                color: activeTab === c.id ? "#fff" : "#6B7280",
              }}
            >
              {c.shortLabel}
            </button>
          ))}
        </div>

        {/* Category description */}
        <div
          className="flex items-center gap-4 bg-white rounded px-5 sm:px-6 py-4 sm:py-5 mb-6 sm:mb-8"
          style={{ border: "1px solid #E5E7EB", borderLeft: "4px solid #FF6C00" }}
        >
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-orange mb-1">
              {cat.tag}
            </p>
            <p className="text-[13px] text-neutral-700 leading-relaxed">{cat.description}</p>
          </div>
        </div>

        {/* Product grid */}
        <div className={gridClass}>
          {cat.products.map((p, i) => (
            <ProductCard key={i} product={p} tag={cat.tag} onContact={onContact} />
          ))}
        </div>

        {/* Footer note */}
        <div className="text-center mt-8 sm:mt-10">
          <p className="text-[13px] text-neutral-400">
            ¿No encuentra lo que busca?{" "}
            <button
              onClick={onContact}
              className="text-brand-blue font-semibold cursor-pointer underline bg-transparent border-none text-[13px]"
            >
              Consulte con un especialista
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
