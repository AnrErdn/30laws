"use client";
import type { Law } from "@/types/law";

function Left({ law }: { law: Law }) {
  const dots = Array.from({ length: 12 }, (_, i) => {
    const t = i / 11;
    const x = 30 + t * 180;
    const spacing = 4 + t * t * 22;
    return { x, spacing, t };
  });

  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <span className="category-tag" style={{ color: law.accentColor }}>{law.categoryLabel}</span>
        <div className="flex-1 flex items-center justify-center py-4 relative z-10">
          <svg viewBox="0 0 240 240" fill="none" className="w-4/5 h-4/5 max-h-[210px]">
            {/* Goal line */}
            <line x1="215" y1="40" x2="215" y2="200" stroke={law.accentColor} strokeWidth="1" opacity="0.4"/>
            <text x="218" y="120" fontFamily="var(--font-dm-sans),sans-serif" fontSize="6" fill={law.accentColor} opacity="0.4" transform="rotate(90,218,120)">ЗОРИЛГО</text>

            {/* Dots accelerating toward goal */}
            {dots.map((d, i) => (
              <circle key={i} cx={d.x} cy="120" r={2.5 + d.t * 2}
                fill={law.accentColor} opacity={0.15 + d.t * 0.5}/>
            ))}

            {/* Speed arrows */}
            <path d="M30 140 L60 140" stroke={law.accentColor} strokeWidth="0.6" opacity="0.15" markerEnd="url(#arr)"/>
            <path d="M130 140 L180 140" stroke={law.accentColor} strokeWidth="0.6" opacity="0.35" markerEnd="url(#arr)"/>
            <path d="M185 140 L210 140" stroke={law.accentColor} strokeWidth="1" opacity="0.55" markerEnd="url(#arr)"/>

            <defs>
              <marker id="arr" markerWidth="4" markerHeight="4" refX="3" refY="2" orient="auto">
                <path d="M0 0 L4 2 L0 4 Z" fill={law.accentColor} opacity="0.5"/>
              </marker>
            </defs>

            {/* Labels */}
            <text x="45" y="165" textAnchor="middle" fontFamily="var(--font-dm-sans),sans-serif" fontSize="5.5" fill="rgba(240,237,230,0.2)">удаан</text>
            <text x="160" y="165" textAnchor="middle" fontFamily="var(--font-dm-sans),sans-serif" fontSize="5.5" fill={law.accentColor} opacity="0.35">хурдан</text>
          </svg>
        </div>
        <div className="absolute font-display leading-none select-none pointer-events-none"
          style={{ fontSize: "clamp(7rem,20vw,18rem)", color: law.accentColor, opacity: 0.08, bottom: "-0.08em", left: "-0.04em" }}>
          09
        </div>
        <span className="page-number relative z-10">65</span>
      </div>
    </div>
  );
}

function Right({ law }: { law: Law }) {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content page-scroll h-full p-8 pb-14 overflow-y-auto">
        <div className="mb-6">
          <h1 className="font-serif text-white/90 leading-tight mb-4" style={{ fontSize: "clamp(1.5rem,3.5vw,2.6rem)" }}>{law.title}</h1>
          <p className="font-sans text-white/75 leading-relaxed" style={{ fontSize: "0.9rem" }}>{law.definition}</p>
        </div>
        <hr className="section-rule"/>
        <div>
          <h2 className="category-tag mb-3" style={{ color: law.accentColor }}>Зарчим</h2>
          <div className="space-y-3">
            {law.principle.map((p, i) => (
              <p key={i} className="font-sans text-white/65 leading-relaxed" style={{ fontSize: "0.82rem" }}>{p}</p>
            ))}
          </div>
        </div>
        <hr className="section-rule"/>
        <p className="font-sans text-white/25 italic" style={{ fontSize: "0.7rem" }}>Дараагийн хуудаснаас жишээнүүдийг үзнэ үү →</p>
        <div className="absolute bottom-5 right-7 page-number">66</div>
      </div>
    </div>
  );
}

const Law09Spread1 = { Left, Right };
export default Law09Spread1;
