"use client";
import type { Law } from "@/types/law";

function Left({ law }: { law: Law }) {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <span className="category-tag" style={{ color: law.accentColor }}>{law.categoryLabel}</span>

        <div className="flex-1 flex items-center justify-center py-4 relative z-10">
          <svg viewBox="0 0 240 240" fill="none" className="w-4/5 h-4/5 max-h-[210px]">
            {/* Timeline bar */}
            <line x1="20" y1="120" x2="220" y2="120" stroke="rgba(240,237,230,0.12)" strokeWidth="1"/>
            {/* Tick marks */}
            {[20,70,120,170,220].map((x, i) => (
              <g key={i}>
                <line x1={x} y1="114" x2={x} y2="126" stroke="rgba(240,237,230,0.15)" strokeWidth="0.8"/>
                <text x={x} y="138" textAnchor="middle" fontFamily="var(--font-dm-mono),monospace" fontSize="6"
                  fill="rgba(240,237,230,0.2)">{i * 200}ms</text>
              </g>
            ))}
            {/* 400ms threshold line */}
            <line x1="120" y1="40" x2="120" y2="120" stroke={law.accentColor} strokeWidth="1" opacity="0.6" strokeDasharray="4,3"/>
            <text x="122" y="50" fontFamily="var(--font-dm-mono),monospace" fontSize="7" fill={law.accentColor} opacity="0.7">400ms</text>
            <text x="122" y="60" fontFamily="var(--font-dm-sans),sans-serif" fontSize="5.5" fill={law.accentColor} opacity="0.4">хязгаар</text>

            {/* Fast response curve — left of threshold */}
            <path d="M20 100 Q60 60 120 80" stroke={law.accentColor} strokeWidth="1.2" opacity="0.5" fill="none"/>
            <circle cx="120" cy="80" r="4" fill={law.accentColor} opacity="0.5"/>
            <text x="60" y="72" textAnchor="middle" fontFamily="var(--font-dm-sans),sans-serif" fontSize="6" fill={law.accentColor} opacity="0.5">FLOW</text>

            {/* Slow response — right of threshold */}
            <path d="M120 80 Q170 90 220 150" stroke="rgba(240,237,230,0.2)" strokeWidth="1" opacity="0.4" fill="none" strokeDasharray="3,3"/>
            <text x="175" y="145" textAnchor="middle" fontFamily="var(--font-dm-sans),sans-serif" fontSize="6" fill="rgba(240,237,230,0.2)">АЛДАХ</text>

            {/* User icon at left */}
            <circle cx="28" cy="95" r="5" stroke={law.accentColor} strokeWidth="0.8" opacity="0.35"/>
            <line x1="28" y1="100" x2="28" y2="112" stroke={law.accentColor} strokeWidth="0.8" opacity="0.35"/>
          </svg>
        </div>

        <div className="absolute font-display leading-none select-none pointer-events-none"
          style={{ fontSize: "clamp(7rem,20vw,18rem)", color: law.accentColor, opacity: 0.08, bottom: "-0.08em", left: "-0.04em" }}>
          06
        </div>
        <span className="page-number relative z-10">41</span>
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
        <div className="absolute bottom-5 right-7 page-number">42</div>
      </div>
    </div>
  );
}

const Law06Spread1 = { Left, Right };
export default Law06Spread1;
