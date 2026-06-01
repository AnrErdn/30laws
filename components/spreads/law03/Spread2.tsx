"use client";
import type { Law } from "@/types/law";

function Left({ law }: { law: Law }) {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <span className="category-tag text-white/20" style={{ letterSpacing: "0.2em" }}>Бодит жишээ</span>

        <div className="flex-1 flex items-center justify-center py-3 relative z-10">
          <div className="w-full space-y-6">
            {/* Unchunked number */}
            <div>
              <p className="font-mono text-white/20 mb-2" style={{ fontSize: "0.45rem", letterSpacing: "0.12em" }}>БҮЛЭГДЭЭГҮЙ</p>
              <div style={{ border: "0.5px solid rgba(240,237,230,0.1)", padding: "12px", borderRadius: "2px" }}>
                <p className="font-mono text-white/40 text-center" style={{ fontSize: "1.1rem", letterSpacing: "0.08em" }}>99112345678</p>
              </div>
              <p className="font-sans text-white/20 mt-1" style={{ fontSize: "0.5rem" }}>Уншиж санахад хэцүү</p>
            </div>

            {/* Divider arrow */}
            <div className="flex items-center justify-center">
              <svg viewBox="0 0 40 20" fill="none" width="40" height="20">
                <path d="M20 2v14M14 12l6 6 6-6" stroke={law.accentColor} strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
              </svg>
            </div>

            {/* Chunked number */}
            <div>
              <p className="font-mono mb-2" style={{ fontSize: "0.45rem", letterSpacing: "0.12em", color: law.accentColor, opacity: 0.6 }}>БҮЛЭГЛЭСЭН</p>
              <div style={{ border: `0.5px solid ${law.accentColor}40`, padding: "12px", borderRadius: "2px" }}>
                <p className="font-mono text-center" style={{ fontSize: "1.1rem", letterSpacing: "0.25em", color: law.accentColor, opacity: 0.7 }}>9911 · 2345 · 678</p>
              </div>
              <p className="font-sans mt-1" style={{ fontSize: "0.5rem", color: law.accentColor, opacity: 0.5 }}>Хурдан уншиж санана</p>
            </div>
          </div>
        </div>

        <p className="font-mono text-white/20 relative z-10" style={{ fontSize: "0.55rem", letterSpacing: "0.15em" }}>FIG 04 — PHONE NUMBER CHUNKING</p>
        <span className="page-number">19</span>
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
            &ldquo;Зохион байгуулалт нь агуулгаас илүү чухал — ижил мэдээлэл зөв бүлэглэлттэй бол 10 дахин хялбар ойлгогдоно.&rdquo;
          </p>
        </div>
        <div className="mt-5">
          <h4 className="category-tag mb-2" style={{ color: law.accentColor, opacity: 0.7 }}>Яагаад ажилладаг вэ</h4>
          <p className="font-sans text-white/50 leading-relaxed" style={{ fontSize: "0.78rem" }}>
            Тархи мэдээллийг нэг нэгээр биш бүлгээр боловсруулдаг. Бүлэглэлт нь ажлын санах ойн ачааллыг 60–70% хүртэл бууруулж болно.
          </p>
        </div>
        <div className="absolute bottom-5 right-7 page-number">20</div>
      </div>
    </div>
  );
}

const Law03Spread2 = { Left, Right };
export default Law03Spread2;
