"use client";
import type { Law } from "@/types/law";

function Left({ law }: { law: Law }) {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <span className="category-tag" style={{ color: law.accentColor }}>{law.categoryLabel}</span>

        <div className="flex-1 flex items-center justify-center py-4 relative z-10">
          <svg viewBox="0 0 240 240" fill="none" className="w-4/5 h-4/5 max-h-[210px]">
            {/* Root node */}
            <circle cx="120" cy="30" r="5" fill={law.accentColor} opacity="0.6"/>
            {/* Level 1 branches */}
            <line x1="120" y1="35" x2="60" y2="80" stroke={law.accentColor} strokeWidth="0.8" opacity="0.4"/>
            <line x1="120" y1="35" x2="120" y2="80" stroke={law.accentColor} strokeWidth="0.8" opacity="0.4"/>
            <line x1="120" y1="35" x2="180" y2="80" stroke={law.accentColor} strokeWidth="0.8" opacity="0.4"/>
            <circle cx="60" cy="83" r="3.5" fill={law.accentColor} opacity="0.4"/>
            <circle cx="120" cy="83" r="3.5" fill={law.accentColor} opacity="0.4"/>
            <circle cx="180" cy="83" r="3.5" fill={law.accentColor} opacity="0.4"/>
            {/* Level 2 branches */}
            {[60,120,180].map(x => [x-18,x,x+18].map((tx,i) => (
              <g key={`${x}-${i}`}>
                <line x1={x} y1="87" x2={tx} y2="130" stroke={law.accentColor} strokeWidth="0.6" opacity="0.25"/>
                <circle cx={tx} cy="133" r="2.5" fill={law.accentColor} opacity="0.25"/>
              </g>
            )))}
            {/* Level 3 — chaos, many tiny branches */}
            {[42,60,78,102,120,138,162,180,198].map((x,i) => [x-10,x+10].map((tx,j) => (
              <g key={`l3-${i}-${j}`}>
                <line x1={x} y1="136" x2={tx} y2="170" stroke={law.accentColor} strokeWidth="0.4" opacity="0.15"/>
                <circle cx={tx} cy="172" r="1.5" fill={law.accentColor} opacity="0.15"/>
              </g>
            )))}
            {/* Question mark at bottom center */}
            <text x="120" y="210" textAnchor="middle" fontFamily="Georgia,serif" fontSize="20" fill={law.accentColor} opacity="0.18">?</text>
          </svg>
        </div>

        <div className="absolute font-display leading-none select-none pointer-events-none"
          style={{ fontSize: "clamp(7rem,20vw,18rem)", color: law.accentColor, opacity: 0.08, bottom: "-0.08em", left: "-0.04em" }}>
          02
        </div>
        <span className="page-number relative z-10">09</span>
      </div>
    </div>
  );
}

function Right({ law }: { law: Law }) {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content page-scroll h-full p-8 pb-14 overflow-y-auto">
        <div className="mb-6">
          <h1 className="font-serif text-white/90 leading-tight mb-4" style={{ fontSize: "clamp(1.5rem,3.5vw,2.6rem)" }}>
            {law.title}
          </h1>
          <p className="font-sans text-white/75 leading-relaxed" style={{ fontSize: "0.9rem" }}>
            {law.definition}
          </p>
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
        <div className="absolute bottom-5 right-7 page-number">10</div>
      </div>
    </div>
  );
}

const Law02Spread1 = { Left, Right };
export default Law02Spread1;
