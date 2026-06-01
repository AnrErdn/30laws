"use client";
import type { Law } from "@/types/law";

function Left({ law }: { law: Law }) {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <span className="category-tag text-white/20" style={{ letterSpacing: "0.2em" }}>Дижитал жишээ</span>
        <div className="flex-1 flex items-center justify-center py-3 relative z-10">
          <div className="w-full space-y-6">
            {/* Optimistic UI — Instagram like */}
            <div>
              <p className="font-mono text-white/20 mb-2" style={{ fontSize: "0.45rem", letterSpacing: "0.12em" }}>OPTIMISTIC UI — INSTAGRAM</p>
              <div style={{ border: "0.5px solid rgba(240,237,230,0.1)", padding: "10px", borderRadius: "2px" }}>
                <div className="flex items-center gap-3">
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(240,237,230,0.08)" }}/>
                  <div style={{ flex: 1 }}>
                    <div style={{ height: "4px", width: "80px", background: "rgba(240,237,230,0.12)", borderRadius: "1px", marginBottom: "4px" }}/>
                    <div style={{ height: "3px", width: "50px", background: "rgba(240,237,230,0.06)", borderRadius: "1px" }}/>
                  </div>
                </div>
                <div style={{ height: "60px", background: "rgba(240,237,230,0.04)", borderRadius: "2px", margin: "8px 0" }}/>
                <div className="flex items-center gap-3">
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <span style={{ fontSize: "1rem", color: law.accentColor, opacity: 0.7 }}>♥</span>
                    <span className="font-mono text-white/30" style={{ fontSize: "0.5rem" }}>1,024</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <span style={{ fontSize: "0.9rem" }}>💬</span>
                    <span className="font-mono text-white/20" style={{ fontSize: "0.5rem" }}>48</span>
                  </div>
                </div>
                <p className="font-mono mt-1" style={{ fontSize: "0.4rem", color: law.accentColor, opacity: 0.4 }}>← дарсны дараа тэр даруй улаан болно</p>
              </div>
            </div>

            {/* Delay comparison */}
            <div className="flex gap-2">
              <div style={{ flex: 1, border: "0.5px solid rgba(240,237,230,0.08)", padding: "8px", borderRadius: "2px" }}>
                <p className="font-mono text-white/20 mb-1" style={{ fontSize: "0.4rem" }}>ХОЙРДСОН</p>
                <div style={{ height: "4px", background: "rgba(240,237,230,0.06)", borderRadius: "2px" }}>
                  <div style={{ width: "30%", height: "100%", background: "rgba(240,237,230,0.2)", borderRadius: "2px" }}/>
                </div>
                <p className="font-sans text-white/20 mt-1" style={{ fontSize: "0.4rem" }}>800ms+ · итгэлгүй</p>
              </div>
              <div style={{ flex: 1, border: `0.5px solid ${law.accentColor}30`, padding: "8px", borderRadius: "2px" }}>
                <p className="font-mono mb-1" style={{ fontSize: "0.4rem", color: law.accentColor, opacity: 0.5 }}>OPTIMISTIC</p>
                <div style={{ height: "4px", background: "rgba(240,237,230,0.06)", borderRadius: "2px" }}>
                  <div style={{ width: "100%", height: "100%", background: law.accentColor, opacity: 0.4, borderRadius: "2px" }}/>
                </div>
                <p className="font-sans mt-1" style={{ fontSize: "0.4rem", color: law.accentColor, opacity: 0.4 }}>тэр даруй · итгэлтэй</p>
              </div>
            </div>
          </div>
        </div>
        <p className="font-mono text-white/20 relative z-10" style={{ fontSize: "0.55rem", letterSpacing: "0.15em" }}>FIG 11 — OPTIMISTIC UI</p>
        <span className="page-number">45</span>
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
            <p className="font-mono text-white/20 mb-2" style={{ fontSize: "0.45rem" }}>ХОЙРДСОН ХАРИУ</p>
            <p className="font-sans text-white/35 leading-relaxed" style={{ fontSize: "0.7rem" }}>Хэрэглэгч дахин дардаг. Итгэл буурна. Flow алдана.</p>
          </div>
          <div style={{ border: `0.5px solid ${law.accentColor}40`, padding: "10px", borderRadius: "2px" }}>
            <p className="font-mono mb-2" style={{ fontSize: "0.45rem", color: law.accentColor, opacity: 0.6 }}>OPTIMISTIC UI</p>
            <p className="font-sans text-white/35 leading-relaxed" style={{ fontSize: "0.7rem" }}>Тэр даруй хариу харуулна. Сервер ард нь ажилладаг.</p>
          </div>
        </div>
        <div className="absolute bottom-5 right-7 page-number">46</div>
      </div>
    </div>
  );
}

const Law06Spread3 = { Left, Right };
export default Law06Spread3;
