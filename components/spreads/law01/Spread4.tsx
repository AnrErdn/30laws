"use client";
import type { Law } from "@/types/law";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Left({ law }: { law: Law }) {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <div>
          <span className="category-tag" style={{ color: law.accentColor }}>
            Интерактив туршилт
          </span>
        </div>

        {/* Big section label */}
        <div className="relative z-10">
          <h2
            className="font-display text-white/80 leading-none"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            FEEL<br/>THE<br/>LAW
          </h2>
          <div className="mt-4 h-px w-12" style={{ background: law.accentColor, opacity: 0.5 }}/>
          <p className="font-sans text-white/40 mt-4 leading-relaxed" style={{ fontSize: "0.72rem" }}>
            Зүүн талын туршилтыг хийж үзээрэй.
            Аль товчлуур илүү найдвартай санагдав?
          </p>
        </div>

        {/* Designer takeaway */}
        <div
          className="p-4 relative z-10"
          style={{
            borderLeft: `2px solid ${law.accentColor}`,
            background: `${law.accentColor}08`,
          }}
        >
          <p className="category-tag mb-2" style={{ color: law.accentColor }}>
            Дизайнерийн дүгнэлт
          </p>
          <p className="font-serif italic text-white/70 leading-relaxed" style={{ fontSize: "0.78rem" }}>
            &ldquo;{law.takeaway}&rdquo;
          </p>
        </div>

        <span className="page-number">07</span>
      </div>
    </div>
  );
}

function Right({ law }: { law: Law }) {
  const [choice, setChoice] = useState<"ugly" | "beautiful" | null>(null);

  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content h-full p-8 pb-14 overflow-y-auto page-scroll flex flex-col justify-between">
        <div>
          <h2 className="category-tag mb-1" style={{ color: law.accentColor }}>
            Туршилт
          </h2>
          <p className="font-serif text-white/80 mb-5" style={{ fontSize: "1.1rem" }}>
            Аль нь илүү найдвартай мэт санагдаж байна?
          </p>

          <p className="font-sans text-white/40 mb-6" style={{ fontSize: "0.75rem" }}>
            Хоёр товчлуур яг ижил үйлдэл хийдэг. Зүгээр л өөрийн мэдрэмжийг дагаж сонго.
          </p>

          {/* Glass card wrapper */}
          <div className="glass-card p-5 mb-5">
            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* Ugly */}
              <div className="space-y-2">
                <span className="font-mono text-white/25" style={{ fontSize: "0.5rem", letterSpacing: "0.15em" }}>СОНГОЛТ А</span>
                <button
                  onClick={() => choice === null && setChoice("ugly")}
                  disabled={choice !== null}
                  className="w-full"
                  style={{
                    background: "#2d1f00",
                    color: "#ffcc00",
                    border: "3px solid #ff0000",
                    borderRadius: "0",
                    padding: "10px 6px",
                    fontFamily: "Georgia, serif",
                    fontSize: "11px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    cursor: choice !== null ? "default" : "pointer",
                    opacity: choice === "beautiful" ? 0.35 : 1,
                    boxShadow: choice === null ? "3px 3px 0 #ff0000" : "none",
                    transition: "opacity 0.3s",
                  }}
                >
                  {choice === "ugly" ? "✓ Сонгосон" : "ИЛГЭЭХ ТОВЧ!"}
                </button>
              </div>

              {/* Beautiful */}
              <div className="space-y-2">
                <span className="font-mono" style={{ fontSize: "0.5rem", letterSpacing: "0.15em", color: law.accentColor, opacity: 0.6 }}>СОНГОЛТ Б</span>
                <button
                  onClick={() => choice === null && setChoice("beautiful")}
                  disabled={choice !== null}
                  className="w-full"
                  style={{
                    background: law.accentColor,
                    color: "#F0EDE6",
                    border: "none",
                    borderRadius: "3px",
                    padding: "11px 6px",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    cursor: choice !== null ? "default" : "pointer",
                    opacity: choice === "ugly" ? 0.35 : 1,
                    boxShadow: choice === null ? `0 2px 14px ${law.accentColor}50` : "none",
                    transition: "opacity 0.3s",
                  }}
                >
                  {choice === "beautiful" ? "✓ Сонгосон" : "Илгээх"}
                </button>
              </div>
            </div>

            <AnimatePresence>
              {choice && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="border-t pt-4"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <p className="font-serif italic text-white/75 mb-2 leading-relaxed" style={{ fontSize: "0.8rem" }}>
                    {choice === "beautiful"
                      ? "Та гоё дизайнтайг сонгов. Гэхдээ хоёулаа яг ижил."
                      : "Та А-г сонгов — сонирхолтой! Ихэнх хүн Б-г сонгодог."}
                  </p>
                  <p className="font-sans text-white/45 leading-relaxed" style={{ fontSize: "0.72rem" }}>
                    Хоёулаа яг ижил үйлдэл хийдэг.{" "}
                    <span style={{ color: law.accentColor }}>Гоё дизайн нь найдвартай мэт мэдрэгддэг</span>{" "}
                    — энэ бол Aesthetic-Usability Effect.
                  </p>
                  <button
                    onClick={() => setChoice(null)}
                    className="mt-3 font-sans text-white/25 hover:text-white/50 transition-colors"
                    style={{ fontSize: "0.55rem", letterSpacing: "0.15em" }}
                  >
                    ↺ ДАХИН ТУРШИX
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="absolute bottom-5 right-7 page-number">08</div>
      </div>
    </div>
  );
}

const Law01Spread4 = { Left, Right };
export default Law01Spread4;
