"use client";
import type { Law } from "@/types/law";

function Left({ law }: { law: Law }) {
  // Log curve points for Hick's Law: RT = a + b*log2(n)
  const pts = [1,2,3,4,5,6,7,8].map(n => ({
    x: 20 + n * 24,
    y: 200 - (40 + 28 * Math.log2(n)),
  }));
  const pathD = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");

  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <span className="category-tag" style={{ color: law.accentColor }}>{law.categoryLabel}</span>
        <div className="flex-1 flex items-center justify-center py-4 relative z-10">
          <svg viewBox="0 0 240 240" fill="none" className="w-4/5 h-4/5 max-h-[210px]">
            {/* Axes */}
            <line x1="20" y1="210" x2="220" y2="210" stroke="rgba(240,237,230,0.12)" strokeWidth="0.8"/>
            <line x1="20" y1="210" x2="20" y2="20" stroke="rgba(240,237,230,0.12)" strokeWidth="0.8"/>
            <text x="120" y="225" textAnchor="middle" fontFamily="var(--font-dm-sans),sans-serif" fontSize="6" fill="rgba(240,237,230,0.2)">СОНГОЛТЫН ТОО →</text>
            <text x="10" y="115" textAnchor="middle" fontFamily="var(--font-dm-sans),sans-serif" fontSize="6" fill="rgba(240,237,230,0.2)" transform="rotate(-90,10,115)">ХУГАЦАА →</text>

            {/* Log curve */}
            <path d={pathD} stroke={law.accentColor} strokeWidth="1.5" opacity="0.55" fill="none"/>

            {/* Dots on curve */}
            {pts.map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r="2.5" fill={law.accentColor} opacity={0.3 + i * 0.08}/>
            ))}

            {/* Grid dots */}
            {pts.map((p, i) => (
              <g key={`g-${i}`}>
                <line x1={p.x} y1={p.y} x2={p.x} y2="210" stroke={law.accentColor} strokeWidth="0.3" opacity="0.08" strokeDasharray="2,3"/>
                <text x={p.x} y="218" textAnchor="middle" fontFamily="var(--font-dm-mono),monospace" fontSize="5" fill="rgba(240,237,230,0.15)">{i+1}</text>
              </g>
            ))}

            {/* Formula */}
            <text x="180" y="45" textAnchor="middle" fontFamily="var(--font-dm-mono),monospace" fontSize="5.5" fill={law.accentColor} opacity="0.3">RT=a+b·log₂n</text>
          </svg>
        </div>
        <div className="absolute font-display leading-none select-none pointer-events-none"
          style={{ fontSize: "clamp(7rem,20vw,18rem)", color: law.accentColor, opacity: 0.08, bottom: "-0.08em", left: "-0.04em" }}>
          10
        </div>
        <span className="page-number relative z-10">73</span>
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
        <div className="absolute bottom-5 right-7 page-number">74</div>
      </div>
    </div>
  );
}

const Law10Spread1 = { Left, Right };
export default Law10Spread1;
