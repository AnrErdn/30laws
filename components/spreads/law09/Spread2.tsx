"use client";
import type { Law } from "@/types/law";

function Left({ law }: { law: Law }) {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <span className="category-tag text-white/20" style={{ letterSpacing: "0.2em" }}>Бодит жишээ</span>
        <div className="flex-1 flex items-center justify-center py-3 relative z-10">
          <div className="grid grid-cols-2 gap-4">
            {/* Empty card */}
            <div>
              <p className="font-mono text-white/20 mb-2 text-center" style={{ fontSize: "0.4rem" }}>ХООСОН КАРТ</p>
              <div style={{ border: "0.5px solid rgba(240,237,230,0.1)", padding: "10px", borderRadius: "2px" }}>
                <p className="font-mono text-white/20 mb-2 text-center" style={{ fontSize: "0.45rem" }}>КОФЕНЫ КАРТ</p>
                <div className="grid grid-cols-5 gap-1">
                  {Array.from({length: 10}).map((_, i) => (
                    <div key={i} style={{ width: "14px", height: "14px", borderRadius: "50%", border: "0.5px solid rgba(240,237,230,0.15)" }}/>
                  ))}
                </div>
                <p className="font-mono text-white/15 mt-2 text-center" style={{ fontSize: "0.35rem" }}>0/10 дүүргэсэн</p>
              </div>
            </div>
            {/* Pre-stamped card */}
            <div>
              <p className="font-mono mb-2 text-center" style={{ fontSize: "0.4rem", color: law.accentColor, opacity: 0.5 }}>2 ТАМГАТАЙ</p>
              <div style={{ border: `0.5px solid ${law.accentColor}35`, padding: "10px", borderRadius: "2px" }}>
                <p className="font-mono mb-2 text-center" style={{ fontSize: "0.45rem", color: law.accentColor, opacity: 0.5 }}>КОФЕНЫ КАРТ</p>
                <div className="grid grid-cols-5 gap-1">
                  {Array.from({length: 12}).map((_, i) => (
                    <div key={i} style={{
                      width: "14px", height: "14px", borderRadius: "50%",
                      border: `0.5px solid ${i < 2 ? law.accentColor : "rgba(240,237,230,0.15)"}`,
                      background: i < 2 ? `${law.accentColor}30` : "transparent",
                    }}/>
                  ))}
                </div>
                <p className="font-mono mt-2 text-center" style={{ fontSize: "0.35rem", color: law.accentColor, opacity: 0.4 }}>2/12 дүүргэсэн</p>
              </div>
            </div>
          </div>
        </div>
        <p className="font-mono text-white/20 relative z-10" style={{ fontSize: "0.55rem", letterSpacing: "0.15em" }}>FIG 16 — ENDOWED PROGRESS</p>
        <span className="page-number">67</span>
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
            &ldquo;Хүн зорилгодоо ойртох тусам хурдасдаг — энэ нь хулганаас хүн хүртэл адилхан ажилладаг механизм.&rdquo;
          </p>
        </div>
        <div className="mt-5">
          <h4 className="category-tag mb-2" style={{ color: law.accentColor, opacity: 0.7 }}>Яагаад ажилладаг вэ</h4>
          <p className="font-sans text-white/50 leading-relaxed" style={{ fontSize: "0.78rem" }}>
            Nunes & Drèze-ийн судалгаагаар "endowed progress" (аль хэдийн тамгатай карт) нь хоосон картаас 82% илүү дуусгалтыг харуулсан. Адилхан хүчин чармайлт шаардагддаг ч мэдрэмж өөр.
          </p>
        </div>
        <div className="absolute bottom-5 right-7 page-number">68</div>
      </div>
    </div>
  );
}

const Law09Spread2 = { Left, Right };
export default Law09Spread2;
