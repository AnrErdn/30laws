"use client";
import type { Law } from "@/types/law";

function Left({ law }: { law: Law }) {
  const tracks = Array.from({ length: 30 }, (_, i) => i);
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <span className="category-tag text-white/20" style={{ letterSpacing: "0.2em" }}>Дижитал жишээ</span>

        <div className="flex-1 flex items-center justify-center py-3 relative z-10">
          {/* Spotify Discover Weekly card */}
          <div className="w-full" style={{ border: `0.5px solid ${law.accentColor}30`, padding: "10px", borderRadius: "2px" }}>
            <div className="flex items-center gap-2 mb-3">
              <div style={{ width: "28px", height: "28px", background: `${law.accentColor}20`, borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg viewBox="0 0 12 12" fill="none" width="10" height="10">
                  <circle cx="6" cy="6" r="5" stroke={law.accentColor} strokeWidth="0.8" opacity="0.5"/>
                  <path d="M4 6l2-2 2 2" stroke={law.accentColor} strokeWidth="0.8" opacity="0.5"/>
                </svg>
              </div>
              <div>
                <p className="font-sans text-white/60" style={{ fontSize: "0.6rem", fontWeight: 500 }}>Discover Weekly</p>
                <p className="font-mono text-white/25" style={{ fontSize: "0.45rem" }}>30 ДУУ · SPOTIFY</p>
              </div>
            </div>
            <div className="space-y-1">
              {tracks.map(i => (
                <div key={i} className="flex items-center gap-2">
                  <span className="font-mono text-white/15" style={{ fontSize: "0.4rem", width: "10px" }}>{i + 1}</span>
                  <div style={{ height: "3px", flex: 1, background: `rgba(240,237,230,${0.08 + (i % 4) * 0.02})`, borderRadius: "1px" }} />
                  <div style={{ height: "3px", width: "20px", background: `rgba(240,237,230,0.05)`, borderRadius: "1px" }} />
                </div>
              ))}
            </div>
            <p className="font-mono text-white/20 mt-2" style={{ fontSize: "0.4rem" }}>← Spotify таны өмнөөс сонгов</p>
          </div>
        </div>

        <p className="font-mono text-white/20 relative z-10" style={{ fontSize: "0.55rem", letterSpacing: "0.15em" }}>FIG 03 — CURATED SELECTION</p>
        <span className="page-number">13</span>
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

        {/* Before / After */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div style={{ border: "0.5px solid rgba(240,237,230,0.1)", padding: "10px", borderRadius: "2px" }}>
            <p className="font-mono text-white/20 mb-2" style={{ fontSize: "0.45rem", letterSpacing: "0.1em" }}>ХЯЗГААРГҮЙ СОНГОЛТ</p>
            <p className="font-sans text-white/35 leading-relaxed" style={{ fontSize: "0.7rem" }}>Хэрэглэгч эргэлдэж, цаг алдаж, сэтгэл ханамж буурдаг.</p>
          </div>
          <div style={{ border: `0.5px solid ${law.accentColor}40`, padding: "10px", borderRadius: "2px" }}>
            <p className="font-mono mb-2" style={{ fontSize: "0.45rem", letterSpacing: "0.1em", color: law.accentColor, opacity: 0.6 }}>CURATOR ШИЙДВЭР</p>
            <p className="font-sans text-white/35 leading-relaxed" style={{ fontSize: "0.7rem" }}>Систем хэрэглэгчийн өмнөөс сонгоно. Engagement нэмэгдэнэ.</p>
          </div>
        </div>

        <div className="absolute bottom-5 right-7 page-number">14</div>
      </div>
    </div>
  );
}

const Law02Spread3 = { Left, Right };
export default Law02Spread3;
