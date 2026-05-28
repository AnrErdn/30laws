"use client";
import type { Law } from "@/types/law";

const CATEGORY_COLORS: Record<string, string> = {
  "behavior-emotion": "#B04A4A",
  "cognitive-load": "#4A6FA5",
  "decision-making": "#C4872A",
  "perception-gestalt": "#3D7A6F",
  "system-engineering": "#6B7A3A",
};

const CATEGORY_ORDER = ["behavior-emotion","cognitive-load","decision-making","perception-gestalt","system-engineering"];
const CATEGORY_LABELS: Record<string,string> = {
  "behavior-emotion": "Behavior & Emotion",
  "cognitive-load": "Cognitive Load",
  "decision-making": "Decision Making",
  "perception-gestalt": "Perception & Gestalt",
  "system-engineering": "System & Engineering",
};

function Left() {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-8 h-full">
        <div>
          <p className="category-tag text-white/30 mb-5" style={{ letterSpacing: "0.25em" }}>Contents</p>
          <h2 className="font-display text-white/90 leading-none" style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}>
            30<br/>LAWS
          </h2>
          <div className="mt-5 h-px bg-white/10 w-10"/>
          <p className="font-sans text-white/35 mt-4 leading-relaxed" style={{ fontSize: "0.7rem" }}>
            Бүх 30 хуулийг<br/>5 ангилалд хуваан<br/>судална.
          </p>
        </div>

        {/* Category legend */}
        <div className="space-y-2.5">
          {CATEGORY_ORDER.map(cat => (
            <div key={cat} className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: CATEGORY_COLORS[cat] }}/>
              <span className="font-sans text-white/35" style={{ fontSize: "0.55rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                {CATEGORY_LABELS[cat]}
              </span>
            </div>
          ))}
        </div>

        <span className="page-number">00</span>
      </div>
    </div>
  );
}

function Right({ laws }: { laws: Law[] }) {
  const byCategory = CATEGORY_ORDER.map(cat => ({
    cat,
    items: laws.filter(l => l.category === cat).sort((a,b) => a.id - b.id),
  }));

  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content page-scroll h-full p-8 pt-7 pb-14 overflow-y-auto">
        <div className="space-y-6">
          {byCategory.map(({ cat, items }) => (
            <div key={cat}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: CATEGORY_COLORS[cat] }}/>
                <span className="font-sans" style={{ fontSize: "0.55rem", letterSpacing: "0.18em", color: CATEGORY_COLORS[cat], textTransform: "uppercase", opacity: 0.75 }}>
                  {CATEGORY_LABELS[cat]}
                </span>
                <div className="flex-1 h-px" style={{ background: CATEGORY_COLORS[cat], opacity: 0.12 }}/>
              </div>
              {items.map(law => (
                <div key={law.id} className="flex items-baseline justify-between py-2 border-b" style={{ borderColor: "rgba(42,42,38,0.5)" }}>
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-white/25" style={{ fontSize: "0.55rem", minWidth: "1.6rem" }}>
                      {String(law.id).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-white/70" style={{ fontSize: "0.8rem" }}>
                      {law.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const TocSpread = { Left, Right };
export default TocSpread;
