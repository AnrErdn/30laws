"use client";
import type { Law } from "@/types/law";
import { useState } from "react";
import { motion } from "framer-motion";

const ALL_OPTIONS = ["Цай", "Кофе", "Ус", "Шүүс", "Сүү", "Матча", "Лемонад", "Капучино"];

function Left({ law }: { law: Law }) {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <span className="category-tag" style={{ color: law.accentColor }}>Интерактив туршилт</span>
        <div className="relative z-10">
          <h2 className="font-display text-white/80 leading-none" style={{ fontSize: "clamp(2rem,5vw,4rem)" }}>FEEL<br/>THE<br/>LAW</h2>
          <div className="mt-4 h-px w-12" style={{ background: law.accentColor, opacity: 0.5 }}/>
          <p className="font-sans text-white/40 mt-4 leading-relaxed" style={{ fontSize: "0.72rem" }}>
            Сонголт нэмэгдэх тусам шийдвэр гаргах хугацаа хэрхэн өөрчлөгдөхийг мэдрэнэ үү.
          </p>
        </div>
        <div className="p-4 relative z-10" style={{ borderLeft: `2px solid ${law.accentColor}`, background: `${law.accentColor}08` }}>
          <p className="category-tag mb-2" style={{ color: law.accentColor }}>Дизайнерийн дүгнэлт</p>
          <p className="font-serif italic text-white/70 leading-relaxed" style={{ fontSize: "0.78rem" }}>&ldquo;{law.takeaway}&rdquo;</p>
        </div>
        <span className="page-number">79</span>
      </div>
    </div>
  );
}

function Right({ law }: { law: Law }) {
  const [count, setCount] = useState(2);
  const [chosen, setChosen] = useState<string | null>(null);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState<number | null>(null);

  const options = ALL_OPTIONS.slice(0, count);
  const expectedTime = Math.round(200 + 150 * Math.log2(count));

  const handleStart = () => {
    setChosen(null);
    setElapsed(null);
    setStartTime(Date.now());
  };

  const handleChoose = (opt: string) => {
    if (!startTime) return;
    setChosen(opt);
    setElapsed(Date.now() - startTime);
    setStartTime(null);
  };

  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content h-full p-8 pb-14 overflow-y-auto page-scroll flex flex-col gap-3">
        <div>
          <h2 className="category-tag mb-1" style={{ color: law.accentColor }}>Туршилт</h2>
          <p className="font-serif text-white/80 mb-3" style={{ fontSize: "0.95rem" }}>Сонголт нэмж, шийдвэрийн хүндрэлийг мэдрэ</p>

          {/* Option count control */}
          <div className="flex items-center gap-3 mb-4">
            <button onClick={() => { setCount(c => Math.max(2, c - 1)); setChosen(null); setElapsed(null); setStartTime(null); }}
              className="font-mono" style={{ width: "24px", height: "24px", border: "0.5px solid rgba(240,237,230,0.2)", color: "rgba(240,237,230,0.4)", fontSize: "0.8rem" }}>−</button>
            <span className="font-mono" style={{ fontSize: "0.65rem", color: law.accentColor, opacity: 0.7, minWidth: "60px", textAlign: "center" }}>{count} СОНГОЛТ</span>
            <button onClick={() => { setCount(c => Math.min(8, c + 1)); setChosen(null); setElapsed(null); setStartTime(null); }}
              disabled={count >= 8}
              className="font-mono" style={{ width: "24px", height: "24px", border: `0.5px solid ${count < 8 ? law.accentColor : "rgba(240,237,230,0.1)"}`, color: count < 8 ? law.accentColor : "rgba(240,237,230,0.15)", fontSize: "0.8rem", opacity: count < 8 ? 0.7 : 0.3 }}>+</button>
            <span className="font-mono text-white/20" style={{ fontSize: "0.45rem" }}>≈{expectedTime}ms хүлээгдэж байна</span>
          </div>

          {/* Start button */}
          {!startTime && !chosen && (
            <button onClick={handleStart} className="w-full font-mono mb-3"
              style={{ fontSize: "0.6rem", letterSpacing: "0.15em", padding: "8px", border: `0.5px solid ${law.accentColor}50`, color: law.accentColor, background: `${law.accentColor}12` }}>
              ЭХЛЭХ →
            </button>
          )}

          {/* Options grid */}
          {startTime && (
            <div className="glass-card p-3 mb-3">
              <p className="font-mono text-white/25 mb-2 text-center" style={{ fontSize: "0.45rem" }}>ХАМГИЙН ТААЛАГДСАНЫГ СОНГО</p>
              <div className="grid grid-cols-2 gap-2">
                {options.map(opt => (
                  <button key={opt} onClick={() => handleChoose(opt)}
                    className="font-sans transition-colors"
                    style={{ padding: "8px", border: "0.5px solid rgba(240,237,230,0.15)", color: "rgba(240,237,230,0.6)", fontSize: "0.7rem", borderRadius: "2px" }}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Result */}
          {chosen && elapsed !== null && (
            <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-4">
              <p className="font-mono mb-1" style={{ fontSize: "0.5rem", color: law.accentColor, opacity: 0.7 }}>"{chosen}" — {elapsed}ms</p>
              <p className="font-sans text-white/50 leading-relaxed mb-2" style={{ fontSize: "0.7rem" }}>
                {count <= 3 ? "Хурдан шийдсэн биз? Цөөн сонголт = хурдан шийдвэр."
                  : count <= 5 ? "Арай удсан биз? Сонголт нэмэгдэхийн хэрээр хугацаа нэмэгдэнэ."
                  : "Удсан биз? 8 сонголт хэт их — Hick's Law-г биеэрээ мэдэрлээ."}
              </p>
              <button onClick={() => { setChosen(null); setElapsed(null); }}
                className="font-sans text-white/25 hover:text-white/50 transition-colors" style={{ fontSize: "0.55rem", letterSpacing: "0.15em" }}>
                ↺ ДАХИН ТУРШИX
              </button>
            </motion.div>
          )}
        </div>
        <div className="absolute bottom-5 right-7 page-number">80</div>
      </div>
    </div>
  );
}

const Law10Spread4 = { Left, Right };
export default Law10Spread4;
