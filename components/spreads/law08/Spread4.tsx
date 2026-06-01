"use client";
import type { Law } from "@/types/law";
import { useState } from "react";

function Left({ law }: { law: Law }) {
  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content flex flex-col justify-between p-7 h-full">
        <span className="category-tag" style={{ color: law.accentColor }}>Интерактив туршилт</span>
        <div className="relative z-10">
          <h2 className="font-display text-white/80 leading-none" style={{ fontSize: "clamp(2rem,5vw,4rem)" }}>FEEL<br/>THE<br/>LAW</h2>
          <div className="mt-4 h-px w-12" style={{ background: law.accentColor, opacity: 0.5 }}/>
          <p className="font-sans text-white/40 mt-4 leading-relaxed" style={{ fontSize: "0.72rem" }}>
            Ур чадвар болон даалгаврын хүндрэлийг тохируулж, flow zone-д хэрхэн орохыг харна уу.
          </p>
        </div>
        <div className="p-4 relative z-10" style={{ borderLeft: `2px solid ${law.accentColor}`, background: `${law.accentColor}08` }}>
          <p className="category-tag mb-2" style={{ color: law.accentColor }}>Дизайнерийн дүгнэлт</p>
          <p className="font-serif italic text-white/70 leading-relaxed" style={{ fontSize: "0.78rem" }}>&ldquo;{law.takeaway}&rdquo;</p>
        </div>
        <span className="page-number">63</span>
      </div>
    </div>
  );
}

function Right({ law }: { law: Law }) {
  const [skill, setSkill] = useState(50);
  const [challenge, setChallenge] = useState(50);

  const diff = challenge - skill;
  const isFlow = Math.abs(diff) <= 15;
  const isBoredom = diff < -15;
  // isAnxiety is implicit: !isFlow && !isBoredom

  const state = isFlow ? "FLOW" : isBoredom ? "УЙТГАР" : "СТРЕСС";
  const stateColor = isFlow ? law.accentColor : "rgba(240,237,230,0.3)";
  const stateDesc = isFlow
    ? "Та flow zone-д байна. Ур чадвар болон хүндрэл тэнцвэртэй."
    : isBoredom
    ? "Даалгавар хэт хялбар — уйтгар төрнө. Хүндрэлийг нэмэх хэрэгтэй."
    : "Даалгавар хэт хэцүү — стресс төрнө. Хүндрэлийг бууруул эсвэл ур чадварыг нэмэгдүүл.";

  return (
    <div className="relative w-full h-full texture-page overflow-hidden">
      <div className="page-content h-full p-8 pb-14 overflow-y-auto page-scroll flex flex-col gap-4">
        <div>
          <h2 className="category-tag mb-1" style={{ color: law.accentColor }}>Туршилт — Flow Zone</h2>
          <p className="font-serif text-white/80 mb-4" style={{ fontSize: "0.95rem" }}>Слайдерийг тохируулж flow-д ор</p>

          <div className="glass-card p-5 space-y-5">
            {/* Skill slider */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-mono text-white/40" style={{ fontSize: "0.5rem", letterSpacing: "0.1em" }}>УР ЧАДВАР</span>
                <span className="font-mono" style={{ fontSize: "0.5rem", color: law.accentColor, opacity: 0.6 }}>{skill}%</span>
              </div>
              <input type="range" min={0} max={100} value={skill} onChange={e => setSkill(Number(e.target.value))}
                className="w-full" style={{ accentColor: law.accentColor, height: "2px" }}/>
            </div>

            {/* Challenge slider */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-mono text-white/40" style={{ fontSize: "0.5rem", letterSpacing: "0.1em" }}>ХҮНДРЭЛ</span>
                <span className="font-mono text-white/40" style={{ fontSize: "0.5rem" }}>{challenge}%</span>
              </div>
              <input type="range" min={0} max={100} value={challenge} onChange={e => setChallenge(Number(e.target.value))}
                className="w-full" style={{ accentColor: "rgba(240,237,230,0.3)", height: "2px" }}/>
            </div>

            {/* State display */}
            <div style={{ borderTop: "0.5px solid rgba(240,237,230,0.08)", paddingTop: "12px" }}>
              <p className="font-display mb-2" style={{ fontSize: "1.4rem", color: stateColor, lineHeight: 1 }}>{state}</p>
              <p className="font-sans text-white/50 leading-relaxed" style={{ fontSize: "0.72rem" }}>{stateDesc}</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-5 right-7 page-number">64</div>
      </div>
    </div>
  );
}

const Law08Spread4 = { Left, Right };
export default Law08Spread4;
