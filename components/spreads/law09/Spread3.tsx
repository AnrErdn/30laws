"use client";
import type { Law } from "@/types/law";

function Left({ law }: { law: Law }) {
  const steps = ["Нэр", "Дүр", "Туршлага", "Боловсрол", "Холбоо барих", "Ур чадвар", "Зураг"];
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <span className="category-tag text-white/20" style={{ letterSpacing: "0.2em" }}>Дижитал жишээ</span>
        <div className="flex-1 flex items-center justify-center py-3 relative z-10">
          {/* LinkedIn profile strength */}
          <div style={{ width: "160px" }}>
            <p className="font-mono text-white/20 mb-2 text-center" style={{ fontSize: "0.45rem", letterSpacing: "0.12em" }}>LINKEDIN ПРОФАЙЛ</p>
            <div style={{ border: "0.5px solid rgba(240,237,230,0.1)", padding: "10px", borderRadius: "2px" }}>
              {/* Profile header */}
              <div className="flex items-center gap-2 mb-3">
                <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: `${law.accentColor}20`, border: `0.5px solid ${law.accentColor}40` }}/>
                <div>
                  <div style={{ height: "4px", width: "60px", background: "rgba(240,237,230,0.15)", borderRadius: "1px", marginBottom: "3px" }}/>
                  <div style={{ height: "3px", width: "40px", background: "rgba(240,237,230,0.08)", borderRadius: "1px" }}/>
                </div>
              </div>
              {/* Strength bar */}
              <div className="mb-2">
                <div className="flex justify-between mb-1">
                  <span className="font-mono text-white/25" style={{ fontSize: "0.38rem" }}>Профайлын хүч</span>
                  <span className="font-mono" style={{ fontSize: "0.38rem", color: law.accentColor, opacity: 0.6 }}>All-Star</span>
                </div>
                <div style={{ height: "4px", background: "rgba(240,237,230,0.06)", borderRadius: "2px" }}>
                  <div style={{ width: "72%", height: "100%", background: law.accentColor, opacity: 0.5, borderRadius: "2px" }}/>
                </div>
              </div>
              {/* Steps */}
              {steps.map((s, i) => (
                <div key={i} className="flex items-center gap-2 mb-px">
                  <div style={{
                    width: "6px", height: "6px", borderRadius: "50%", flexShrink: 0,
                    background: i < 5 ? law.accentColor : "rgba(240,237,230,0.1)",
                    opacity: i < 5 ? 0.5 : 1,
                  }}/>
                  <div style={{ height: "3px", flex: 1, background: i < 5 ? `${law.accentColor}25` : "rgba(240,237,230,0.06)", borderRadius: "1px" }}/>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="font-mono text-white/20 relative z-10" style={{ fontSize: "0.55rem", letterSpacing: "0.15em" }}>FIG 17 — PROFILE STRENGTH</p>
        <span className="page-number">69</span>
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
            <p className="font-mono text-white/20 mb-2" style={{ fontSize: "0.45rem" }}>0%-АС ЭХЛЭХ</p>
            <p className="font-sans text-white/35 leading-relaxed" style={{ fontSize: "0.7rem" }}>Хэрэглэгч дунд замд орхих магадлал өндөр.</p>
          </div>
          <div style={{ border: `0.5px solid ${law.accentColor}40`, padding: "10px", borderRadius: "2px" }}>
            <p className="font-mono mb-2" style={{ fontSize: "0.45rem", color: law.accentColor, opacity: 0.6 }}>20% ДҮҮРСЭН</p>
            <p className="font-sans text-white/35 leading-relaxed" style={{ fontSize: "0.7rem" }}>Дуусгах магадлал 82% нэмэгдэнэ. Аль хэдийн явсан мэт мэдрэгдэнэ.</p>
          </div>
        </div>
        <div className="absolute bottom-5 right-7 page-number">70</div>
      </div>
    </div>
  );
}

const Law09Spread3 = { Left, Right };
export default Law09Spread3;
