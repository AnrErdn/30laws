"use client";
import type { Law } from "@/types/law";
import AestheticUsabilityIllustration from "@/components/illustrations/AestheticUsabilityIllustration";

function Left({ law }: { law: Law }) {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        {/* Category tag */}
        <div>
          <span className="category-tag" style={{ color: law.accentColor }}>{law.categoryLabel}</span>
        </div>

        {/* Illustration */}
        <div className="flex-1 flex items-center justify-center py-4 relative z-10">
          <div className="w-full max-h-[55%]">
            <AestheticUsabilityIllustration accentColor={law.accentColor} />
          </div>
        </div>

        {/* Law number — huge, bleeds off bottom-left */}
        <div
          className="absolute font-display leading-none select-none pointer-events-none"
          style={{
            fontSize: "clamp(7rem, 20vw, 18rem)",
            color: law.accentColor,
            opacity: 0.10,
            bottom: "-0.08em",
            left: "-0.04em",
            letterSpacing: "-0.04em",
          }}
        >
          01
        </div>

        <span className="page-number relative z-10">01</span>
      </div>
    </div>
  );
}

function Right({ law }: { law: Law }) {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content page-scroll h-full p-8 pb-14 overflow-y-auto">
        {/* Law title */}
        <div className="mb-6">
          <h1 className="font-serif text-white/90 leading-tight mb-4" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.6rem)" }}>
            {law.title}
          </h1>
          <p className="font-sans text-white/75 leading-relaxed" style={{ fontSize: "0.9rem" }}>
            {law.definition}
          </p>
        </div>

        <hr className="section-rule"/>

        {/* Principle */}
        <div>
          <h2 className="category-tag mb-3" style={{ color: law.accentColor }}>Зарчим</h2>
          <div className="space-y-3">
            {law.principle.map((p, i) => (
              <p key={i} className="font-sans text-white/65 leading-relaxed" style={{ fontSize: "0.82rem" }}>
                {p}
              </p>
            ))}
          </div>
        </div>

        <hr className="section-rule"/>

        {/* Page hint */}
        <p className="font-sans text-white/25 italic" style={{ fontSize: "0.7rem" }}>
          Дараагийн хуудаснаас жишээнүүдийг үзнэ үү →
        </p>

        <div className="absolute bottom-5 right-7 page-number">02</div>
      </div>
    </div>
  );
}

const Law01Spread1 = { Left, Right };
export default Law01Spread1;
