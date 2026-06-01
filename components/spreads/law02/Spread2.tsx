"use client";
import type { Law } from "@/types/law";

function Left({ law }: { law: Law }) {
  const items = ["Өглөөний хоол","Шөл","Борц","Хуурмаг","Банш","Цуйван","Тавгтай хоол","Хуурсан будаа","Манты","Пицца","Бургер","Паста","Суп","Лагман","Салат","Хайрсан загас","Гриль мах","Вегетари","Тэмпура","Хинкали","Карри","Рамен","Пад Тай","Фалафел","Дим Сам","Шаурма","Хот дог","Кесадилья","Наан","Такос"];

  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <span className="category-tag text-white/20" style={{ letterSpacing: "0.2em" }}>Бодит жишээ</span>

        <div className="flex-1 flex items-center justify-center py-3 relative z-10">
          <div className="w-full">
            {/* Two menus side by side */}
            <div className="grid grid-cols-2 gap-3">
              {/* Overwhelming menu */}
              <div style={{ border: "0.5px solid rgba(240,237,230,0.1)", padding: "8px" }}>
                <p className="font-mono text-white/20 mb-2" style={{ fontSize: "0.45rem", letterSpacing: "0.15em" }}>100 ХООЛТОЙ ЦЭС</p>
                <div className="space-y-px">
                  {items.map((item, i) => (
                    <div key={i} style={{ height: "4px", background: `rgba(240,237,230,${0.06 + (i % 3) * 0.03})`, borderRadius: "1px" }} />
                  ))}
                </div>
                <p className="font-mono text-white/15 mt-2" style={{ fontSize: "0.4rem" }}>← хэт олон</p>
              </div>
              {/* Curated menu */}
              <div style={{ border: `0.5px solid ${law.accentColor}40`, padding: "8px" }}>
                <p className="font-mono mb-2" style={{ fontSize: "0.45rem", letterSpacing: "0.15em", color: law.accentColor, opacity: 0.6 }}>15 ХООЛТОЙ ЦЭС</p>
                <div className="space-y-1">
                  {["Өглөөний","Шөл","Борц","Банш","Цуйван"].map((item, i) => (
                    <div key={i} className="flex items-center gap-1">
                      <div style={{ width: "3px", height: "3px", borderRadius: "50%", background: law.accentColor, opacity: 0.4 }} />
                      <div style={{ height: "3.5px", flex: 1, background: `rgba(240,237,230,0.15)`, borderRadius: "1px" }} />
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: "0.4rem", color: law.accentColor, opacity: 0.5, marginTop: "6px" }}>← хурдан шийдвэр</p>
              </div>
            </div>
          </div>
        </div>

        <p className="font-mono text-white/20 relative z-10" style={{ fontSize: "0.55rem", letterSpacing: "0.15em" }}>FIG 02 — MENU COMPARISON</p>
        <span className="page-number">11</span>
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
            &ldquo;Сонголт нэмэгдэх тусам шийдвэр гаргах нь хэцүү болдог — энэ нь зөн совингийн эсрэг боловч судалгаагаар нотлогдсон.&rdquo;
          </p>
        </div>
        <div className="mt-5">
          <h4 className="category-tag mb-2" style={{ color: law.accentColor, opacity: 0.7 }}>Яагаад ажилладаг вэ</h4>
          <p className="font-sans text-white/50 leading-relaxed" style={{ fontSize: "0.78rem" }}>
            Sheena Iyengar-ийн жемний судалгаагаар 24 сонголттой тавиурыг харсан хүмүүсийн зөвхөн 3% нь худалдан авалт хийсэн бол 6 сонголттой тавиурыг харсан хүмүүсийн 30% нь худалдан авч байжээ.
          </p>
        </div>
        <div className="absolute bottom-5 right-7 page-number">12</div>
      </div>
    </div>
  );
}

const Law02Spread2 = { Left, Right };
export default Law02Spread2;
