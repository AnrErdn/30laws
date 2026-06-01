"use client";
import type { Law } from "@/types/law";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DELAYS = [
  { label: "100ms", ms: 100, verdict: "Гайхалтай хурдан. Flow мэдрэмж бүрэн байна." },
  { label: "400ms", ms: 400, verdict: "Босго. Хүлээж байгаа мэт мэдрэгдэж эхэлнэ." },
  { label: "800ms", ms: 800, verdict: "Удаан. Анхаарал тасардаг. Дахин дардаг мэдрэмж төрнө." },
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
            Гурван өөр хариу хугацааг биеэрээ мэдрэнэ үү. Аль нь хамгийн бухимдалтай вэ?
          </p>
        </div>
        <div className="p-4 relative z-10" style={{ borderLeft: `2px solid ${law.accentColor}`, background: `${law.accentColor}08` }}>
          <p className="category-tag mb-2" style={{ color: law.accentColor }}>Дизайнерийн дүгнэлт</p>
          <p className="font-serif italic text-white/70 leading-relaxed" style={{ fontSize: "0.78rem" }}>&ldquo;{law.takeaway}&rdquo;</p>
        </div>
        <span className="page-number">47</span>
      </div>
    </div>
  );
}

function Right({ law }: { law: Law }) {
  const [selectedDelay, setSelectedDelay] = useState(DELAYS[0]);
  const [state, setState] = useState<"idle" | "waiting" | "done">("idle");
  const [verdict, setVerdict] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handlePress = () => {
    if (state === "waiting") return;
    setState("waiting");
    setVerdict("");
    timerRef.current = setTimeout(() => {
      setState("done");
      setVerdict(selectedDelay.verdict);
    }, selectedDelay.ms);
  };

  const reset = () => { setState("idle"); setVerdict(""); };

  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content h-full p-8 pb-14 overflow-y-auto page-scroll flex flex-col gap-4">
        <div>
          <h2 className="category-tag mb-1" style={{ color: law.accentColor }}>Туршилт</h2>
          <p className="font-serif text-white/80 mb-4" style={{ fontSize: "0.95rem" }}>Хариу хугацааг биеэрээ мэдрэнэ үү</p>

          {/* Delay selector */}
          <div className="flex gap-2 mb-4">
            {DELAYS.map(d => (
              <button key={d.label} onClick={() => { setSelectedDelay(d); reset(); }}
                className="font-mono transition-all"
                style={{
                  fontSize: "0.5rem", letterSpacing: "0.1em", padding: "4px 8px",
                  border: `0.5px solid ${selectedDelay.ms === d.ms ? law.accentColor : "rgba(240,237,230,0.15)"}`,
                  color: selectedDelay.ms === d.ms ? law.accentColor : "rgba(240,237,230,0.3)",
                  background: selectedDelay.ms === d.ms ? `${law.accentColor}12` : "transparent",
                }}>
                {d.label}
              </button>
            ))}
          </div>

          <div className="glass-card p-5 flex flex-col items-center gap-4">
            <button
              onClick={handlePress}
              disabled={state === "waiting"}
              style={{
                width: "80px", height: "80px", borderRadius: "50%",
                border: `1.5px solid ${state === "waiting" ? "rgba(240,237,230,0.1)" : law.accentColor}`,
                background: state === "waiting" ? "rgba(240,237,230,0.03)" : `${law.accentColor}15`,
                color: state === "waiting" ? "rgba(240,237,230,0.2)" : law.accentColor,
                fontFamily: "var(--font-dm-mono)", fontSize: "0.55rem", letterSpacing: "0.1em",
                cursor: state === "waiting" ? "not-allowed" : "pointer",
                transition: "all 0.15s",
              }}>
              {state === "waiting" ? "..." : state === "done" ? "✓" : "ДАРАХ"}
            </button>

            <AnimatePresence>
              {verdict && (
                <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="text-center">
                  <p className="font-mono mb-1" style={{ fontSize: "0.5rem", color: law.accentColor, opacity: 0.7 }}>{selectedDelay.label} ХАРИУ</p>
                  <p className="font-sans text-white/60 leading-relaxed" style={{ fontSize: "0.72rem" }}>{verdict}</p>
                  <button onClick={reset} className="mt-3 font-sans text-white/25 hover:text-white/50 transition-colors" style={{ fontSize: "0.55rem", letterSpacing: "0.15em" }}>
                    ↺ ДАХИН ТУРШИX
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="absolute bottom-5 right-7 page-number">48</div>
      </div>
    </div>
  );
}

const Law06Spread4 = { Left, Right };
export default Law06Spread4;
