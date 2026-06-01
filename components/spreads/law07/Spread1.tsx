"use client";
import type { Law } from "@/types/law";

function Left({ law }: { law: Law }) {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <span className="category-tag" style={{ color: law.accentColor }}>{law.categoryLabel}</span>
        <div className="flex-1 flex items-center justify-center py-4 relative z-10">
          <svg viewBox="0 0 240 240" fill="none" className="w-4/5 h-4/5 max-h-[210px]">
            {/* Large easy target — left */}
            <circle cx="70" cy="120" r="45" stroke={law.accentColor} strokeWidth="0.5" opacity="0.12"/>
            <circle cx="70" cy="120" r="30" stroke={law.accentColor} strokeWidth="0.6" opacity="0.2"/>
            <circle cx="70" cy="120" r="16" stroke={law.accentColor} strokeWidth="0.7" opacity="0.3"/>
            <circle cx="70" cy="120" r="6" fill={law.accentColor} opacity="0.45"/>
            <text x="70" y="178" textAnchor="middle" fontFamily="var(--font-dm-sans),sans-serif" fontSize="6" fill={law.accentColor} opacity="0.4">том · ойр</text>
            <text x="70" y="187" textAnchor="middle" fontFamily="var(--font-dm-sans),sans-serif" fontSize="5" fill="rgba(240,237,230,0.2)">ХЯЛБАР</text>

            {/* Small hard target — right, far */}
            <circle cx="195" cy="60" r="10" stroke={law.accentColor} strokeWidth="0.5" opacity="0.2"/>
            <circle cx="195" cy="60" r="5" stroke={law.accentColor} strokeWidth="0.6" opacity="0.3"/>
            <circle cx="195" cy="60" r="2" fill={law.accentColor} opacity="0.35"/>
            <text x="195" y="80" textAnchor="middle" fontFamily="var(--font-dm-sans),sans-serif" fontSize="6" fill={law.accentColor} opacity="0.3">жижиг · хол</text>
            <text x="195" y="89" textAnchor="middle" fontFamily="var(--font-dm-sans),sans-serif" fontSize="5" fill="rgba(240,237,230,0.2)">ХЭЦҮҮ</text>

            {/* Cursor path from center to each target */}
            <circle cx="120" cy="200" r="4" stroke="rgba(240,237,230,0.2)" strokeWidth="0.8"/>
            <path d="M120 196 Q90 160 70 130" stroke={law.accentColor} strokeWidth="0.8" opacity="0.25" strokeDasharray="3,3"/>
            <path d="M120 196 Q155 130 193 68" stroke="rgba(240,237,230,0.12)" strokeWidth="0.8" strokeDasharray="3,3"/>

            {/* Formula hint */}
            <text x="120" y="22" textAnchor="middle" fontFamily="var(--font-dm-mono),monospace" fontSize="6.5" fill={law.accentColor} opacity="0.3">T = a + b × log₂(2D/W)</text>
          </svg>
        </div>
        <div className="absolute font-display leading-none select-none pointer-events-none"
          style={{ fontSize: "clamp(7rem,20vw,18rem)", color: law.accentColor, opacity: 0.08, bottom: "-0.08em", left: "-0.04em" }}>
          07
        </div>
        <span className="page-number relative z-10">49</span>
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
        <div className="absolute bottom-5 right-7 page-number">50</div>
      </div>
    </div>
  );
}

const Law07Spread1 = { Left, Right };
export default Law07Spread1;
