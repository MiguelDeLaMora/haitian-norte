import Image from "next/image";
import LeadForm from "@/components/ui/LeadForm";
import { CONTACT_INFO } from "@/lib/landing-data";

export default function CTASection() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-8 overflow-hidden">
      {/* Background image */}
      <Image
        src="/footer-image-haitian.webp"
        alt=""
        fill
        className="object-cover object-center"
      />

      {/* Mobile overlay — uniform dark */}
      <div
        className="absolute inset-0 lg:hidden pointer-events-none"
        style={{ background: "rgba(10,15,40,0.92)" }}
      />
      {/* Desktop overlay — gradient */}
      <div
        className="absolute inset-0 hidden lg:block pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(10,15,40,0.94) 0%, rgba(10,15,40,0.88) 50%, rgba(10,15,40,0.75) 100%)",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-10 lg:gap-20 items-center">
          {/* Left: copy + contact info */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-orange mb-3">
              Habla con un Especialista
            </p>
            <h2
              className="font-extrabold text-white leading-[1.15] tracking-[-0.02em] mb-5"
              style={{ fontSize: "clamp(26px, 3vw, 44px)" }}
            >
              ¿Listo para escalar
              <br />
              <span className="text-brand-orange">su producción?</span>
            </h2>
            <p className="text-[14px] sm:text-[15px] text-white/65 leading-[1.75] mb-8 sm:mb-10 max-w-[440px]">
              Nuestros ingenieros analizarán su proceso y le recomendarán el
              equipo ideal para su aplicación. Sin compromiso, sin costo.
            </p>

            <div className="flex flex-col gap-3 sm:gap-3.5">
              {CONTACT_INFO.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded flex-shrink-0 flex items-center justify-center"
                    style={{ background: "rgba(255,108,0,0.15)" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FF6C00"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={item.iconPath} />
                    </svg>
                  </div>
                  <span className="text-[13px] text-white/75 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-lg p-6 sm:p-9 shadow-[0_24px_64px_rgba(0,0,0,0.5)]">
            <div className="mb-5 sm:mb-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-orange mb-1.5">
                Formulario de Contacto
              </p>
              <h3 className="text-[18px] sm:text-[20px] font-bold text-neutral-900">
                Solicite Información Ahora
              </h3>
            </div>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
