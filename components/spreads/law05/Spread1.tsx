"use client";
import type { Law } from "@/types/law";

function Left({ law }: { law: Law }) {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <span className="category-tag" style={{ color: law.accentColor }}>{law.categoryLabel}</span>
        <div className="flex-1 flex items-center justify-center py-4 relative z-10">
          <svg viewBox="0 0 240 240" fill="none" className="w-4/5 h-4/5 max-h-[210px]">
            {/* Many streams converging into a brain/node — overloaded */}
            {/* Left side: cluttered streams */}
            {[20,40,60,80,100,120,140,160,180,200].map((y, i) => (
              <g key={i}>
                <line x1="10" y1={y} x2="95" y2="120" stroke={law.accentColor} strokeWidth="0.5"
                  opacity={0.08 + (i % 3) * 0.05} strokeDasharray={i % 2 === 0 ? "none" : "2,3"}/>
              </g>
            ))}
            {/* Overloaded node */}
            <circle cx="95" cy="120" r="22" stroke={law.accentColor} strokeWidth="0.8" opacity="0.3"/>
            <circle cx="95" cy="120" r="14" fill={law.accentColor} opacity="0.12"/>
            <text x="95" y="124" textAnchor="middle" fontFamily="Georgia,serif" fontSize="10" fill={law.accentColor} opacity="0.35">!</text>

            {/* Divider */}
            <line x1="130" y1="40" x2="130" y2="200" stroke="rgba(240,237,230,0.06)" strokeWidth="0.5"/>

            {/* Right side: single clean stream */}
            <line x1="145" y1="120" x2="225" y2="120" stroke={law.accentColor} strokeWidth="1.5" opacity="0.5"/>
            <circle cx="155" cy="120" r="5" fill={law.accentColor} opacity="0.25"/>
            {/* Clean node */}
            <circle cx="215" cy="120" r="16" stroke={law.accentColor} strokeWidth="0.8" opacity="0.5"/>
            <circle cx="215" cy="120" r="8" fill={law.accentColor} opacity="0.25"/>

            {/* Labels */}
            <text x="65" y="215" textAnchor="middle" fontFamily="var(--font-dm-sans),sans-serif" fontSize="5.5" fill="rgba(240,237,230,0.2)">HIGH LOAD</text>
            <text x="185" y="215" textAnchor="middle" fontFamily="var(--font-dm-sans),sans-serif" fontSize="5.5" fill={law.accentColor} opacity="0.35">LOW LOAD</text>
          </svg>
        </div>
        <div className="absolute font-display leading-none select-none pointer-events-none"
          style={{ fontSize: "clamp(7rem,20vw,18rem)", color: law.accentColor, opacity: 0.08, bottom: "-0.08em", left: "-0.04em" }}>
          05
        </div>
        <span className="page-number relative z-10">33</span>
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
        <div className="absolute bottom-5 right-7 page-number">34</div>
      </div>
    </div>
  );
}

const Law05Spread1 = { Left, Right };
export default Law05Spread1;
