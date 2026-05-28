"use client";
import type { Law } from "@/types/law";
import StripeUIDiagram from "@/components/illustrations/StripeUIDiagram";

function Left() {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <div>
          <span className="category-tag text-white/20" style={{ letterSpacing: "0.2em" }}>
            Дижитал жишээ
          </span>
        </div>

        <div className="flex-1 flex items-center justify-center py-3 relative z-10">
          <div className="w-full" style={{ maxHeight: "72%" }}>
            <StripeUIDiagram color="#B04A4A" />
          </div>
        </div>

        <p className="font-mono text-white/20 relative z-10" style={{ fontSize: "0.55rem", letterSpacing: "0.15em" }}>
          FIG 02 — DASHBOARD UI DESIGN
        </p>

        <span className="page-number">05</span>
      </div>
    </div>
  );
}

function Right({ law }: { law: Law }) {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content page-scroll h-full p-8 pb-14 overflow-y-auto">
        <div className="mb-5">
          <h2 className="category-tag mb-2" style={{ color: law.accentColor }}>
            Дижитал жишээ
          </h2>
          <h3 className="font-serif text-white/80 leading-tight" style={{ fontSize: "1.4rem" }}>
            {law.digitalExample.title}
          </h3>
        </div>

        <hr className="section-rule"/>

        <p className="font-sans text-white/65 leading-relaxed mb-5" style={{ fontSize: "0.85rem" }}>
          {law.digitalExample.description}
        </p>

        {/* Side-by-side contrast note */}
        <div className="grid grid-cols-2 gap-3 my-5">
          <div className="p-3" style={{ background: "rgba(176,74,74,0.06)", border: "1px solid rgba(176,74,74,0.15)" }}>
            <p className="font-mono text-white/30 mb-1.5" style={{ fontSize: "0.5rem", letterSpacing: "0.15em" }}>МУУХАЙ ДИЗАЙН</p>
            <p className="font-sans text-white/45 leading-relaxed" style={{ fontSize: "0.68rem" }}>
              Адилхан функцтэй ч хэрэглэгч итгэхгүй. Мөнгөө оруулж зүрхлэхгүй.
            </p>
          </div>
          <div className="p-3" style={{ background: "rgba(176,74,74,0.12)", border: "1px solid rgba(176,74,74,0.25)" }}>
            <p className="font-mono mb-1.5" style={{ fontSize: "0.5rem", letterSpacing: "0.15em", color: law.accentColor }}>ГОЁ ДИЗАЙН</p>
            <p className="font-sans text-white/60 leading-relaxed" style={{ fontSize: "0.68rem" }}>
              Хэрэглэгч дашбоардыг харамгүйгээр бүртгэж, мөнгөө оруулдаг.
            </p>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="category-tag mb-2" style={{ color: law.accentColor, opacity: 0.7 }}>
            Stripe-ийн шийдвэр
          </h4>
          <p className="font-sans text-white/50 leading-relaxed" style={{ fontSize: "0.78rem" }}>
            Stripe дизайны хөрөнгө оруулалтаасаа хамгийн их буцаалт авдаг компаниудын нэг.
            Тэдний&nbsp;philosophy: гоё код бичих шиг гоё UI хий — хоёулаа найдвартай байдлыг илэрхийлдэг.
          </p>
        </div>

        <div className="absolute bottom-5 right-7 page-number">06</div>
      </div>
    </div>
  );
}

const Law01Spread3 = { Left, Right };
export default Law01Spread3;
