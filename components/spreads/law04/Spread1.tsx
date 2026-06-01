"use client";
import type { Law } from "@/types/law";

function Left({ law }: { law: Law }) {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <span className="category-tag" style={{ color: law.accentColor }}>{law.categoryLabel}</span>

        <div className="flex-1 flex items-center justify-center py-4 relative z-10">
          <svg viewBox="0 0 240 240" fill="none" className="w-4/5 h-4/5 max-h-[210px]">
            {/* Anchoring visual — same bar looks different with different context */}
            {/* Top: large reference makes middle seem small */}
            <rect x="30" y="20" width="180" height="18" stroke={law.accentColor} strokeWidth="0.5" opacity="0.15" rx="1"/>
            <rect x="30" y="20" width="180" height="18" fill={law.accentColor} opacity="0.08" rx="1"/>
            <text x="120" y="32" textAnchor="middle" fontFamily="var(--font-dm-mono),monospace" fontSize="8" fill={law.accentColor} opacity="0.3">₮50,000</text>

            <rect x="70" y="52" width="100" height="18" stroke={law.accentColor} strokeWidth="0.5" opacity="0.35" rx="1"/>
            <rect x="70" y="52" width="100" height="18" fill={law.accentColor} opacity="0.15" rx="1"/>
            <text x="120" y="64" textAnchor="middle" fontFamily="var(--font-dm-mono),monospace" fontSize="8" fill={law.accentColor} opacity="0.6">₮30,000</text>

            {/* Label */}
            <text x="120" y="90" textAnchor="middle" fontFamily="var(--font-dm-sans),sans-serif" fontSize="6" fill="rgba(240,237,230,0.2)">anchor effect — ХЯМД МЭТ ХАРАГДАНА</text>

            {/* Divider */}
            <line x1="30" y1="110" x2="210" y2="110" stroke="rgba(240,237,230,0.06)" strokeWidth="0.5"/>

            {/* Bottom: small reference makes middle seem large */}
            <rect x="100" y="125" width="40" height="18" stroke={law.accentColor} strokeWidth="0.5" opacity="0.15" rx="1"/>
            <rect x="100" y="125" width="40" height="18" fill={law.accentColor} opacity="0.06" rx="1"/>
            <text x="120" y="137" textAnchor="middle" fontFamily="var(--font-dm-mono),monospace" fontSize="8" fill={law.accentColor} opacity="0.3">₮5,000</text>

            <rect x="70" y="157" width="100" height="18" stroke={law.accentColor} strokeWidth="0.5" opacity="0.35" rx="1"/>
            <rect x="70" y="157" width="100" height="18" fill={law.accentColor} opacity="0.15" rx="1"/>
            <text x="120" y="169" textAnchor="middle" fontFamily="var(--font-dm-mono),monospace" fontSize="8" fill={law.accentColor} opacity="0.6">₮30,000</text>

            <text x="120" y="195" textAnchor="middle" fontFamily="var(--font-dm-sans),sans-serif" fontSize="6" fill="rgba(240,237,230,0.2)">anchor effect — ҮНЭТЭЙ МЭТ ХАРАГДАНА</text>

            {/* Equal sign in the middle */}
            <text x="230" y="100" textAnchor="middle" fontFamily="Georgia,serif" fontSize="14" fill={law.accentColor} opacity="0.4">=</text>
          </svg>
        </div>

        <div className="absolute font-display leading-none select-none pointer-events-none"
          style={{ fontSize: "clamp(7rem,20vw,18rem)", color: law.accentColor, opacity: 0.08, bottom: "-0.08em", left: "-0.04em" }}>
          04
        </div>
        <span className="page-number relative z-10">25</span>
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
        <div className="absolute bottom-5 right-7 page-number">26</div>
      </div>
    </div>
  );
}

const Law04Spread1 = { Left, Right };
export default Law04Spread1;
