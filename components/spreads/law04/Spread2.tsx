"use client";
import type { Law } from "@/types/law";

function Left({ law }: { law: Law }) {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <span className="category-tag text-white/20" style={{ letterSpacing: "0.2em" }}>Бодит жишээ</span>
        <div className="flex-1 flex items-center justify-center py-3 relative z-10">
          {/* Price tag diagram */}
          <div style={{ width: "160px" }}>
            <div style={{ border: "0.5px solid rgba(240,237,230,0.15)", padding: "16px", borderRadius: "2px", textAlign: "center" }}>
              <p className="font-mono text-white/20 mb-1" style={{ fontSize: "0.45rem", letterSpacing: "0.15em" }}>ДЭЛГҮҮРИЙН ШОШГО</p>
              <div className="my-3">
                <p className="font-mono text-white/25" style={{ fontSize: "0.7rem", textDecoration: "line-through" }}>₮50,000</p>
                <p className="font-mono" style={{ fontSize: "1.6rem", color: law.accentColor, opacity: 0.7 }}>₮30,000</p>
              </div>
              <div style={{ height: "0.5px", background: `${law.accentColor}30`, margin: "8px 0" }}/>
              <p className="font-sans text-white/30" style={{ fontSize: "0.55rem" }}>40% ХЯМДАРСАН</p>
            </div>
            <p className="font-sans text-white/20 mt-2 text-center" style={{ fontSize: "0.5rem" }}>
              ₮50,000 хэзээ ч бодит үнэ биш байж болно
            </p>
          </div>
        </div>
        <p className="font-mono text-white/20 relative z-10" style={{ fontSize: "0.55rem", letterSpacing: "0.15em" }}>FIG 06 — ANCHORING PRICE TAG</p>
        <span className="page-number">27</span>
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
            &ldquo;Анхны мэдээлэл нь дараагийн бүх шийдвэрт нөлөөлдөг — энэ нь тархи мэдээллийг боловсруулдаг арга.&rdquo;
          </p>
        </div>
        <div className="mt-5">
          <h4 className="category-tag mb-2" style={{ color: law.accentColor, opacity: 0.7 }}>Яагаад ажилладаг вэ</h4>
          <p className="font-sans text-white/50 leading-relaxed" style={{ fontSize: "0.78rem" }}>
            Anchoring bias нь тархи эхний мэдээллийг &ldquo;тулгуур&rdquo; болгон ашигладаг психологийн хэлбэр. Дижитал болон физик маркетингт өргөн хэрэглэгддэг — дизайнер энэ механизмыг мэдэж байх нь чухал.
          </p>
        </div>
        <div className="absolute bottom-5 right-7 page-number">28</div>
      </div>
    </div>
  );
}

const Law04Spread2 = { Left, Right };
export default Law04Spread2;
