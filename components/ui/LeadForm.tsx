"use client";

import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { cn } from "@/lib/utils";

interface FormState {
  nombre: string;
  empresa: string;
  telefono: string;
  email: string;
  categoria: string;
  mensaje: string;
}

export interface LeadFormProps {
  dark?: boolean;
  compact?: boolean;
  className?: string;
}

export default function LeadForm({
  dark = false,
  compact = false,
  className,
}: LeadFormProps) {
  const [form, setForm] = useState<FormState>({
    nombre: "",
    empresa: "",
    telefono: "",
    email: "",
    categoria: "",
    mensaje: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "miguel@humanmarkeintg.mx",
          subject: `Nueva solicitud de cotización — ${form.nombre}`,
          html: `
            <h2 style="color:#E85D04;">Nueva solicitud de información</h2>
            <table cellpadding="6" style="font-family:sans-serif;font-size:14px;">
              <tr><td><strong>Nombre:</strong></td><td>${form.nombre}</td></tr>
              <tr><td><strong>Empresa:</strong></td><td>${form.empresa}</td></tr>
              <tr><td><strong>Teléfono:</strong></td><td>${form.telefono}</td></tr>
              <tr><td><strong>Email:</strong></td><td>${form.email}</td></tr>
              <tr><td><strong>Categoría:</strong></td><td>${form.categoria || "No especificada"}</td></tr>
              ${form.mensaje ? `<tr><td><strong>Mensaje:</strong></td><td>${form.mensaje}</td></tr>` : ""}
            </table>
          `,
          turnstileToken,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Error al enviar");
      }
      setSent(true);
    } catch (err) {
      alert(`Error: ${err instanceof Error ? err.message : "Intente de nuevo"}`);
    } finally {
      setLoading(false);
    }
  };

  const inputClass = cn(
    "lead-input",
    dark ? "lead-input-dark" : "lead-input-light"
  );

  const labelClass = cn(
    "block text-[11px] font-semibold uppercase tracking-[0.06em] mb-1.5",
    dark ? "text-white/70" : "text-neutral-700"
  );

  if (sent) {
    return (
      <div className={cn("flex flex-col items-center text-center", compact ? "py-6" : "py-10", className)}>
        <div className="w-16 h-16 rounded-full bg-brand-orange flex items-center justify-center mb-4">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p className={cn("text-lg font-bold mb-2", dark ? "text-white" : "text-neutral-900")}>
          ¡Solicitud Enviada!
        </p>
        <p className={cn("text-[13px] leading-relaxed max-w-[280px]", dark ? "text-white/65" : "text-neutral-500")}>
          Un especialista de Haitian Norte se comunicará con usted en menos de 48 horas.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className={cn("grid gap-3 mb-3", compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2")}>
        <div>
          <label className={labelClass}>Nombre completo *</label>
          <input
            className={inputClass}
            type="text"
            placeholder="Juan García"
            value={form.nombre}
            onChange={set("nombre")}
            required
          />
        </div>
        <div>
          <label className={labelClass}>Empresa *</label>
          <input
            className={inputClass}
            type="text"
            placeholder="Empresa S.A. de C.V."
            value={form.empresa}
            onChange={set("empresa")}
            required
          />
        </div>
        <div>
          <label className={labelClass}>Teléfono *</label>
          <input
            className={inputClass}
            type="tel"
            placeholder="+52 33 0000 0000"
            value={form.telefono}
            onChange={set("telefono")}
            required
          />
        </div>
        <div>
          <label className={labelClass}>Correo electrónico *</label>
          <input
            className={inputClass}
            type="email"
            placeholder="correo@empresa.mx"
            value={form.email}
            onChange={set("email")}
            required
          />
        </div>
      </div>

      <div className="mb-3">
        <label className={labelClass}>Categoría de interés</label>
        <select className={inputClass} value={form.categoria} onChange={set("categoria")}>
          <option value="">Seleccionar categoría</option>
          <option>Centros de Maquinado Horizontales</option>
          <option>Centros de Maquinado Verticales</option>
          <option>Centros de Maquinado de Doble Columna</option>
          <option>Tornos CNC</option>
        </select>
      </div>

      {!compact && (
        <div className="mb-4">
          <label className={labelClass}>Mensaje (opcional)</label>
          <textarea
            className={cn(inputClass, "resize-y")}
            rows={3}
            placeholder="Describa su necesidad o el equipo de su interés..."
            value={form.mensaje}
            onChange={set("mensaje")}
          />
        </div>
      )}

      <Turnstile
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
        onSuccess={(token) => setTurnstileToken(token)}
        className="mb-3"
      />

      <button
        type="submit"
        disabled={loading || !turnstileToken}
        className="w-full bg-brand-orange hover:bg-brand-orange-dark active:bg-[#c95500] text-white font-bold text-[14px] py-3.5 rounded cursor-pointer transition-all duration-150 hover:-translate-y-px disabled:opacity-80"
      >
        {loading ? "Enviando..." : "Solicitar Información Gratuita"}
      </button>

      <p className={cn("text-[10px] text-center mt-2.5 leading-relaxed", dark ? "text-white/40" : "text-neutral-400")}>
        Al enviar, acepta que un asesor de Haitian Norte se comunique con usted.
      </p>
    </form>
  );
}
