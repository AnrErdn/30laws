"use client";
import type { Law } from "@/types/law";
import { useState } from "react";

const CLUTTERED_ITEMS = ["🖼", "📊", "🎵", "💬", "🔔", "⚙️", "📁", "🌐", "🔍", "❤️", "📅", "🏷", "💡", "🔗", "📌"];
const CLEAN_ITEMS = ["🔍", "📁", "⚙️"];

function Left({ law }: { law: Law }) {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <span className="category-tag" style={{ color: law.accentColor }}>Интерактив туршилт</span>
        <div className="relative z-10">
          <h2 className="font-display text-white/80 leading-none" style={{ fontSize: "clamp(2rem,5vw,4rem)" }}>FEEL<br/>THE<br/>LAW</h2>
          <div className="mt-4 h-px w-12" style={{ background: law.accentColor, opacity: 0.5 }}/>
          <p className="font-sans text-white/40 mt-4 leading-relaxed" style={{ fontSize: "0.72rem" }}>
            Хоёр интерфейсээс &ldquo;тохиргоо&rdquo; (⚙️) иконыг хэр хурдан олохыг мэдэрнэ үү.
          </p>
        </div>
        <div className="p-4 relative z-10" style={{ borderLeft: `2px solid ${law.accentColor}`, background: `${law.accentColor}08` }}>
          <p className="category-tag mb-2" style={{ color: law.accentColor }}>Дизайнерийн дүгнэлт</p>
          <p className="font-serif italic text-white/70 leading-relaxed" style={{ fontSize: "0.78rem" }}>&ldquo;{law.takeaway}&rdquo;</p>
        </div>
        <span className="page-number">39</span>
      </div>
    </div>
  );
}

function Right({ law }: { law: Law }) {
  const [mode, setMode] = useState<"cluttered" | "clean">("cluttered");
  const [found, setFound] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState<number | null>(null);

  const items = mode === "cluttered" ? CLUTTERED_ITEMS : CLEAN_ITEMS;

  const handleStart = () => { setFound(false); setElapsed(null); setStartTime(Date.now()); };
  const handleClick = (item: string) => {
    if (item === "⚙️" && startTime && !found) {
      setFound(true);
      setElapsed(Date.now() - startTime);
    }
  };

  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content h-full p-8 pb-14 overflow-y-auto page-scroll flex flex-col gap-4">
        <div>
          <h2 className="category-tag mb-1" style={{ color: law.accentColor }}>Туршилт</h2>
          <p className="font-serif text-white/80 mb-3" style={{ fontSize: "0.95rem" }}>⚙️ тохиргооны иконыг хайж олоорой</p>

          <div className="flex gap-2 mb-3">
            {(["cluttered", "clean"] as const).map(m => (
              <button key={m} onClick={() => { setMode(m); setFound(false); setElapsed(null); setStartTime(null); }}
                className="font-mono transition-all"
                style={{ fontSize: "0.5rem", letterSpacing: "0.12em", padding: "4px 8px",
                  border: `0.5px solid ${mode === m ? law.accentColor : "rgba(240,237,230,0.15)"}`,
                  color: mode === m ? law.accentColor : "rgba(240,237,230,0.3)",
                  background: mode === m ? `${law.accentColor}12` : "transparent" }}>
                {m === "cluttered" ? "15 ИКОН" : "3 ИКОН"}
              </button>
            ))}
          </div>

          {!startTime && (
            <button onClick={handleStart} className="w-full font-mono mb-3 transition-colors"
              style={{ fontSize: "0.6rem", letterSpacing: "0.15em", padding: "8px", border: `0.5px solid ${law.accentColor}50`, color: law.accentColor, background: `${law.accentColor}12` }}>
              ЭХЛЭХ →
            </button>
          )}

          {startTime && !found && (
            <div className="glass-card p-3 mb-3">
              <div className="flex flex-wrap gap-2 justify-center">
                {items.map((item, i) => (
                  <button key={i} onClick={() => handleClick(item)}
                    className="text-lg transition-transform hover:scale-110"
                    style={{ width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center",
                      background: "rgba(240,237,230,0.04)", borderRadius: "4px", border: "0.5px solid rgba(240,237,230,0.08)", fontSize: "1rem" }}>
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {found && elapsed !== null && (
            <div className="glass-card p-4 text-center">
              <p className="font-mono mb-1" style={{ fontSize: "0.5rem", color: law.accentColor, opacity: 0.7 }}>ОЛДСОН</p>
              <p className="font-mono text-white/80 mb-2" style={{ fontSize: "1.2rem" }}>{(elapsed / 1000).toFixed(2)}с</p>
              <p className="font-sans text-white/50 leading-relaxed mb-3" style={{ fontSize: "0.7rem" }}>
                {mode === "cluttered" ? "15 иконы дундаас олоход удсан биз? Cognitive load өндөр байна." : "3 иконы дундаас амархан олсон биз? Cognitive load бага."}
              </p>
              <button onClick={() => { setFound(false); setElapsed(null); setStartTime(null); }}
                className="font-sans text-white/25 hover:text-white/50 transition-colors" style={{ fontSize: "0.55rem", letterSpacing: "0.15em" }}>
                ↺ ДАХИН ТУРШИX
              </button>
            </div>
          )}
        </div>
        <div className="absolute bottom-5 right-7 page-number">40</div>
      </div>
    </div>
  );
}

const Law05Spread4 = { Left, Right };
export default Law05Spread4;
