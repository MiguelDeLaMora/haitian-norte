import { BENEFITS } from "@/lib/landing-data";

export default function BenefitsStrip() {
  return (
    <section className="bg-brand-orange">
      <div className="max-w-[1280px] mx-auto px-8">
        <div
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${BENEFITS.length}, 1fr)`,
            borderLeft: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          {BENEFITS.map((b, i) => (
            <div
              key={i}
              className="px-5 py-7 text-center"
              style={{ borderRight: "1px solid rgba(255,255,255,0.2)" }}
            >
              <div className="text-[28px] font-extrabold text-white leading-none mb-0.5">
                {b.icon}
                <span className="text-sm">{b.iconSub}</span>
              </div>
              <div className="text-[11px] font-bold text-white/90 uppercase tracking-[0.08em] mt-1 mb-1">
                {b.label}
              </div>
              <div className="text-[11px] text-white/75 leading-snug">{b.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
