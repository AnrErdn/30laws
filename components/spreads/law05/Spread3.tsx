"use client";
import type { Law } from "@/types/law";

function Left({ law }: { law: Law }) {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <span className="category-tag text-white/20" style={{ letterSpacing: "0.2em" }}>Дижитал жишээ</span>
        <div className="flex-1 flex items-center justify-center py-3 relative z-10">
          <div className="grid grid-cols-2 gap-3 w-full">
            {/* Cluttered page */}
            <div style={{ border: "0.5px solid rgba(240,237,230,0.1)", padding: "8px", borderRadius: "2px" }}>
              <p className="font-mono text-white/20 mb-2" style={{ fontSize: "0.4rem" }}>ЕРДИЙН ХУУДАС</p>
              <div className="space-y-1">
                <div style={{ height: "8px", background: "rgba(240,237,230,0.12)", borderRadius: "1px" }}/>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => <div key={i} style={{ height: "5px", flex: 1, background: "rgba(240,237,230,0.08)", borderRadius: "1px" }}/>)}
                </div>
                <div style={{ height: "6px", background: "rgba(240,237,230,0.06)", borderRadius: "1px", width: "80%" }}/>
                <div className="flex gap-1">
                  {[1,2,3].map(i => <div key={i} style={{ height: "18px", flex: 1, background: "rgba(240,237,230,0.05)", borderRadius: "1px" }}/>)}
                </div>
                <div style={{ height: "5px", background: "rgba(240,237,230,0.08)", borderRadius: "1px" }}/>
                <div className="flex gap-1">
                  {[1,2,3,4].map(i => <div key={i} style={{ height: "4px", flex: 1, background: "rgba(240,237,230,0.06)", borderRadius: "1px" }}/>)}
                </div>
                <div style={{ height: "6px", background: "rgba(240,237,230,0.1)", borderRadius: "1px", width: "60%" }}/>
                <div style={{ height: "5px", background: "rgba(240,237,230,0.05)", borderRadius: "1px" }}/>
              </div>
            </div>
            {/* Google minimal */}
            <div style={{ border: `0.5px solid ${law.accentColor}40`, padding: "8px", borderRadius: "2px" }}>
              <p className="font-mono mb-2" style={{ fontSize: "0.4rem", color: law.accentColor, opacity: 0.5 }}>GOOGLE ХУУДАС</p>
              <div className="flex flex-col items-center gap-3 mt-4">
                <div style={{ width: "32px", height: "8px", background: `${law.accentColor}30`, borderRadius: "1px" }}/>
                <div style={{ width: "90%", height: "10px", border: `0.5px solid ${law.accentColor}30`, borderRadius: "6px" }}/>
                <div className="flex gap-2">
                  <div style={{ height: "6px", width: "32px", background: `${law.accentColor}20`, borderRadius: "1px" }}/>
                  <div style={{ height: "6px", width: "32px", background: `${law.accentColor}20`, borderRadius: "1px" }}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="font-mono text-white/20 relative z-10" style={{ fontSize: "0.55rem", letterSpacing: "0.15em" }}>FIG 09 — MINIMAL VS CLUTTERED</p>
        <span className="page-number">37</span>
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
            <p className="font-mono text-white/20 mb-2" style={{ fontSize: "0.45rem" }}>ОЛОН ЭЛЕМЕНТ</p>
            <p className="font-sans text-white/35 leading-relaxed" style={{ fontSize: "0.7rem" }}>Тархи юунд анхаарахаа мэдэхгүй болно. Cognitive load нэмэгдэнэ.</p>
          </div>
          <div style={{ border: `0.5px solid ${law.accentColor}40`, padding: "10px", borderRadius: "2px" }}>
            <p className="font-mono mb-2" style={{ fontSize: "0.45rem", color: law.accentColor, opacity: 0.6 }}>НЭГ ЗОРИЛГО</p>
            <p className="font-sans text-white/35 leading-relaxed" style={{ fontSize: "0.7rem" }}>Нэг л зүйл хийх — хайлт. Бусад бүхнийг нуусан. Хамгийн бага cognitive load.</p>
          </div>
        </div>
        <div className="absolute bottom-5 right-7 page-number">38</div>
      </div>
    </div>
  );
}

const Law05Spread3 = { Left, Right };
export default Law05Spread3;
