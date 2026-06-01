"use client";
import type { Law } from "@/types/law";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OPTIONS_3 = ["Цай", "Кофе", "Ус"];
const OPTIONS_12 = ["Цай", "Кофе", "Ус", "Сүү", "Шүүс", "Кола", "Лемонад", "Матча", "Капучино", "Эспрессо", "Шоколад", "Комбуча"];

function Left({ law }: { law: Law }) {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <span className="category-tag" style={{ color: law.accentColor }}>Интерактив туршилт</span>
        <div className="relative z-10">
          <h2 className="font-display text-white/80 leading-none" style={{ fontSize: "clamp(2rem,5vw,4rem)" }}>
            FEEL<br/>THE<br/>LAW
          </h2>
          <div className="mt-4 h-px w-12" style={{ background: law.accentColor, opacity: 0.5 }}/>
          <p className="font-sans text-white/40 mt-4 leading-relaxed" style={{ fontSize: "0.72rem" }}>
            3 сонголт болон 12 сонголттой тохиолдлыг харьцуулж үзнэ үү. Аль нь хурдан шийдвэр гаргуулдаг?
          </p>
        </div>
        <div className="p-4 relative z-10" style={{ borderLeft: `2px solid ${law.accentColor}`, background: `${law.accentColor}08` }}>
          <p className="category-tag mb-2" style={{ color: law.accentColor }}>Дизайнерийн дүгнэлт</p>
          <p className="font-serif italic text-white/70 leading-relaxed" style={{ fontSize: "0.78rem" }}>
            &ldquo;{law.takeaway}&rdquo;
          </p>
        </div>
        <span className="page-number">15</span>
      </div>
    </div>
  );
}

function Right({ law }: { law: Law }) {
  const [mode, setMode] = useState<3 | 12>(3);
  const [chosen, setChosen] = useState<string | null>(null);
  const opts = mode === 3 ? OPTIONS_3 : OPTIONS_12;

  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content h-full p-8 pb-14 overflow-y-auto page-scroll flex flex-col gap-5">
        <div>
          <h2 className="category-tag mb-1" style={{ color: law.accentColor }}>Туршилт</h2>
          <p className="font-serif text-white/80 mb-4" style={{ fontSize: "1rem" }}>Унд сонго — дотроо хичнээн хурдан шийдснээ ажиглаарай.</p>

          {/* Mode toggle */}
          <div className="flex gap-2 mb-4">
            {([3, 12] as const).map(n => (
              <button key={n} onClick={() => { setMode(n); setChosen(null); }}
                className="font-mono transition-all"
                style={{
                  fontSize: "0.55rem", letterSpacing: "0.15em", padding: "4px 10px",
                  border: `0.5px solid ${mode === n ? law.accentColor : "rgba(240,237,230,0.15)"}`,
                  color: mode === n ? law.accentColor : "rgba(240,237,230,0.3)",
                  background: mode === n ? `${law.accentColor}12` : "transparent",
                }}>
                {n} СОНГОЛТ
              </button>
            ))}
          </div>

          <div className="glass-card p-4">
            <div className="grid grid-cols-3 gap-2 mb-3">
              {opts.map(opt => (
                <button key={opt} onClick={() => !chosen && setChosen(opt)}
                  disabled={!!chosen}
                  className="font-sans transition-all"
                  style={{
                    fontSize: "0.65rem", padding: "8px 4px", textAlign: "center",
                    border: `0.5px solid ${chosen === opt ? law.accentColor : "rgba(240,237,230,0.12)"}`,
                    color: chosen ? (chosen === opt ? law.accentColor : "rgba(240,237,230,0.2)") : "rgba(240,237,230,0.65)",
                    background: chosen === opt ? `${law.accentColor}15` : "transparent",
                    borderRadius: "2px",
                  }}>
                  {opt}
                </button>
              ))}
            </div>

            <AnimatePresence>
              {chosen && (
                <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}
                  className="border-t pt-3" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                  <p className="font-serif italic text-white/70 mb-2 leading-relaxed" style={{ fontSize: "0.78rem" }}>
                    {mode === 3
                      ? "3 сонголттой байхад шийдвэр хурдан гарсан биз дээ?"
                      : "12 сонголт харахад удаан бодсон биз? Тэр саатал бол Choice Overload."}
                  </p>
                  <button onClick={() => setChosen(null)} className="font-sans text-white/25 hover:text-white/50 transition-colors" style={{ fontSize: "0.55rem", letterSpacing: "0.15em" }}>
                    ↺ ДАХИН ТУРШИX
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="absolute bottom-5 right-7 page-number">16</div>
      </div>
    </div>
  );
}

const Law02Spread4 = { Left, Right };
export default Law02Spread4;
