"use client";
import type { Law } from "@/types/law";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TARGETS = [
  { label: "ТОМ · ОЙР", size: 64, desc: "Том, ойр товчлуур — Fitts's Law дагасан шилдэг дизайн." },
  { label: "ДУНДаж · ДУНД", size: 36, desc: "Дунд зэргийн хэмжээ — хэрэглэх боломжтой ч оновчтой биш." },
  { label: "ЖИЖИГ · ХОЛ", size: 18, desc: "Жижиг, хол товчлуур — аюултай үйлдэл байвал тохиромжтой." },
];

function Left({ law }: { law: Law }) {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <span className="category-tag" style={{ color: law.accentColor }}>Интерактив туршилт</span>
        <div className="relative z-10">
          <h2 className="font-display text-white/80 leading-none" style={{ fontSize: "clamp(2rem,5vw,4rem)" }}>FEEL<br/>THE<br/>LAW</h2>
          <div className="mt-4 h-px w-12" style={{ background: law.accentColor, opacity: 0.5 }}/>
          <p className="font-sans text-white/40 mt-4 leading-relaxed" style={{ fontSize: "0.72rem" }}>
            Гурван өөр хэмжээний товчлуурыг дарж аль нь хамгийн хялбар болохыг мэдрэнэ үү.
          </p>
        </div>
        <div className="p-4 relative z-10" style={{ borderLeft: `2px solid ${law.accentColor}`, background: `${law.accentColor}08` }}>
          <p className="category-tag mb-2" style={{ color: law.accentColor }}>Дизайнерийн дүгнэлт</p>
          <p className="font-serif italic text-white/70 leading-relaxed" style={{ fontSize: "0.78rem" }}>&ldquo;{law.takeaway}&rdquo;</p>
        </div>
        <span className="page-number">55</span>
      </div>
    </div>
  );
}

function Right({ law }: { law: Law }) {
  const [result, setResult] = useState<string | null>(null);
  const [times, setTimes] = useState<Record<string, number>>({});
  const startRef = useRef<number>(0);

  const handleMouseEnter = () => { startRef.current = Date.now(); };
  const handleClick = (label: string, desc: string) => {
    const ms = Date.now() - startRef.current;
    setTimes(prev => ({ ...prev, [label]: ms }));
    setResult(desc);
  };

  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content h-full p-8 pb-14 overflow-y-auto page-scroll flex flex-col gap-4">
        <div>
          <h2 className="category-tag mb-1" style={{ color: law.accentColor }}>Туршилт</h2>
          <p className="font-serif text-white/80 mb-2" style={{ fontSize: "0.95rem" }}>Гурван товчлуур бүрийг дарж үзнэ үү</p>
          <p className="font-sans text-white/35 mb-4" style={{ fontSize: "0.72rem" }}>Товчлуур дээр хулганаа аваачсан цагаас дарах хүртэлх хугацааг хэмжинэ.</p>

          <div className="glass-card p-5 space-y-4">
            {TARGETS.map(t => (
              <div key={t.label} className="flex items-center gap-4">
                <button
                  onMouseEnter={handleMouseEnter}
                  onTouchStart={() => { startRef.current = Date.now(); }}
                  onClick={() => handleClick(t.label, t.desc)}
                  style={{
                    width: `${t.size}px`, height: `${t.size}px`, flexShrink: 0,
                    borderRadius: "3px",
                    border: `0.5px solid ${times[t.label] ? law.accentColor : "rgba(240,237,230,0.2)"}`,
                    background: times[t.label] ? `${law.accentColor}20` : "rgba(240,237,230,0.04)",
                    color: times[t.label] ? law.accentColor : "rgba(240,237,230,0.4)",
                    fontFamily: "var(--font-dm-mono)", fontSize: "0.45rem",
                    transition: "all 0.15s",
                  }}>
                  {times[t.label] ? `${times[t.label]}ms` : "↗"}
                </button>
                <div>
                  <p className="font-mono text-white/30" style={{ fontSize: "0.45rem", letterSpacing: "0.1em" }}>{t.label}</p>
                  {times[t.label] && <p className="font-mono mt-0.5" style={{ fontSize: "0.45rem", color: law.accentColor, opacity: 0.6 }}>{times[t.label]}ms</p>}
                </div>
              </div>
            ))}
          </div>

          <AnimatePresence>
            {result && (
              <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="mt-4 p-3"
                style={{ border: `0.5px solid ${law.accentColor}30`, background: `${law.accentColor}08` }}>
                <p className="font-sans text-white/60 leading-relaxed" style={{ fontSize: "0.72rem" }}>{result}</p>
                <button onClick={() => { setResult(null); setTimes({}); }}
                  className="mt-2 font-sans text-white/25 hover:text-white/50 transition-colors" style={{ fontSize: "0.55rem", letterSpacing: "0.15em" }}>
                  ↺ ДАХИН ТУРШИX
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="absolute bottom-5 right-7 page-number">56</div>
      </div>
    </div>
  );
}

const Law07Spread4 = { Left, Right };
export default Law07Spread4;
