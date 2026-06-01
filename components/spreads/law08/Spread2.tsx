"use client";
import type { Law } from "@/types/law";

function Left({ law }: { law: Law }) {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <span className="category-tag text-white/20" style={{ letterSpacing: "0.2em" }}>Бодит жишээ</span>
        <div className="flex-1 flex items-center justify-center py-3 relative z-10">
          <svg viewBox="0 0 200 200" fill="none" className="w-4/5" style={{ maxHeight: "200px" }}>
            {/* Chessboard simplified */}
            {[0,1,2,3].map(row => [0,1,2,3].map(col => (
              <rect key={`${row}-${col}`}
                x={40 + col * 28} y={20 + row * 28} width="27" height="27"
                fill={(row + col) % 2 === 0 ? "rgba(240,237,230,0.06)" : "rgba(240,237,230,0.02)"}
                stroke="rgba(240,237,230,0.08)" strokeWidth="0.3"
              />
            )))}
            {/* Two equal players label */}
            <text x="68" y="138" textAnchor="middle" fontFamily="var(--font-dm-sans),sans-serif" fontSize="7" fill={law.accentColor} opacity="0.5">A</text>
            <text x="80" y="148" textAnchor="middle" fontFamily="var(--font-dm-sans),sans-serif" fontSize="6" fill="rgba(240,237,230,0.2)">VS</text>
            <text x="92" y="138" textAnchor="middle" fontFamily="var(--font-dm-sans),sans-serif" fontSize="7" fill={law.accentColor} opacity="0.5">B</text>
            {/* Equal sign */}
            <text x="80" y="165" textAnchor="middle" fontFamily="var(--font-dm-mono),monospace" fontSize="9" fill={law.accentColor} opacity="0.3">тэнцүү ур чадвар</text>

            {/* Flow arrow */}
            <path d="M30 180 Q80 160 130 180" stroke={law.accentColor} strokeWidth="1" opacity="0.3" fill="none"/>
            <text x="80" y="195" textAnchor="middle" fontFamily="var(--font-dm-sans),sans-serif" fontSize="6" fill={law.accentColor} opacity="0.4">FLOW ZONE</text>
          </svg>
        </div>
        <p className="font-mono text-white/20 relative z-10" style={{ fontSize: "0.55rem", letterSpacing: "0.15em" }}>FIG 14 — EQUAL MATCH = FLOW</p>
        <span className="page-number">59</span>
      </div>
    </div>
  );
}

function Right({ law }: { law: Law }) {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content page-scroll h-full p-8 pb-14 overflow-y-auto">
        <div className="mb-5">
          <h2 className="category-tag mb-2" style={{ color: law.accentColor }}>Бодит жишээ</h2>
          <h3 className="font-serif text-white/80 leading-tight" style={{ fontSize: "1.4rem" }}>{law.physicalExample.title}</h3>
        </div>
        <hr className="section-rule"/>
        <p className="font-sans text-white/65 leading-relaxed mb-6" style={{ fontSize: "0.85rem" }}>{law.physicalExample.description}</p>
        <div className="p-4 my-5" style={{ borderLeft: `2px solid ${law.accentColor}`, background: `${law.accentColor}08` }}>
          <p className="font-serif italic text-white/75 leading-relaxed" style={{ fontSize: "0.85rem" }}>
            &ldquo;Flow нь тохиолдлоор ирдэггүй — урьдчилан тооцоолж дизайн хийгддэг.&rdquo;
          </p>
        </div>
        <div className="mt-5">
          <h4 className="category-tag mb-2" style={{ color: law.accentColor, opacity: 0.7 }}>Яагаад ажилладаг вэ</h4>
          <p className="font-sans text-white/50 leading-relaxed" style={{ fontSize: "0.78rem" }}>
            Mihaly Csikszentmihalyi-ийн судалгаагаар flow нь ур чадвар болон даалгаврын хүндрэл тэнцвэртэй байхад л үүсдэг. Хэт хялбар → уйтгар. Хэт хэцүү → стресс. Яг тэр дундаж — flow.
          </p>
        </div>
        <div className="absolute bottom-5 right-7 page-number">60</div>
      </div>
    </div>
  );
}

const Law08Spread2 = { Left, Right };
export default Law08Spread2;
