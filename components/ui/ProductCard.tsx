"use client";

import { useState } from "react";
import Image from "next/image";
import { type Product } from "@/lib/landing-data";

interface ProductCardProps {
  product: Product;
  tag: string;
  onContact: () => void;
}

export default function ProductCard({ product, tag, onContact }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-white rounded flex flex-col transition-all duration-200"
      style={{
        border: hovered ? "1.5px solid #203285" : "1.5px solid #E5E7EB",
        boxShadow: hovered
          ? "0 8px 24px rgba(32,50,133,0.12)"
          : "0 1px 3px rgba(0,0,0,0.06)",
      }}
    >
      {/* Image area */}
      <div
        className="relative overflow-hidden"
        style={{ height: 200, background: "#F3F4F6" }}
      >
        <Image
          src={product.src}
          alt={product.name}
          fill
          className="object-contain p-4 transition-transform duration-300"
          style={{ transform: hovered ? "scale(1.04)" : "scale(1)" }}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute top-2.5 left-2.5">
          <span className="text-[9px] font-bold uppercase tracking-[0.1em] bg-brand-orange text-white px-2 py-0.5 rounded-[2px]">
            {tag}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pt-5">
        <p className="text-base font-bold text-neutral-900 mb-3">{product.name}</p>
        <div className="border-t border-neutral-100 pt-3">
          {product.specs.map((s, i) => (
            <div
              key={i}
              className="flex justify-between py-1.5"
              style={{
                borderBottom:
                  i < product.specs.length - 1 ? "1px solid #F9FAFB" : "none",
              }}
            >
              <span className="text-[11px] text-neutral-400 font-medium">{s.k}</span>
              <span className="text-[11px] font-bold text-neutral-900">{s.v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-5 py-4 mt-auto">
        <button
          onClick={onContact}
          className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-[12px] py-2.5 rounded cursor-pointer transition-all duration-150 hover:-translate-y-px"
        >
          Solicitar Cotización
        </button>
      </div>
    </div>
  );
}
