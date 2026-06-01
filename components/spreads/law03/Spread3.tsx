"use client";
import type { Law } from "@/types/law";

function Left({ law }: { law: Law }) {
  const sections = [
    { label: "PRIVACY", items: 4 },
    { label: "DISPLAY", items: 3 },
    { label: "NOTIFICATIONS", items: 5 },
    { label: "SOUNDS", items: 2 },
    { label: "GENERAL", items: 6 },
  ];

  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <span className="category-tag text-white/20" style={{ letterSpacing: "0.2em" }}>Дижитал жишээ</span>

        <div className="flex-1 flex items-center justify-center py-3 relative z-10">
          {/* iPhone Settings mockup */}
          <div style={{ width: "140px", border: "0.5px solid rgba(240,237,230,0.12)", borderRadius: "4px", overflow: "hidden" }}>
            <div style={{ background: "rgba(240,237,230,0.06)", padding: "6px 8px", borderBottom: "0.5px solid rgba(240,237,230,0.08)" }}>
              <p className="font-mono text-white/30" style={{ fontSize: "0.5rem", letterSpacing: "0.1em" }}>SETTINGS</p>
            </div>
            {sections.map((sec, si) => (
              <div key={si} style={{ borderBottom: "0.5px solid rgba(240,237,230,0.06)", padding: "6px 8px" }}>
                <p className="font-mono mb-1" style={{ fontSize: "0.4rem", letterSpacing: "0.12em", color: law.accentColor, opacity: 0.5 }}>{sec.label}</p>
                {Array.from({ length: sec.items }).map((_, i) => (
                  <div key={i} className="flex items-center justify-between mb-px">
                    <div style={{ height: "3px", width: `${50 + (i * 7) % 30}px`, background: "rgba(240,237,230,0.12)", borderRadius: "1px" }} />
                    <div style={{ height: "3px", width: "8px", background: "rgba(240,237,230,0.06)", borderRadius: "1px" }} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <p className="font-mono text-white/20 relative z-10" style={{ fontSize: "0.55rem", letterSpacing: "0.15em" }}>FIG 05 — SETTINGS CHUNKING</p>
        <span className="page-number">21</span>
      </div>
    </div>
  );
}

function Right({ law }: { law: Law }) {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content page-scroll h-full p-8 pb-14 overflow-y-auto">
        <div className="mb-5">
          <h2 className="category-tag mb-2" style={{ color: law.accentColor }}>Дижитал жишээ</h2>
          <h3 className="font-serif text-white/80 leading-tight" style={{ fontSize: "1.4rem" }}>{law.digitalExample.title}</h3>
        </div>
        <hr className="section-rule"/>
        <p className="font-sans text-white/65 leading-relaxed mb-6" style={{ fontSize: "0.85rem" }}>{law.digitalExample.description}</p>
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div style={{ border: "0.5px solid rgba(240,237,230,0.1)", padding: "10px", borderRadius: "2px" }}>
            <p className="font-mono text-white/20 mb-2" style={{ fontSize: "0.45rem" }}>200+ ТОХИРГОО НЭГЭД</p>
            <p className="font-sans text-white/35 leading-relaxed" style={{ fontSize: "0.7rem" }}>Хаанаас хайхаа мэдэхгүй болно.</p>
          </div>
          <div style={{ border: `0.5px solid ${law.accentColor}40`, padding: "10px", borderRadius: "2px" }}>
            <p className="font-mono mb-2" style={{ fontSize: "0.45rem", color: law.accentColor, opacity: 0.6 }}>ЛОГИК БҮЛГҮҮДЭД</p>
            <p className="font-sans text-white/35 leading-relaxed" style={{ fontSize: "0.7rem" }}>Хэрэглэгч хурдан олдог. Cognitive load буурна.</p>
          </div>
        </div>
        <div className="absolute bottom-5 right-7 page-number">22</div>
      </div>
    </div>
  );
}

const Law03Spread3 = { Left, Right };
export default Law03Spread3;
