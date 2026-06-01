"use client";
import type { Law } from "@/types/law";

function Left({ law }: { law: Law }) {
  const steps = [
    { icon: "□", label: "АЛХАМ 1" },
    { icon: "↓", label: "" },
    { icon: "⟳", label: "АЛХАМ 2" },
    { icon: "↓", label: "" },
    { icon: "△", label: "АЛХАМ 3" },
    { icon: "↓", label: "" },
    { icon: "●", label: "АЛХАМ 4" },
  ];

  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <span className="category-tag text-white/20" style={{ letterSpacing: "0.2em" }}>Бодит жишээ</span>
        <div className="flex-1 flex items-center justify-center py-3 relative z-10">
          <div style={{ width: "130px" }}>
            <p className="font-mono text-white/20 mb-3 text-center" style={{ fontSize: "0.45rem", letterSpacing: "0.15em" }}>IKEA — ЗУРАГ ЗААВАРЧИЛГАА</p>
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                {s.label
                  ? <div style={{ border: `0.5px solid ${law.accentColor}35`, width: "50px", height: "44px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", borderRadius: "2px" }}>
                      <span style={{ fontSize: "1.1rem", color: law.accentColor, opacity: 0.5 }}>{s.icon}</span>
                      <span className="font-mono" style={{ fontSize: "0.35rem", color: law.accentColor, opacity: 0.3, marginTop: "2px" }}>{s.label}</span>
                    </div>
                  : <span style={{ fontSize: "0.8rem", color: law.accentColor, opacity: 0.2, margin: "2px 0" }}>{s.icon}</span>
                }
              </div>
            ))}
            <p className="font-mono text-white/15 mt-3 text-center" style={{ fontSize: "0.4rem" }}>Үг байхгүй — зөвхөн дүрс</p>
          </div>
        </div>
        <p className="font-mono text-white/20 relative z-10" style={{ fontSize: "0.55rem", letterSpacing: "0.15em" }}>FIG 08 — IKEA PICTOGRAM</p>
        <span className="page-number">35</span>
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
            &ldquo;Хамгийн шилдэг дизайн хэрэглэгчийг ажлыг нь хийхэд тусалдаг — тухайн ажлыг хэрхэн хийхийг заадаггүй.&rdquo;
          </p>
        </div>
        <div className="mt-5">
          <h4 className="category-tag mb-2" style={{ color: law.accentColor, opacity: 0.7 }}>Яагаад ажилладаг вэ</h4>
          <p className="font-sans text-white/50 leading-relaxed" style={{ fontSize: "0.78rem" }}>
            Зураг нь хэлнээс үл хамааран ойлгогддог, мөн текстээс 60,000 дахин хурдан боловсруулагддаг. IKEA-ийн заавар дэлхийн аль ч улсын хэрэглэгчид ойлгомжтой байдаг.
          </p>
        </div>
        <div className="absolute bottom-5 right-7 page-number">36</div>
      </div>
    </div>
  );
}

const Law05Spread2 = { Left, Right };
export default Law05Spread2;
