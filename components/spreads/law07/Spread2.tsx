"use client";
import type { Law } from "@/types/law";

function Left({ law }: { law: Law }) {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <span className="category-tag text-white/20" style={{ letterSpacing: "0.2em" }}>Бодит жишээ</span>
        <div className="flex-1 flex items-center justify-center py-3 relative z-10">
          <svg viewBox="0 0 200 200" fill="none" className="w-4/5" style={{ maxHeight: "200px" }}>
            {/* Small handle */}
            <rect x="20" y="70" width="60" height="60" stroke="rgba(240,237,230,0.12)" strokeWidth="0.8" rx="2"/>
            <rect x="38" y="88" width="8" height="24" stroke="rgba(240,237,230,0.2)" strokeWidth="0.8" rx="1"/>
            <text x="50" y="150" textAnchor="middle" fontFamily="var(--font-dm-sans),sans-serif" fontSize="6" fill="rgba(240,237,230,0.2)">нарийн бариул</text>
            <text x="50" y="160" textAnchor="middle" fontFamily="var(--font-dm-sans),sans-serif" fontSize="5.5" fill="rgba(240,237,230,0.15)">ХЭЦҮҮ</text>

            {/* Large handle */}
            <rect x="110" y="50" width="70" height="80" stroke={law.accentColor} strokeWidth="0.8" opacity="0.3" rx="2"/>
            <rect x="128" y="72" width="16" height="36" stroke={law.accentColor} strokeWidth="0.8" opacity="0.5" rx="2"/>
            <text x="145" y="150" textAnchor="middle" fontFamily="var(--font-dm-sans),sans-serif" fontSize="6" fill={law.accentColor} opacity="0.4">том бариул</text>
            <text x="145" y="160" textAnchor="middle" fontFamily="var(--font-dm-sans),sans-serif" fontSize="5.5" fill={law.accentColor} opacity="0.3">ХЯЛБАР</text>

            {/* Hand icon reaching */}
            <path d="M145 185 Q155 175 155 165" stroke={law.accentColor} strokeWidth="1" opacity="0.25" strokeDasharray="3,2"/>
          </svg>
        </div>
        <p className="font-mono text-white/20 relative z-10" style={{ fontSize: "0.55rem", letterSpacing: "0.15em" }}>FIG 12 — DOOR HANDLE SIZE</p>
        <span className="page-number">51</span>
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
            &ldquo;Хамгийн их ашиглагддаг элементийг хамгийн хялбар хүрэх газарт, хамгийн том хэмжээтэй байрлуул.&rdquo;
          </p>
        </div>
        <div className="mt-5">
          <h4 className="category-tag mb-2" style={{ color: law.accentColor, opacity: 0.7 }}>Яагаад ажилладаг вэ</h4>
          <p className="font-sans text-white/50 leading-relaxed" style={{ fontSize: "0.78rem" }}>
            Paul Fitts 1954 онд нотолсон: зорилтот цэг том байх тусам, ойр байх тусам дарах хугацаа логарифмаар багасдаг. Apple-ийн 44×44pt хамгийн бага товчлуурын стандарт энэ хуульд тулгуурласан.
          </p>
        </div>
        <div className="absolute bottom-5 right-7 page-number">52</div>
      </div>
    </div>
  );
}

const Law07Spread2 = { Left, Right };
export default Law07Spread2;
