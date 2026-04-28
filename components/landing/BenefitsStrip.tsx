import { BENEFITS } from "@/lib/landing-data";

export default function BenefitsStrip() {
  return (
    <section className="bg-brand-orange">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        {/* Mobile/tablet: 2-col grid with gap-px dividers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/20">
          {BENEFITS.map((b, i) => (
            <div
              key={i}
              className="bg-brand-orange px-4 sm:px-5 py-6 sm:py-7 text-center"
            >
              <div className="text-[24px] sm:text-[28px] font-extrabold text-white leading-none mb-0.5">
                {b.icon}
                <span className="text-sm">{b.iconSub}</span>
              </div>
              <div className="text-[10px] sm:text-[11px] font-bold text-white/90 uppercase tracking-[0.08em] mt-1 mb-1">
                {b.label}
              </div>
              <div className="text-[10px] sm:text-[11px] text-white/75 leading-snug">{b.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
