"use client";
import type { Law } from "@/types/law";

function Left({ law }: { law: Law }) {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <span className="category-tag text-white/20" style={{ letterSpacing: "0.2em" }}>Дижитал жишээ</span>
        <div className="flex-1 flex items-center justify-center py-3 relative z-10">
          {/* Booking.com urgency mockup */}
          <div style={{ width: "170px", border: "0.5px solid rgba(240,237,230,0.12)", borderRadius: "3px", overflow: "hidden" }}>
            <div style={{ background: "rgba(240,237,230,0.04)", padding: "8px" }}>
              <div style={{ height: "50px", background: "rgba(240,237,230,0.05)", borderRadius: "2px", marginBottom: "6px" }}/>
              <p className="font-serif text-white/50" style={{ fontSize: "0.65rem" }}>Deluxe Room</p>
              <p className="font-mono" style={{ fontSize: "0.9rem", color: law.accentColor, opacity: 0.7 }}>₮180,000</p>
            </div>
            <div style={{ padding: "6px 8px", background: "rgba(180,74,74,0.08)", borderTop: "0.5px solid rgba(180,74,74,0.2)" }}>
              <p className="font-sans" style={{ fontSize: "0.5rem", color: "#B04A4A", opacity: 0.8 }}>🔥 Зөвхөн 2 өрөө үлдсэн!</p>
            </div>
            <div style={{ padding: "6px 8px", borderTop: "0.5px solid rgba(240,237,230,0.06)" }}>
              <p className="font-sans text-white/25" style={{ fontSize: "0.45rem" }}>👁 15 хүн одоо харж байна</p>
              <p className="font-sans text-white/20 mt-1" style={{ fontSize: "0.45rem" }}>⏰ Энэ үнэ 10 мин хүчинтэй</p>
            </div>
            <div style={{ padding: "8px" }}>
              <div style={{ background: law.accentColor, opacity: 0.7, borderRadius: "2px", padding: "6px", textAlign: "center" }}>
                <p className="font-sans text-white" style={{ fontSize: "0.55rem", letterSpacing: "0.1em" }}>ЗАХИАЛАХ</p>
              </div>
            </div>
          </div>
        </div>
        <p className="font-mono text-white/20 relative z-10" style={{ fontSize: "0.55rem", letterSpacing: "0.15em" }}>FIG 07 — SCARCITY BIAS UI</p>
        <span className="page-number">29</span>
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
            <p className="font-mono text-white/20 mb-2" style={{ fontSize: "0.45rem" }}>DARK PATTERN</p>
            <p className="font-sans text-white/35 leading-relaxed" style={{ fontSize: "0.7rem" }}>Хэрэглэгчийг манипуляц хийхэд ашиглах — этик бус.</p>
          </div>
          <div style={{ border: `0.5px solid ${law.accentColor}40`, padding: "10px", borderRadius: "2px" }}>
            <p className="font-mono mb-2" style={{ fontSize: "0.45rem", color: law.accentColor, opacity: 0.6 }}>ЗӨВ ХЭРЭГЛЭЛТ</p>
            <p className="font-sans text-white/35 leading-relaxed" style={{ fontSize: "0.7rem" }}>Үнэн мэдээлэл байвал шийдвэр гаргахад тусалдаг.</p>
          </div>
        </div>
        <div className="absolute bottom-5 right-7 page-number">30</div>
      </div>
    </div>
  );
}

const Law04Spread3 = { Left, Right };
export default Law04Spread3;
