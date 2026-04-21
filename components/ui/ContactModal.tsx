"use client";

import { useEffect } from "react";
import LeadForm from "@/components/ui/LeadForm";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] flex items-center justify-center p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg w-full max-w-[560px] shadow-[0_24px_64px_rgba(0,0,0,0.3)] overflow-hidden max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="bg-brand-blue px-7 py-5 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-orange mb-1">
              Solicitud Sin Costo
            </p>
            <p className="text-[17px] font-bold text-white">
              Cotice su Maquinaria CNC
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded flex items-center justify-center bg-white/10 text-white text-lg cursor-pointer hover:bg-white/20 transition-colors"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <div className="p-7">
          <LeadForm />
        </div>
      </div>
    </div>
  );
}
