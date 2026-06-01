"use client";
import type { Law } from "@/types/law";
import { useState } from "react";

function Left({ law }: { law: Law }) {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <span className="category-tag" style={{ color: law.accentColor }}>Интерактив туршилт</span>
        <div className="relative z-10">
          <h2 className="font-display text-white/80 leading-none" style={{ fontSize: "clamp(2rem,5vw,4rem)" }}>FEEL<br/>THE<br/>LAW</h2>
          <div className="mt-4 h-px w-12" style={{ background: law.accentColor, opacity: 0.5 }}/>
          <p className="font-sans text-white/40 mt-4 leading-relaxed" style={{ fontSize: "0.72rem" }}>
            Хоёр loyalty card-ийг харьцуулна уу. Аль нь дуусгахад илүү сэдэл өгдөг вэ?
          </p>
        </div>
        <div className="p-4 relative z-10" style={{ borderLeft: `2px solid ${law.accentColor}`, background: `${law.accentColor}08` }}>
          <p className="category-tag mb-2" style={{ color: law.accentColor }}>Дизайнерийн дүгнэлт</p>
          <p className="font-serif italic text-white/70 leading-relaxed" style={{ fontSize: "0.78rem" }}>&ldquo;{law.takeaway}&rdquo;</p>
        </div>
        <span className="page-number">71</span>
      </div>
    </div>
  );
}

function Card({ total, prefilled, accentColor, label }: { total: number; prefilled: number; accentColor: string; label: string }) {
  const [stamps, setStamps] = useState(prefilled);
  const done = stamps >= total;

  return (
    <div style={{ border: `0.5px solid ${stamps > prefilled ? accentColor : "rgba(240,237,230,0.12)"}40`, padding: "10px", borderRadius: "2px", transition: "border-color 0.3s" }}>
      <p className="font-mono mb-2 text-center" style={{ fontSize: "0.45rem", color: stamps > prefilled ? accentColor : "rgba(240,237,230,0.25)", letterSpacing: "0.1em" }}>{label}</p>
      <div className="grid grid-cols-5 gap-1 mb-3">
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} style={{
            width: "18px", height: "18px", borderRadius: "50%",
            border: `0.5px solid ${i < stamps ? accentColor : "rgba(240,237,230,0.15)"}`,
            background: i < stamps ? `${accentColor}30` : "transparent",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.2s",
          }}>
            {i < stamps && <span style={{ fontSize: "0.5rem", color: accentColor, opacity: 0.7 }}>✓</span>}
          </div>
        ))}
      </div>
      {done
        ? <p className="font-mono text-center" style={{ fontSize: "0.5rem", color: accentColor, opacity: 0.7 }}>🎉 ҮНЭГҮЙ КОФЕ!</p>
        : <button onClick={() => setStamps(s => Math.min(s + 1, total))}
            className="w-full font-mono transition-colors"
            style={{ fontSize: "0.5rem", letterSpacing: "0.1em", padding: "5px", border: `0.5px solid ${accentColor}40`, color: accentColor, opacity: 0.7, background: `${accentColor}0a` }}>
            + ТАМГА ({stamps}/{total})
          </button>
      }
    </div>
  );
}

function Right({ law }: { law: Law }) {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content h-full p-8 pb-14 overflow-y-auto page-scroll flex flex-col gap-4">
        <div>
          <h2 className="category-tag mb-1" style={{ color: law.accentColor }}>Туршилт — Endowed Progress</h2>
          <p className="font-serif text-white/80 mb-2" style={{ fontSize: "0.95rem" }}>Аль карт дуусгахад хялбар мэт санагддаг?</p>
          <p className="font-sans text-white/35 mb-4" style={{ fontSize: "0.72rem" }}>Тамга нэмэх товчийг дарна уу. Хоёулаа адил хүчин чармайлт шаарддаг.</p>

          <div className="grid grid-cols-2 gap-3">
            <Card total={10} prefilled={0} accentColor={law.accentColor} label="ХООСОН КАРТ" />
            <Card total={12} prefilled={2} accentColor={law.accentColor} label="2 ТАМГАТАЙ" />
          </div>

          <div className="mt-4 p-3" style={{ border: `0.5px solid ${law.accentColor}25`, background: `${law.accentColor}06` }}>
            <p className="font-sans text-white/50 leading-relaxed" style={{ fontSize: "0.7rem" }}>
              Хоёр карт хоёулаа 10 тамга шаарддаг — гэхдээ баруун карт аль хэдийн эхэлсэн мэт мэдрэгдэнэ. Энэ бол Goal-Gradient Effect.
            </p>
          </div>
        </div>
        <div className="absolute bottom-5 right-7 page-number">72</div>
      </div>
    </div>
  );
}

const Law09Spread4 = { Left, Right };
export default Law09Spread4;
