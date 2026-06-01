"use client";
import type { Law } from "@/types/law";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RAW = "9911234567";
const CHUNKED = "9911 · 234 · 567";

function Left({ law }: { law: Law }) {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <span className="category-tag" style={{ color: law.accentColor }}>Интерактив туршилт</span>
        <div className="relative z-10">
          <h2 className="font-display text-white/80 leading-none" style={{ fontSize: "clamp(2rem,5vw,4rem)" }}>FEEL<br/>THE<br/>LAW</h2>
          <div className="mt-4 h-px w-12" style={{ background: law.accentColor, opacity: 0.5 }}/>
          <p className="font-sans text-white/40 mt-4 leading-relaxed" style={{ fontSize: "0.72rem" }}>
            Тоог 3 секунд цээжлэж, дараа нь нуугдсаны дараа бичнэ үү. Бүлэглэлт хэр их тусалдгийг мэдрэнэ үү.
          </p>
        </div>
        <div className="p-4 relative z-10" style={{ borderLeft: `2px solid ${law.accentColor}`, background: `${law.accentColor}08` }}>
          <p className="category-tag mb-2" style={{ color: law.accentColor }}>Дизайнерийн дүгнэлт</p>
          <p className="font-serif italic text-white/70 leading-relaxed" style={{ fontSize: "0.78rem" }}>&ldquo;{law.takeaway}&rdquo;</p>
        </div>
        <span className="page-number">23</span>
      </div>
    </div>
  );
}

function Right({ law }: { law: Law }) {
  const [mode, setMode] = useState<"raw" | "chunked">("raw");
  const [phase, setPhase] = useState<"show" | "input" | "result">("show");
  const [input, setInput] = useState("");
  const target = mode === "raw" ? RAW : RAW;

  const start = () => {
    setPhase("show");
    setInput("");
    setTimeout(() => setPhase("input"), 3000);
  };

  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content h-full p-8 pb-14 overflow-y-auto page-scroll flex flex-col gap-4">
        <div>
          <h2 className="category-tag mb-1" style={{ color: law.accentColor }}>Туршилт</h2>
          <p className="font-serif text-white/80 mb-4" style={{ fontSize: "1rem" }}>Тоог цээжилж бичнэ үү</p>

          <div className="flex gap-2 mb-4">
            {(["raw", "chunked"] as const).map(m => (
              <button key={m} onClick={() => { setMode(m); setPhase("show"); setInput(""); }}
                className="font-mono transition-all"
                style={{
                  fontSize: "0.55rem", letterSpacing: "0.12em", padding: "4px 10px",
                  border: `0.5px solid ${mode === m ? law.accentColor : "rgba(240,237,230,0.15)"}`,
                  color: mode === m ? law.accentColor : "rgba(240,237,230,0.3)",
                  background: mode === m ? `${law.accentColor}12` : "transparent",
                }}>
                {m === "raw" ? "БҮЛЭГДЭЭГҮЙ" : "БҮЛЭГЛЭСЭН"}
              </button>
            ))}
          </div>

          <div className="glass-card p-5 flex flex-col gap-3">
            {phase === "show" && (
              <div className="text-center">
                <p className="font-mono text-white/30 mb-2" style={{ fontSize: "0.5rem" }}>3 секунд цээжлэ</p>
                <p className="font-mono text-white/80" style={{ fontSize: mode === "raw" ? "1.3rem" : "1.1rem", letterSpacing: mode === "raw" ? "0.05em" : "0.3em" }}>
                  {mode === "raw" ? RAW : CHUNKED}
                </p>
                <button onClick={start} className="mt-4 font-mono text-white/40 hover:text-white/70 transition-colors" style={{ fontSize: "0.55rem", letterSpacing: "0.15em", border: "0.5px solid rgba(240,237,230,0.15)", padding: "6px 14px" }}>
                  ЭХЛЭХ →
                </button>
              </div>
            )}
            {phase === "input" && (
              <div className="text-center">
                <p className="font-mono text-white/30 mb-3" style={{ fontSize: "0.5rem" }}>Цээжилсэн тоогоо бич</p>
                <input
                  type="text" value={input} onChange={e => setInput(e.target.value)}
                  className="w-full text-center font-mono bg-transparent outline-none text-white/80"
                  style={{ fontSize: "1.1rem", borderBottom: `0.5px solid ${law.accentColor}50`, paddingBottom: "6px" }}
                  placeholder="_ _ _ _ _ _ _ _ _ _"
                  autoFocus
                />
                <button onClick={() => setPhase("result")} className="mt-4 font-mono transition-colors" style={{ fontSize: "0.55rem", letterSpacing: "0.15em", padding: "6px 14px", background: `${law.accentColor}20`, color: law.accentColor }}>
                  ШАЛГАХ
                </button>
              </div>
            )}
            {phase === "result" && (
              <AnimatePresence>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
                  <p className="font-mono mb-1" style={{ fontSize: "0.5rem", color: input.replace(/\D/g,"") === RAW ? "#6B7A3A" : "#B04A4A", opacity: 0.8 }}>
                    {input.replace(/\D/g,"") === RAW ? "✓ ЗӨВТГЭСЭН" : "✗ БУРУУ"}
                  </p>
                  <p className="font-sans text-white/50 leading-relaxed mb-3" style={{ fontSize: "0.72rem" }}>
                    {mode === "raw" ? "Бүлэгдээгүй тоо санахад хэцүү байсан уу?" : "Бүлэглэлт санах ойг хөнгөлсөн биз?"}
                  </p>
                  <button onClick={() => { setPhase("show"); setInput(""); }} className="font-sans text-white/25 hover:text-white/50 transition-colors" style={{ fontSize: "0.55rem", letterSpacing: "0.15em" }}>↺ ДАХИН ТУРШИX</button>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>
        <div className="absolute bottom-5 right-7 page-number">24</div>
      </div>
    </div>
  );
}

const Law03Spread4 = { Left, Right };
export default Law03Spread4;
