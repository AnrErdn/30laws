"use client";
import type { Law } from "@/types/law";

function Left({ law }: { law: Law }) {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <span className="category-tag text-white/20" style={{ letterSpacing: "0.2em" }}>Бодит жишээ</span>
        <div className="flex-1 flex items-center justify-center py-3 relative z-10">
          <svg viewBox="0 0 200 220" fill="none" className="w-4/5" style={{ maxHeight: "200px" }}>
            {/* Elevator door */}
            <rect x="40" y="20" width="120" height="160" stroke="rgba(240,237,230,0.12)" strokeWidth="0.8" rx="2"/>
            <line x1="100" y1="20" x2="100" y2="180" stroke="rgba(240,237,230,0.08)" strokeWidth="0.5"/>
            {/* Button panel */}
            <rect x="148" y="60" width="22" height="70" stroke="rgba(240,237,230,0.1)" strokeWidth="0.5" rx="2"/>
            <circle cx="159" cy="78" r="5" stroke={law.accentColor} strokeWidth="0.8" opacity="0.5"/>
            <circle cx="159" cy="95" r="5" stroke="rgba(240,237,230,0.2)" strokeWidth="0.5"/>
            <circle cx="159" cy="112" r="5" stroke="rgba(240,237,230,0.2)" strokeWidth="0.5"/>

            {/* Press indicator */}
            <circle cx="159" cy="78" r="5" fill={law.accentColor} opacity="0.2"/>
            <text x="159" y="81" textAnchor="middle" fontFamily="var(--font-dm-mono),monospace" fontSize="5" fill={law.accentColor} opacity="0.6">▶</text>

            {/* Timeline below */}
            <line x1="30" y1="200" x2="170" y2="200" stroke="rgba(240,237,230,0.1)" strokeWidth="0.8"/>
            <circle cx="30" cy="200" r="3" fill={law.accentColor} opacity="0.4"/>
            <text x="30" y="212" textAnchor="middle" fontFamily="var(--font-dm-mono),monospace" fontSize="5" fill="rgba(240,237,230,0.2)">дарав</text>

            <circle cx="100" cy="200" r="3" fill={law.accentColor} opacity="0.25"/>
            <text x="100" y="212" textAnchor="middle" fontFamily="var(--font-dm-mono),monospace" fontSize="5" fill={law.accentColor} opacity="0.4">400ms</text>

            <circle cx="170" cy="200" r="3" fill="rgba(240,237,230,0.15)"/>
            <text x="170" y="212" textAnchor="middle" fontFamily="var(--font-dm-mono),monospace" fontSize="5" fill="rgba(240,237,230,0.2)">800ms+</text>

            <path d="M30 197 L100 197" stroke={law.accentColor} strokeWidth="1" opacity="0.4"/>
            <path d="M100 197 L170 197" stroke="rgba(240,237,230,0.1)" strokeWidth="1" strokeDasharray="3,2"/>
          </svg>
        </div>
        <p className="font-mono text-white/20 relative z-10" style={{ fontSize: "0.55rem", letterSpacing: "0.15em" }}>FIG 10 — RESPONSE TIME DIAGRAM</p>
        <span className="page-number">43</span>
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
            &ldquo;Хариу дохиогүй систем нь хэрэглэгчийн итгэлийг алддаг — ажилласан эсэхийг мэдэхгүй байх нь хамгийн их бухимдал төрүүлдэг.&rdquo;
          </p>
        </div>
        <div className="mt-5">
          <h4 className="category-tag mb-2" style={{ color: law.accentColor, opacity: 0.7 }}>Яагаад ажилладаг вэ</h4>
          <p className="font-sans text-white/50 leading-relaxed" style={{ fontSize: "0.78rem" }}>
            400ms бол тархины анхаарал таслах босго. Үүнээс удаан бол хэрэглэгч бодлоо өөр зүйл рүү шилжүүлж, &ldquo;flow&rdquo; алдана. IBM-ийн 1982 оны судалгаагаар энэ босгыг тогтоосон.
          </p>
        </div>
        <div className="absolute bottom-5 right-7 page-number">44</div>
      </div>
    </div>
  );
}

const Law06Spread2 = { Left, Right };
export default Law06Spread2;
