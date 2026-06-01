"use client";
import type { Law } from "@/types/law";

function Left({ law }: { law: Law }) {
  const levels = [
    { week: "1-р долоо хоног", diff: 20 },
    { week: "2-р долоо хоног", diff: 35 },
    { week: "3-р долоо хоног", diff: 50 },
    { week: "4-р долоо хоног", diff: 65 },
    { week: "5-р долоо хоног", diff: 80 },
  ];
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <span className="category-tag text-white/20" style={{ letterSpacing: "0.2em" }}>Дижитал жишээ</span>
        <div className="flex-1 flex items-center justify-center py-3 relative z-10">
          <div className="w-full">
            <p className="font-mono text-white/20 mb-3 text-center" style={{ fontSize: "0.45rem", letterSpacing: "0.15em" }}>DUOLINGO — ХҮНДРЭЛИЙН ОГЦРОЛ</p>
            <div className="space-y-2">
              {levels.map((l, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="font-mono text-white/20" style={{ fontSize: "0.4rem", width: "80px", flexShrink: 0 }}>{l.week}</span>
                  <div style={{ flex: 1, height: "8px", background: "rgba(240,237,230,0.04)", borderRadius: "2px", position: "relative", overflow: "hidden" }}>
                    <div style={{ width: `${l.diff}%`, height: "100%", background: law.accentColor, opacity: 0.4 + i * 0.08, borderRadius: "2px", transition: "width 0.3s" }}/>
                  </div>
                  <span className="font-mono" style={{ fontSize: "0.4rem", color: law.accentColor, opacity: 0.4, width: "24px" }}>{l.diff}%</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-3">
              <span className="font-sans text-white/20" style={{ fontSize: "0.45rem" }}>хялбар</span>
              <span className="font-sans text-white/20" style={{ fontSize: "0.45rem" }}>flow zone</span>
              <span className="font-sans text-white/20" style={{ fontSize: "0.45rem" }}>хэцүү</span>
            </div>
          </div>
        </div>
        <p className="font-mono text-white/20 relative z-10" style={{ fontSize: "0.55rem", letterSpacing: "0.15em" }}>FIG 15 — DUOLINGO DIFFICULTY CURVE</p>
        <span className="page-number">61</span>
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
            <p className="font-mono text-white/20 mb-2" style={{ fontSize: "0.45rem" }}>ХЭТ ХЯЛБАР</p>
            <p className="font-sans text-white/35 leading-relaxed" style={{ fontSize: "0.7rem" }}>Хэрэглэгч залхаж орхино. Retention буурна.</p>
          </div>
          <div style={{ border: `0.5px solid ${law.accentColor}40`, padding: "10px", borderRadius: "2px" }}>
            <p className="font-mono mb-2" style={{ fontSize: "0.45rem", color: law.accentColor, opacity: 0.6 }}>ЯГАА ДУНД</p>
            <p className="font-sans text-white/35 leading-relaxed" style={{ fontSize: "0.7rem" }}>Flow. Хэрэглэгч "дахин нэгийг хий" гэж мэдэрнэ.</p>
          </div>
        </div>
        <div className="absolute bottom-5 right-7 page-number">62</div>
      </div>
    </div>
  );
}

const Law08Spread3 = { Left, Right };
export default Law08Spread3;
