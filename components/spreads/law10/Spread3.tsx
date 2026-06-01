"use client";
import type { Law } from "@/types/law";

function Left({ law }: { law: Law }) {
  const plans = [
    { name: "Basic", price: "₮5,990", features: 3 },
    { name: "Standard", price: "₮12,990", features: 5 },
    { name: "Premium", price: "₮19,990", features: 7 },
  ];
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <span className="category-tag text-white/20" style={{ letterSpacing: "0.2em" }}>Дижитал жишээ</span>
        <div className="flex-1 flex items-center justify-center py-3 relative z-10">
          <div className="w-full">
            <p className="font-mono text-white/20 mb-3 text-center" style={{ fontSize: "0.45rem", letterSpacing: "0.12em" }}>NETFLIX — 3 ТӨЛӨВЛӨГӨӨ</p>
            <div className="grid grid-cols-3 gap-2">
              {plans.map((p, i) => (
                <div key={i} style={{
                  border: `0.5px solid ${i === 1 ? law.accentColor : "rgba(240,237,230,0.1)"}40`,
                  padding: "8px",
                  borderRadius: "2px",
                  background: i === 1 ? `${law.accentColor}06` : "transparent",
                  position: "relative",
                }}>
                  {i === 1 && <div style={{ position: "absolute", top: "-7px", left: "50%", transform: "translateX(-50%)", background: law.accentColor, padding: "1px 5px", borderRadius: "1px" }}>
                    <span className="font-mono" style={{ fontSize: "0.32rem", color: "#000", letterSpacing: "0.05em" }}>POPULAR</span>
                  </div>}
                  <p className="font-sans text-white/50 text-center mb-1" style={{ fontSize: "0.5rem" }}>{p.name}</p>
                  <p className="font-mono text-center mb-2" style={{ fontSize: "0.65rem", color: i === 1 ? law.accentColor : "rgba(240,237,230,0.4)", opacity: 0.8 }}>{p.price}</p>
                  {Array.from({ length: p.features }).map((_, j) => (
                    <div key={j} style={{ height: "2.5px", background: i === 1 ? `${law.accentColor}30` : "rgba(240,237,230,0.06)", borderRadius: "1px", marginBottom: "2px" }}/>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="font-mono text-white/20 relative z-10" style={{ fontSize: "0.55rem", letterSpacing: "0.15em" }}>FIG 19 — LIMITED PLAN OPTIONS</p>
        <span className="page-number">77</span>
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
            <p className="font-mono text-white/20 mb-2" style={{ fontSize: "0.45rem" }}>10+ СОНГОЛТ</p>
            <p className="font-sans text-white/35 leading-relaxed" style={{ fontSize: "0.7rem" }}>Шийдвэр гаргахад удаан. Conversion буурна.</p>
          </div>
          <div style={{ border: `0.5px solid ${law.accentColor}40`, padding: "10px", borderRadius: "2px" }}>
            <p className="font-mono mb-2" style={{ fontSize: "0.45rem", color: law.accentColor, opacity: 0.6 }}>3 СОНГОЛТ</p>
            <p className="font-sans text-white/35 leading-relaxed" style={{ fontSize: "0.7rem" }}>Хурдан шийдвэр. Conversion нэмэгдэнэ. Hick&apos;s Law дагасан.</p>
          </div>
        </div>
        <div className="absolute bottom-5 right-7 page-number">78</div>
      </div>
    </div>
  );
}

const Law10Spread3 = { Left, Right };
export default Law10Spread3;
