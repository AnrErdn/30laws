"use client";

import type { Law } from "@/types/law";

const CATEGORY_ORDER = [
  "behavior-emotion",
  "cognitive-load",
  "decision-making",
  "perception-gestalt",
  "system-engineering",
];

const CATEGORY_LABELS: Record<string, string> = {
  "behavior-emotion": "Behavior & Emotion",
  "cognitive-load": "Cognitive Load",
  "decision-making": "Decision Making",
  "perception-gestalt": "Perception & Gestalt",
  "system-engineering": "System & Engineering",
};

const CATEGORY_COLORS: Record<string, string> = {
  "behavior-emotion": "#B04A4A",
  "cognitive-load": "#4A6FA5",
  "decision-making": "#C4872A",
  "perception-gestalt": "#3D7A6F",
  "system-engineering": "#6B7A3A",
};

interface ContentsPageProps {
  laws: Law[];
  onSelectLaw: (id: number) => void;
  onBack: () => void;
  onNext: () => void;
}

export default function ContentsPage({ laws, onSelectLaw }: ContentsPageProps) {
  const byCategory = CATEGORY_ORDER.map((cat) => ({
    category: cat,
    laws: laws.filter((l) => l.category === cat).sort((a, b) => a.id - b.id),
  }));

  return (
    <div className="relative w-full h-full bg-page-bg texture-page flex overflow-hidden">
      {/* Left panel — title */}
      <div className="w-[28%] flex-shrink-0 flex flex-col justify-between p-10 border-r border-rule">
        <div>
          <p className="category-tag text-text-muted mb-6" style={{ letterSpacing: "0.25em" }}>
            Contents
          </p>
          <h2
            className="font-display text-text-primary leading-none"
            style={{ fontSize: "clamp(3rem, 6vw, 7rem)" }}
          >
            30<br />LAWS
          </h2>
          <div className="mt-6 h-px w-12 bg-text-muted opacity-30" />
          <p className="font-sans text-text-muted mt-5 leading-relaxed" style={{ fontSize: "0.75rem" }}>
            Бүх 30 хуулийг 5 ангилалд<br />хуваан судална.
          </p>
        </div>

        {/* Category legend */}
        <div className="space-y-3">
          {CATEGORY_ORDER.map((cat) => (
            <div key={cat} className="flex items-center gap-3">
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: CATEGORY_COLORS[cat] }}
              />
              <span className="font-sans text-text-muted" style={{ fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                {CATEGORY_LABELS[cat]}
              </span>
            </div>
          ))}
        </div>

        <span className="page-number">00</span>
      </div>

      {/* Right panel — law list */}
      <div className="flex-1 overflow-y-auto right-page-scroll p-10 pt-8">
        <div className="space-y-8">
          {byCategory.map(({ category, laws: catLaws }) => (
            <div key={category}>
              {/* Category header */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: CATEGORY_COLORS[category] }}
                />
                <span
                  className="font-sans uppercase"
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    color: CATEGORY_COLORS[category],
                    opacity: 0.8,
                  }}
                >
                  {CATEGORY_LABELS[category]}
                </span>
                <div className="flex-1 h-px" style={{ background: CATEGORY_COLORS[category], opacity: 0.15 }} />
              </div>

              {/* Laws in this category */}
              <div className="space-y-0">
                {catLaws.map((law) => (
                  <button
                    key={law.id}
                    onClick={() => onSelectLaw(law.id)}
                    className="group w-full flex items-baseline justify-between py-2.5 border-b transition-all duration-200"
                    style={{ borderColor: "rgba(42,42,38,0.5)" }}
                  >
                    <div className="flex items-baseline gap-5">
                      <span
                        className="font-mono text-text-muted group-hover:text-text-primary transition-colors"
                        style={{ fontSize: "0.6rem", letterSpacing: "0.1em", minWidth: "1.8rem" }}
                      >
                        {String(law.id).padStart(2, "0")}
                      </span>
                      <span
                        className="font-serif text-text-primary group-hover:opacity-100 transition-all text-left"
                        style={{ fontSize: "0.9rem" }}
                      >
                        {law.title}
                      </span>
                    </div>
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0 ml-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: CATEGORY_COLORS[law.category] }}
                    />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="h-16" />
      </div>
    </div>
  );
}
