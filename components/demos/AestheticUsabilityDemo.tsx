"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  accentColor: string;
}

type Choice = "ugly" | "beautiful" | null;

export default function AestheticUsabilityDemo({ accentColor }: Props) {
  const [choice, setChoice] = useState<Choice>(null);
  const [, setReset] = useState(false);

  const handleChoice = (c: "ugly" | "beautiful") => {
    if (choice !== null) return;
    setChoice(c);
  };

  const handleReset = () => {
    setChoice(null);
    setReset((r) => !r);
  };

  return (
    <div className="space-y-4">
      <p
        className="font-sans text-text-muted"
        style={{ fontSize: "0.75rem", lineHeight: "1.6" }}
      >
        Дараах хоёр товчлуур яг ижил үйлдэл хийдэг. Аль нь илүү найдвартай санагдаж байна?
      </p>

      <div className="grid grid-cols-2 gap-4">
        {/* Ugly button */}
        <div className="space-y-2">
          <span
            className="font-sans text-text-muted block"
            style={{ fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase" }}
          >
            Сонголт А
          </span>
          <button
            onClick={() => handleChoice("ugly")}
            disabled={choice !== null}
            className="w-full relative transition-all duration-150"
            style={{
              background: "#2d1f00",
              color: "#ffcc00",
              border: "3px solid #ff0000",
              borderRadius: "0px",
              padding: "12px 8px",
              fontFamily: "Comic Sans MS, cursive, sans-serif",
              fontSize: "13px",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "0px",
              cursor: choice !== null ? "default" : "pointer",
              opacity: choice === "beautiful" ? 0.4 : 1,
              boxShadow: choice === null ? "3px 3px 0px #ff0000" : "none",
            }}
          >
            {choice === "ugly" ? "✓ Сонгосон" : "ИЛГЭЭХ ТОВЧ"}
          </button>
          {choice === "ugly" && (
            <motion.p
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-sans"
              style={{ fontSize: "0.65rem", color: accentColor, lineHeight: 1.5 }}
            >
              Та A-г сонгов.
            </motion.p>
          )}
        </div>

        {/* Beautiful button */}
        <div className="space-y-2">
          <span
            className="font-sans text-text-muted block"
            style={{ fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase" }}
          >
            Сонголт Б
          </span>
          <button
            onClick={() => handleChoice("beautiful")}
            disabled={choice !== null}
            className="w-full transition-all duration-150"
            style={{
              background: accentColor,
              color: "#F0EDE6",
              border: "none",
              borderRadius: "3px",
              padding: "13px 8px",
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              cursor: choice !== null ? "default" : "pointer",
              opacity: choice === "ugly" ? 0.4 : 1,
              boxShadow: choice === null
                ? `0 2px 12px ${accentColor}40`
                : "none",
            }}
          >
            {choice === "beautiful" ? "✓ Сонгосон" : "Илгээх"}
          </button>
          {choice === "beautiful" && (
            <motion.p
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-sans"
              style={{ fontSize: "0.65rem", color: accentColor, lineHeight: 1.5 }}
            >
              Та Б-г сонгов.
            </motion.p>
          )}
        </div>
      </div>

      {/* Reveal */}
      <AnimatePresence>
        {choice !== null && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="border-t pt-4"
            style={{ borderColor: "#2A2A26" }}
          >
            <p
              className="font-serif text-text-primary italic mb-2"
              style={{ fontSize: "0.85rem", lineHeight: 1.6 }}
            >
              {choice === "beautiful"
                ? "Та гоё дизайнтай товчлуурыг сонгов. Гэхдээ хоёулаа яг ижил үйлдэл хийдэг."
                : "Та A-г сонгов — сонирхолтой! Ихэнх хүн Б-г сонгодог. Гэхдээ хоёулаа яг ижил үйлдэл хийдэг."}
            </p>
            <p
              className="font-sans text-text-muted"
              style={{ fontSize: "0.75rem", lineHeight: 1.6 }}
            >
              Энэ бол Aesthetic-Usability Effect. Гоё дизайн нь хэрэглэгчдэд&nbsp;
              <span style={{ color: accentColor }}>илүү найдвартай, илүү ажиллагаатай</span>
              &nbsp;мэт санагддаг — хэдий функц нь яг адилхан байсан ч.
            </p>

            <button
              onClick={handleReset}
              className="mt-4 font-sans text-text-muted hover:text-text-primary transition-colors"
              style={{ fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase" }}
            >
              ↺ Дахин туршиx
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
