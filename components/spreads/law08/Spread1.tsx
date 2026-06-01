"use client";
import type { Law } from "@/types/law";

function Left({ law }: { law: Law }) {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <span className="category-tag" style={{ color: law.accentColor }}>{law.categoryLabel}</span>
        <div className="flex-1 flex items-center justify-center py-4 relative z-10">
          <svg viewBox="0 0 240 240" fill="none" className="w-4/5 h-4/5 max-h-[210px]">
            {/* Axes */}
            <line x1="30" y1="210" x2="220" y2="210" stroke="rgba(240,237,230,0.12)" strokeWidth="0.8"/>
            <line x1="30" y1="210" x2="30" y2="20" stroke="rgba(240,237,230,0.12)" strokeWidth="0.8"/>
            <text x="125" y="225" textAnchor="middle" fontFamily="var(--font-dm-sans),sans-serif" fontSize="6" fill="rgba(240,237,230,0.2)">ДААЛГАВРЫН ХҮНДРЭЛ →</text>
            <text x="18" y="115" textAnchor="middle" fontFamily="var(--font-dm-sans),sans-serif" fontSize="6" fill="rgba(240,237,230,0.2)" transform="rotate(-90,18,115)">УР ЧАДВАР →</text>

            {/* Flow channel — diagonal band */}
            <path d="M30 190 L210 30" stroke={law.accentColor} strokeWidth="0.8" opacity="0.3"/>
            <path d="M30 210 L220 50" stroke={law.accentColor} strokeWidth="0.8" opacity="0.3"/>
            {/* Fill the channel */}
            <path d="M30 190 L210 30 L220 50 L30 210 Z" fill={law.accentColor} opacity="0.06"/>
            <text x="140" y="105" textAnchor="middle" fontFamily="var(--font-dm-sans),sans-serif" fontSize="7" fill={law.accentColor} opacity="0.5" transform="rotate(-42,140,105)">FLOW</text>

            {/* Boredom zone — below */}
            <text x="70" y="195" textAnchor="middle" fontFamily="var(--font-dm-sans),sans-serif" fontSize="6" fill="rgba(240,237,230,0.2)">УЙТГАР</text>

            {/* Anxiety zone — above */}
            <text x="185" y="80" textAnchor="middle" fontFamily="var(--font-dm-sans),sans-serif" fontSize="6" fill="rgba(240,237,230,0.2)">СТРЕСС</text>

            {/* Example dot in flow */}
            <circle cx="125" cy="110" r="5" fill={law.accentColor} opacity="0.5"/>
            <circle cx="125" cy="110" r="9" stroke={law.accentColor} strokeWidth="0.5" opacity="0.2"/>
          </svg>
        </div>
        <div className="absolute font-display leading-none select-none pointer-events-none"
          style={{ fontSize: "clamp(7rem,20vw,18rem)", color: law.accentColor, opacity: 0.08, bottom: "-0.08em", left: "-0.04em" }}>
          08
        </div>
        <span className="page-number relative z-10">57</span>
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
        <div className="absolute bottom-5 right-7 page-number">58</div>
      </div>
    </div>
  );
}

const Law08Spread1 = { Left, Right };
export default Law08Spread1;
