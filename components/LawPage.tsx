"use client";

import type { Law } from "@/types/law";
import AestheticUsabilityIllustration from "./illustrations/AestheticUsabilityIllustration";
import AestheticUsabilityDemo from "./demos/AestheticUsabilityDemo";

interface LawPageProps {
  law: Law;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

function getIllustration(slug: string, accentColor: string) {
  if (slug === "aesthetic-usability-effect") {
    return <AestheticUsabilityIllustration accentColor={accentColor} />;
  }
  return <DefaultIllustration accentColor={accentColor} />;
}

function getDemo(law: Law) {
  if (law.slug === "aesthetic-usability-effect" && law.hasDemo) {
    return <AestheticUsabilityDemo accentColor={law.accentColor} />;
  }
  return null;
}

function DefaultIllustration({ accentColor }: { accentColor: string }) {
  return (
    <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="150" cy="150" r="100" stroke={accentColor} strokeWidth="0.5" opacity="0.3" />
      <circle cx="150" cy="150" r="60" stroke={accentColor} strokeWidth="0.5" opacity="0.5" />
      <circle cx="150" cy="150" r="20" fill={accentColor} opacity="0.4" />
    </svg>
  );
}

export default function LawPage({ law, onNext, onPrev, hasNext, hasPrev }: LawPageProps) {
  const demo = getDemo(law);

  return (
    <div className="relative w-full h-full flex bg-page-bg">
      {/* LEFT PAGE */}
      <div
        className="relative w-[42%] flex-shrink-0 flex flex-col justify-between p-10 border-r texture-page overflow-hidden"
        style={{ borderColor: "#2A2A26" }}
      >
        {/* Category tag */}
        <div>
          <span
            className="category-tag"
            style={{ color: law.accentColor }}
          >
            {law.categoryLabel}
          </span>
        </div>

        {/* Large law number — bleeds off edge */}
        <div
          className="absolute font-display leading-none select-none pointer-events-none"
          style={{
            fontSize: "clamp(8rem, 18vw, 22rem)",
            color: law.accentColor,
            opacity: 0.12,
            bottom: "-0.1em",
            left: "-0.05em",
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          {String(law.id).padStart(2, "0")}
        </div>

        {/* SVG Illustration */}
        <div className="relative z-10 flex-1 flex items-center justify-center py-8">
          <div className="w-full max-w-[280px] aspect-square">
            {getIllustration(law.slug, law.accentColor)}
          </div>
        </div>

        {/* Page number */}
        <div className="relative z-10">
          <span className="page-number">
            {String(law.id).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* RIGHT PAGE */}
      <div className="flex-1 flex flex-col relative texture-page">
        <div className="flex-1 right-page-scroll overflow-y-auto p-10 pt-8 pb-16">
          {/* Law title + definition */}
          <div className="mb-6">
            <h1
              className="font-serif text-text-primary leading-tight mb-4"
              style={{ fontSize: "clamp(1.6rem, 3vw, 3rem)" }}
            >
              {law.title}
            </h1>
            <p
              className="font-sans text-text-primary leading-relaxed"
              style={{ fontSize: "1rem", opacity: 0.9 }}
            >
              {law.definition}
            </p>
          </div>

          <hr className="section-rule" />

          {/* The Principle */}
          <div className="mb-6">
            <h2
              className="category-tag mb-3"
              style={{ color: law.accentColor }}
            >
              Зарчим
            </h2>
            <div className="space-y-3">
              {law.principle.map((para, i) => (
                <p
                  key={i}
                  className="font-sans text-text-primary"
                  style={{ fontSize: "0.875rem", lineHeight: "1.75", opacity: 0.85 }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          <hr className="section-rule" />

          {/* Examples */}
          <div className="mb-6 grid grid-cols-1 gap-5">
            <div>
              <h3
                className="category-tag mb-2"
                style={{ color: law.accentColor }}
              >
                Бодит жишээ — {law.physicalExample.title}
              </h3>
              <p
                className="font-sans text-text-muted"
                style={{ fontSize: "0.8rem", lineHeight: "1.7" }}
              >
                {law.physicalExample.description}
              </p>
            </div>

            <div>
              <h3
                className="category-tag mb-2"
                style={{ color: law.accentColor }}
              >
                Дижитал жишээ — {law.digitalExample.title}
              </h3>
              <p
                className="font-sans text-text-muted"
                style={{ fontSize: "0.8rem", lineHeight: "1.7" }}
              >
                {law.digitalExample.description}
              </p>
            </div>
          </div>

          {/* Interactive Demo */}
          {demo && (
            <>
              <hr className="section-rule" />
              <div className="mb-6">
                <h2
                  className="category-tag mb-4"
                  style={{ color: law.accentColor }}
                >
                  Интерактив туршилт
                </h2>
                {demo}
              </div>
            </>
          )}

          <hr className="section-rule" />

          {/* Takeaway */}
          <div className="mb-8">
            <h2
              className="category-tag mb-3"
              style={{ color: law.accentColor }}
            >
              Дизайнерийн дүгнэлт
            </h2>
            <p
              className="font-serif text-text-primary italic"
              style={{ fontSize: "0.95rem", lineHeight: "1.7", opacity: 0.9 }}
            >
              &ldquo;{law.takeaway}&rdquo;
            </p>
          </div>
        </div>

        {/* Page number + navigation hint */}
        <div
          className="absolute bottom-6 right-10 flex items-center gap-6 z-10"
        >
          {hasPrev && (
            <button
              onClick={onPrev}
              className="font-sans text-text-muted hover:text-text-primary transition-colors"
              style={{ fontSize: "0.6rem", letterSpacing: "0.15em" }}
            >
              ← ӨМНӨХ
            </button>
          )}
          <span className="page-number">{String(law.id).padStart(2, "0")}</span>
          {hasNext && (
            <button
              onClick={onNext}
              className="font-sans text-text-muted hover:text-text-primary transition-colors"
              style={{ fontSize: "0.6rem", letterSpacing: "0.15em" }}
            >
              ДАРААХ →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
