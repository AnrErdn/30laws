"use client";
import type { Law } from "@/types/law";

function Left({ law }: { law: Law }) {
  const scattered = [[30,40],[80,25],[140,55],[200,35],[55,90],[110,70],[170,85],[45,130],[100,115],[160,100],[210,125],[70,160],[130,145],[185,165],[40,195],[95,180],[155,190],[205,175]];
  const grouped = [
    [[28,40],[48,38],[38,55],[28,55]], // g1
    [[78,38],[98,42],[88,55],[78,55]], // g2
    [[138,40],[158,38],[148,55],[138,55]], // g3
    [[198,40],[218,42],[208,55],[198,55]], // g4
    [[38,100],[58,98],[48,115],[38,115]], // g5
    [[108,100],[128,102],[118,115],[108,115]], // g6
  ];

  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <span className="category-tag" style={{ color: law.accentColor }}>{law.categoryLabel}</span>

        <div className="flex-1 flex flex-col items-center justify-center py-4 relative z-10 gap-4">
          {/* Scattered dots */}
          <div>
            <p className="font-mono text-white/15 mb-2" style={{ fontSize: "0.45rem", letterSpacing: "0.15em", textAlign: "center" }}>БҮЛЭГДЭЭГҮЙ</p>
            <svg viewBox="0 0 240 110" fill="none" width="200" height="80">
              {scattered.map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="3" fill={law.accentColor} opacity="0.3"/>
              ))}
            </svg>
          </div>
          {/* Divider */}
          <div style={{ width: "60px", height: "0.5px", background: `${law.accentColor}30` }}/>
          {/* Grouped dots */}
          <div>
            <p className="font-mono mb-2" style={{ fontSize: "0.45rem", letterSpacing: "0.15em", textAlign: "center", color: law.accentColor, opacity: 0.5 }}>БҮЛЭГЛЭСЭН</p>
            <svg viewBox="0 0 240 130" fill="none" width="200" height="90">
              {grouped.map((group, gi) => (
                <g key={gi}>
                  <rect x={group[0][0]-8} y={group[0][1]-8} width="36" height="36"
                    stroke={law.accentColor} strokeWidth="0.5" opacity="0.2" rx="2"/>
                  {group.map(([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r="3.5" fill={law.accentColor} opacity="0.5"/>
                  ))}
                </g>
              ))}
            </svg>
          </div>
        </div>

        <div className="absolute font-display leading-none select-none pointer-events-none"
          style={{ fontSize: "clamp(7rem,20vw,18rem)", color: law.accentColor, opacity: 0.08, bottom: "-0.08em", left: "-0.04em" }}>
          03
        </div>
        <span className="page-number relative z-10">17</span>
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
        <div className="absolute bottom-5 right-7 page-number">18</div>
      </div>
    </div>
  );
}

const Law03Spread1 = { Left, Right };
export default Law03Spread1;
