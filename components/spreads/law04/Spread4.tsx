"use client";
import type { Law } from "@/types/law";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Left({ law }: { law: Law }) {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <span className="category-tag" style={{ color: law.accentColor }}>Интерактив туршилт</span>
        <div className="relative z-10">
          <h2 className="font-display text-white/80 leading-none" style={{ fontSize: "clamp(2rem,5vw,4rem)" }}>FEEL<br/>THE<br/>LAW</h2>
          <div className="mt-4 h-px w-12" style={{ background: law.accentColor, opacity: 0.5 }}/>
          <p className="font-sans text-white/40 mt-4 leading-relaxed" style={{ fontSize: "0.72rem" }}>
            Эхний харагдах тоо таны таамаглалд хэрхэн нөлөөлдгийг мэдрэнэ үү.
          </p>
        </div>
        <div className="p-4 relative z-10" style={{ borderLeft: `2px solid ${law.accentColor}`, background: `${law.accentColor}08` }}>
          <p className="category-tag mb-2" style={{ color: law.accentColor }}>Дизайнерийн дүгнэлт</p>
          <p className="font-serif italic text-white/70 leading-relaxed" style={{ fontSize: "0.78rem" }}>&ldquo;{law.takeaway}&rdquo;</p>
        </div>
        <span className="page-number">31</span>
      </div>
    </div>
  );
}

function Right({ law }: { law: Law }) {
  const [anchor, setAnchor] = useState<"high" | "low" | null>(null);
  const [guess, setGuess] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const highAnchor = 9000;
  const lowAnchor = 200;
  const truth = 2800;

  const reset = () => { setAnchor(null); setGuess(""); setSubmitted(false); };

  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content h-full p-8 pb-14 overflow-y-auto page-scroll flex flex-col gap-4">
        <div>
          <h2 className="category-tag mb-1" style={{ color: law.accentColor }}>Туршилт — Anchoring Bias</h2>
          <p className="font-serif text-white/80 mb-4" style={{ fontSize: "0.95rem" }}>Дэлхийн хамгийн том нуурын гүн хэд вэ? (метрээр)</p>

          {!anchor && (
            <div className="space-y-3">
              <p className="font-sans text-white/40" style={{ fontSize: "0.72rem" }}>Эхлэхийн тулд нэг тоог сонгоно уу:</p>
              <div className="flex gap-3">
                <button onClick={() => setAnchor("high")} className="flex-1 p-3 font-mono transition-all"
                  style={{ border: `0.5px solid ${law.accentColor}40`, color: law.accentColor, opacity: 0.7, fontSize: "0.9rem" }}>
                  {highAnchor.toLocaleString()}
                </button>
                <button onClick={() => setAnchor("low")} className="flex-1 p.3 font-mono transition-all"
                  style={{ border: "0.5px solid rgba(240,237,230,0.15)", color: "rgba(240,237,230,0.4)", fontSize: "0.9rem", padding: "12px" }}>
                  {lowAnchor.toLocaleString()}
                </button>
              </div>
              <p className="font-sans text-white/20" style={{ fontSize: "0.6rem" }}>Дээрх тоо таны таамаглалд нөлөөлнө</p>
            </div>
          )}

          {anchor && !submitted && (
            <div className="glass-card p-4 space-y-3">
              <p className="font-mono text-white/20" style={{ fontSize: "0.45rem" }}>
                ANCHOR: {anchor === "high" ? highAnchor.toLocaleString() : lowAnchor.toLocaleString()}
              </p>
              <p className="font-sans text-white/60" style={{ fontSize: "0.75rem" }}>Дэлхийн хамгийн гүн нуурын гүн:</p>
              <input type="number" value={guess} onChange={e => setGuess(e.target.value)}
                placeholder="таамаглалаа бич..." className="w-full font-mono bg-transparent outline-none text-white/70"
                style={{ fontSize: "1rem", borderBottom: `0.5px solid ${law.accentColor}50`, paddingBottom: "4px" }}/>
              <button onClick={() => setSubmitted(true)} disabled={!guess}
                className="font-mono transition-colors" style={{ fontSize: "0.55rem", letterSpacing: "0.15em", padding: "6px 14px", background: `${law.accentColor}20`, color: law.accentColor }}>
                ХАРИУ →
              </button>
            </div>
          )}

          <AnimatePresence>
            {submitted && (
              <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-4 space-y-2">
                <p className="font-mono" style={{ fontSize: "0.5rem", color: law.accentColor, opacity: 0.7 }}>БОДИТ ХАРИУ</p>
                <p className="font-mono text-white/80" style={{ fontSize: "1.1rem" }}>{truth.toLocaleString()} м</p>
                <p className="font-sans text-white/50 leading-relaxed" style={{ fontSize: "0.72rem" }}>
                  {anchor === "high"
                    ? `Та ${Number(guess).toLocaleString()} гэж таасан. Өндөр anchor (${highAnchor.toLocaleString()}) байсан тул их таасан байх магадлалтай.`
                    : `Та ${Number(guess).toLocaleString()} гэж таасан. Бага anchor (${lowAnchor.toLocaleString()}) байсан тул бага таасан байх магадлалтай.`}
                </p>
                <p className="font-sans leading-relaxed" style={{ fontSize: "0.68rem", color: law.accentColor, opacity: 0.6 }}>
                  Энэ бол Anchoring Bias — эхний тоо шийдвэрт нөлөөлдөг.
                </p>
                <button onClick={reset} className="font-sans text-white/25 hover:text-white/50 transition-colors" style={{ fontSize: "0.55rem", letterSpacing: "0.15em" }}>↺ ДАХИН ТУРШИX</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="absolute bottom-5 right-7 page-number">32</div>
      </div>
    </div>
  );
}

const Law04Spread4 = { Left, Right };
export default Law04Spread4;
