"use client";
import type { Law } from "@/types/law";

function Left({ law }: { law: Law }) {
  const oldButtons = Array.from({ length: 40 });
  const newButtons = ["▶", "⏸", "◀", "☰", "⌂", "🔊"];
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <span className="category-tag text-white/20" style={{ letterSpacing: "0.2em" }}>Бодит жишээ</span>
        <div className="flex-1 flex items-center justify-center py-3 relative z-10">
          <div className="grid grid-cols-2 gap-4 w-full">
            {/* Old remote */}
            <div style={{ border: "0.5px solid rgba(240,237,230,0.1)", padding: "8px", borderRadius: "4px" }}>
              <p className="font-mono text-white/20 mb-2 text-center" style={{ fontSize: "0.4rem" }}>80-АД ОНЫ ПУЛЬТ</p>
              <div className="grid grid-cols-5 gap-px">
                {oldButtons.map((_, i) => (
                  <div key={i} style={{ width: "100%", aspectRatio: "1", background: "rgba(240,237,230,0.06)", borderRadius: "1px", border: "0.3px solid rgba(240,237,230,0.08)" }}/>
                ))}
              </div>
              <p className="font-mono text-white/15 mt-2 text-center" style={{ fontSize: "0.38rem" }}>40+ товч</p>
            </div>
            {/* Apple TV remote */}
            <div style={{ border: `0.5px solid ${law.accentColor}35`, padding: "8px", borderRadius: "4px" }}>
              <p className="font-mono mb-2 text-center" style={{ fontSize: "0.4rem", color: law.accentColor, opacity: 0.5 }}>APPLE TV REMOTE</p>
              <div className="grid grid-cols-2 gap-2" style={{ marginTop: "8px" }}>
                {newButtons.map((btn, i) => (
                  <div key={i} style={{ padding: "6px", textAlign: "center", border: `0.5px solid ${law.accentColor}25`, borderRadius: "2px", background: `${law.accentColor}08`, fontSize: "0.7rem" }}>
                    {btn}
                  </div>
                ))}
              </div>
              <p className="font-mono mt-2 text-center" style={{ fontSize: "0.38rem", color: law.accentColor, opacity: 0.4 }}>6 товч</p>
            </div>
          </div>
        </div>
        <p className="font-mono text-white/20 relative z-10" style={{ fontSize: "0.55rem", letterSpacing: "0.15em" }}>FIG 18 — REMOTE EVOLUTION</p>
        <span className="page-number">75</span>
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
            &ldquo;Сонголт багасах нь алдагдал биш — хурдан шийдвэр гаргах чөлөө.&rdquo;
          </p>
        </div>
        <div className="mt-5">
          <h4 className="category-tag mb-2" style={{ color: law.accentColor, opacity: 0.7 }}>Яагаад ажилладаг вэ</h4>
          <p className="font-sans text-white/50 leading-relaxed" style={{ fontSize: "0.78rem" }}>
            William Edmund Hick 1952 онд нотолсон: шийдвэр гаргах хугацаа нь сонголтын тооны логарифмтай пропорциональ. Apple TV remote нь Hick&apos;s Law-г hardware-д хэрэгжүүлсэн тод жишээ.
          </p>
        </div>
        <div className="absolute bottom-5 right-7 page-number">76</div>
      </div>
    </div>
  );
}

const Law10Spread2 = { Left, Right };
export default Law10Spread2;
