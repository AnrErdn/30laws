"use client";
import type { Law } from "@/types/law";
import ApplePackagingDiagram from "@/components/illustrations/ApplePackagingDiagram";

function Left() {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <div>
          <span className="category-tag text-white/20" style={{ letterSpacing: "0.2em" }}>
            Бодит жишээ
          </span>
        </div>

        {/* Diagram fills most of left page */}
        <div className="flex-1 flex items-center justify-center py-3 relative z-10">
          <div className="w-full" style={{ maxHeight: "72%" }}>
            <ApplePackagingDiagram color="#B04A4A" />
          </div>
        </div>

        {/* Small caption */}
        <p className="font-mono text-white/20 relative z-10" style={{ fontSize: "0.55rem", letterSpacing: "0.15em" }}>
          FIG 01 — APPLE PACKAGING
        </p>

        <span className="page-number">03</span>
      </div>
    </div>
  );
}

function Right({ law }: { law: Law }) {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content page-scroll h-full p-8 pb-14 overflow-y-auto">
        {/* Section header */}
        <div className="mb-5">
          <h2 className="category-tag mb-2" style={{ color: law.accentColor }}>
            Бодит жишээ
          </h2>
          <h3 className="font-serif text-white/80 leading-tight" style={{ fontSize: "1.4rem" }}>
            {law.physicalExample.title}
          </h3>
        </div>

        <hr className="section-rule"/>

        <p className="font-sans text-white/65 leading-relaxed mb-6" style={{ fontSize: "0.85rem" }}>
          {law.physicalExample.description}
        </p>

        {/* Pull quote / key insight */}
        <div
          className="p-4 my-5"
          style={{
            borderLeft: `2px solid ${law.accentColor}`,
            background: `${law.accentColor}08`,
          }}
        >
          <p className="font-serif italic text-white/75 leading-relaxed" style={{ fontSize: "0.85rem" }}>
            &ldquo;Гоё савлагаа нь бүтээгдэхүүний чанарын анхны дохио болдог.
            Нүдэнд орохоос өмнө тархинд хүрдэг.&rdquo;
          </p>
        </div>

        {/* Visual comparison note */}
        <div className="mt-5">
          <h4 className="category-tag mb-2" style={{ color: law.accentColor, opacity: 0.7 }}>
            Яагаад ажилладаг вэ
          </h4>
          <p className="font-sans text-white/50 leading-relaxed" style={{ fontSize: "0.78rem" }}>
            Танилцахын тулд тархи эхний секундэд харааны мэдээллийг боловсруулж,
            бүтээгдэхүүний чанарын талаар дүгнэлт гаргадаг. Савлагааны нарийн
            ширийн нь &ldquo;дотор нь байгаа зүйл бас чанартай&rdquo; гэсэн
            дохио болдог.
          </p>
        </div>

        <div className="absolute bottom-5 right-7 page-number">04</div>
      </div>
    </div>
  );
}

const Law01Spread2 = { Left, Right };
export default Law01Spread2;
