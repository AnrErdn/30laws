"use client";
import type { Law } from "@/types/law";

function Left({ law, pageNum }: { law: Law; pageNum: number }) {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <div>
          <span className="category-tag" style={{ color: law.accentColor }}>{law.categoryLabel}</span>
        </div>

        {/* Simple geometric illustration placeholder */}
        <div className="flex-1 flex items-center justify-center relative z-10 py-4">
          <svg viewBox="0 0 240 240" fill="none" className="w-4/5 h-4/5 max-h-[200px]">
            <circle cx="120" cy="120" r="80" stroke={law.accentColor} strokeWidth="0.6" opacity="0.25"/>
            <circle cx="120" cy="120" r="50" stroke={law.accentColor} strokeWidth="0.5" opacity="0.4"/>
            <circle cx="120" cy="120" r="20" fill={law.accentColor} opacity="0.25"/>
            <circle cx="120" cy="120" r="6" fill={law.accentColor} opacity="0.5"/>
            <rect x="40" y="40" width="160" height="160" stroke={law.accentColor} strokeWidth="0.3" opacity="0.1"/>
          </svg>
        </div>

        {/* Large law number */}
        <div
          className="absolute font-display leading-none select-none pointer-events-none"
          style={{
            fontSize: "clamp(7rem, 20vw, 18rem)",
            color: law.accentColor,
            opacity: 0.08,
            bottom: "-0.08em",
            left: "-0.04em",
          }}
        >
          {String(law.id).padStart(2, "0")}
        </div>

        <span className="page-number relative z-10">{String(pageNum).padStart(2, "0")}</span>
      </div>
    </div>
  );
}

function Right({ law, pageNum }: { law: Law; pageNum: number }) {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content page-scroll h-full p-8 pb-14 overflow-y-auto">
        <div className="mb-5">
          <h1 className="font-serif text-white/90 leading-tight mb-3" style={{ fontSize: "clamp(1.4rem, 3vw, 2.4rem)" }}>
            {law.title}
          </h1>
          <p className="font-sans text-white/70 leading-relaxed" style={{ fontSize: "0.85rem" }}>
            {law.definition}
          </p>
        </div>

        <hr className="section-rule"/>

        <div className="mb-4">
          <h2 className="category-tag mb-2.5" style={{ color: law.accentColor }}>Зарчим</h2>
          <div className="space-y-3">
            {law.principle.map((p, i) => (
              <p key={i} className="font-sans text-white/60 leading-relaxed" style={{ fontSize: "0.8rem" }}>
                {p}
              </p>
            ))}
          </div>
        </div>

        <hr className="section-rule"/>

        <div className="space-y-4">
          <div>
            <h3 className="category-tag mb-1.5" style={{ color: law.accentColor }}>Бодит жишээ — {law.physicalExample.title}</h3>
            <p className="font-sans text-white/50 leading-relaxed" style={{ fontSize: "0.75rem" }}>{law.physicalExample.description}</p>
          </div>
          <div>
            <h3 className="category-tag mb-1.5" style={{ color: law.accentColor }}>Дижитал жишээ — {law.digitalExample.title}</h3>
            <p className="font-sans text-white/50 leading-relaxed" style={{ fontSize: "0.75rem" }}>{law.digitalExample.description}</p>
          </div>
        </div>

        <hr className="section-rule"/>

        <div>
          <p className="category-tag mb-2" style={{ color: law.accentColor }}>Дизайнерийн дүгнэлт</p>
          <p className="font-serif italic text-white/70 leading-relaxed" style={{ fontSize: "0.85rem" }}>
            &ldquo;{law.takeaway}&rdquo;
          </p>
        </div>

        <div className="absolute bottom-5 right-7 page-number">{String(pageNum + 1).padStart(2, "0")}</div>
      </div>
    </div>
  );
}

const DefaultLawSpread = { Left, Right };
export default DefaultLawSpread;
