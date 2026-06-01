"use client";
import type { Law } from "@/types/law";

function Left({ law }: { law: Law }) {
  const navItems = ["Нүүр", "Хайх", "Нэмэх", "Мэдэгдэл", "Профайл"];
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <span className="category-tag text-white/20" style={{ letterSpacing: "0.2em" }}>Дижитал жишээ</span>
        <div className="flex-1 flex items-center justify-center py-3 relative z-10">
          {/* Phone mockup with bottom nav */}
          <div style={{ width: "120px", border: "0.5px solid rgba(240,237,230,0.12)", borderRadius: "12px", overflow: "hidden", padding: "0" }}>
            {/* Screen content */}
            <div style={{ height: "140px", background: "rgba(240,237,230,0.02)", padding: "10px" }}>
              <div style={{ height: "6px", width: "60%", background: "rgba(240,237,230,0.1)", borderRadius: "1px", marginBottom: "6px" }}/>
              <div style={{ height: "4px", width: "80%", background: "rgba(240,237,230,0.06)", borderRadius: "1px", marginBottom: "4px" }}/>
              <div style={{ height: "4px", width: "70%", background: "rgba(240,237,230,0.06)", borderRadius: "1px" }}/>
              <div style={{ height: "50px", background: "rgba(240,237,230,0.04)", borderRadius: "2px", marginTop: "8px" }}/>
            </div>
            {/* Bottom nav */}
            <div style={{ borderTop: `0.5px solid ${law.accentColor}30`, padding: "8px 4px", background: "rgba(240,237,230,0.02)", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
              {navItems.map((item, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
                  <div style={{
                    width: "20px", height: "20px", borderRadius: "4px",
                    background: i === 0 ? `${law.accentColor}25` : "rgba(240,237,230,0.04)",
                    border: i === 0 ? `0.5px solid ${law.accentColor}50` : "0.5px solid rgba(240,237,230,0.06)",
                    display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "1px", background: i === 0 ? law.accentColor : "rgba(240,237,230,0.15)", opacity: i === 0 ? 0.6 : 1 }}/>
                  </div>
                  <span style={{ fontSize: "0.28rem", fontFamily: "var(--font-dm-sans)", color: i === 0 ? law.accentColor : "rgba(240,237,230,0.2)", opacity: 0.8 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="font-mono text-white/20 relative z-10" style={{ fontSize: "0.55rem", letterSpacing: "0.15em" }}>FIG 13 — BOTTOM NAVIGATION</p>
        <span className="page-number">53</span>
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
            <p className="font-mono text-white/20 mb-2" style={{ fontSize: "0.45rem" }}>ДЭЭД НАВ</p>
            <p className="font-sans text-white/35 leading-relaxed" style={{ fontSize: "0.7rem" }}>Эрхий хуруу хүрэхэд хэцүү. Fitts's Law-г зөрчинө.</p>
          </div>
          <div style={{ border: `0.5px solid ${law.accentColor}40`, padding: "10px", borderRadius: "2px" }}>
            <p className="font-mono mb-2" style={{ fontSize: "0.45rem", color: law.accentColor, opacity: 0.6 }}>ДООД НАВ</p>
            <p className="font-sans text-white/35 leading-relaxed" style={{ fontSize: "0.7rem" }}>Эрхий хуруунд хамгийн ойр. Fitts's Law дагасан шийдэл.</p>
          </div>
        </div>
        <div className="absolute bottom-5 right-7 page-number">54</div>
      </div>
    </div>
  );
}

const Law07Spread3 = { Left, Right };
export default Law07Spread3;
