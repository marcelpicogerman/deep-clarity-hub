"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const segments = [
  {
    name: "Identität",
    description:
      "Wer bist du wirklich – jenseits von Rollen, Erwartungen und Masken? Das Fundament allem Weiteren.",
    question: "Lebst du dein eigenes Leben – oder das, was andere von dir erwarten?",
  },
  {
    name: "Berufung",
    description:
      "Was ist dein Beitrag zur Welt? Wo treffen Talent, Leidenschaft und Bedeutung aufeinander?",
    question: "Macht deine Arbeit Sinn – oder nur Umsatz?",
  },
  {
    name: "Finanzielle Souveränität",
    description:
      "Nicht Reichtum als Ziel – sondern Freiheit. Die Fähigkeit, das Leben nach eigenen Maßstäben zu gestalten.",
    question: "Bestimmst du über dein Geld – oder bestimmt es über dich?",
  },
  {
    name: "Gesellschaftlicher Beitrag",
    description:
      "Wie wirkst du in die Welt? Welchen Abdruck hinterlässt du in deinem Umfeld und darüber hinaus?",
    question: "Wofür wirst du in Erinnerung bleiben?",
  },
  {
    name: "Beziehungsqualität",
    description:
      "Die Tiefe deiner Verbindungen. Vertrauen, Nähe, ehrliche Begegnung – mit anderen und mit dir selbst.",
    question: "Hast du tiefe Verbindungen – oder nur Kontakte?",
  },
  {
    name: "Emotionale Reife",
    description:
      "Der Umgang mit dem Innenleben. Resilienz, Regulation und die Fähigkeit, Gefühle als Information zu nutzen.",
    question: "Steuerst du deine Emotionen – oder steuern sie dich?",
  },
  {
    name: "Geisteshaltung",
    description:
      "Wie du denkst, formt was du siehst. Die innere Haltung bestimmt die äußere Wirklichkeit.",
    question: "Denkst du in Grenzen – oder in Möglichkeiten?",
  },
  {
    name: "Körperlichkeit",
    description:
      "Dein Körper als Heimat. Energie, Vitalität und die physische Basis für alles, was du erschaffen willst.",
    question: "Trägst du deinen Körper – oder trägt er dich?",
  },
];

function DeepLifeCircle({
  activeIndex,
  onSelect,
}: {
  activeIndex: number | null;
  onSelect: (i: number) => void;
}) {
  const cx = 200;
  const cy = 200;
  const outerR = 170;
  const innerR = 55;
  const labelR = 120;
  const total = 8;

  const segments8 = segments.map((seg, i) => {
    const startAngle = (i * 360) / total - 90;
    const endAngle = ((i + 1) * 360) / total - 90;
    const midAngle = ((startAngle + endAngle) / 2) * (Math.PI / 180);

    const toRad = (deg: number) => deg * (Math.PI / 180);
    const x1 = cx + outerR * Math.cos(toRad(startAngle));
    const y1 = cy + outerR * Math.sin(toRad(startAngle));
    const x2 = cx + outerR * Math.cos(toRad(endAngle));
    const y2 = cy + outerR * Math.sin(toRad(endAngle));
    const xi1 = cx + innerR * Math.cos(toRad(startAngle));
    const yi1 = cy + innerR * Math.sin(toRad(startAngle));
    const xi2 = cx + innerR * Math.cos(toRad(endAngle));
    const yi2 = cy + innerR * Math.sin(toRad(endAngle));
    const lx = cx + labelR * Math.cos(midAngle);
    const ly = cy + labelR * Math.sin(midAngle);

    const path = `M ${xi1} ${yi1} L ${x1} ${y1} A ${outerR} ${outerR} 0 0 1 ${x2} ${y2} L ${xi2} ${yi2} A ${innerR} ${innerR} 0 0 0 ${xi1} ${yi1} Z`;
    return { ...seg, path, lx, ly, opacity: i % 2 === 0 ? 0.9 : 0.75 };
  });

  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full max-w-sm lg:max-w-md mx-auto"
      aria-label="Deep Life Circle – 8 Dimensionen"
    >
      <circle cx={cx} cy={cy} r={outerR + 16} fill="none" stroke="#C4973B" strokeWidth="0.5" opacity="0.15" />
      <circle cx={cx} cy={cy} r={outerR + 8} fill="none" stroke="#C4973B" strokeWidth="0.3" opacity="0.1" />

      {segments8.map((seg, i) => (
        <g key={seg.name} className="cursor-pointer" onClick={() => onSelect(i)}>
          <path
            d={seg.path}
            fill={activeIndex === i ? "#3D7A6B" : "#2D5A4F"}
            fillOpacity={activeIndex === i ? 1 : seg.opacity}
            stroke={activeIndex === i ? "#C4973B" : "rgba(255,255,255,0.3)"}
            strokeWidth={activeIndex === i ? 2.5 : 1.5}
            className="transition-all duration-300 hover:fill-[#3D7A6B]"
          />
          <text
            x={seg.lx}
            y={seg.ly}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={seg.name.length > 14 ? "7" : "8.5"}
            fontFamily="DM Sans, sans-serif"
            fill="#FFFFFF"
            fontWeight={activeIndex === i ? "600" : "400"}
            letterSpacing="0.03em"
          >
            {seg.name.length > 12 ? (
              <>
                <tspan x={seg.lx} dy="-5">{seg.name.split(" ")[0]}</tspan>
                <tspan x={seg.lx} dy="11">{seg.name.split(" ").slice(1).join(" ")}</tspan>
              </>
            ) : (
              seg.name
            )}
          </text>
        </g>
      ))}

      <circle cx={cx} cy={cy} r={innerR} fill="#1A2E2A" stroke="#C4973B" strokeWidth="1" />
      <circle cx={cx} cy={cy} r={innerR - 6} fill="none" stroke="#C4973B" strokeWidth="0.4" opacity="0.5" />
      <text x={cx} y={cy - 7} textAnchor="middle" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#C4973B" fontWeight="500" letterSpacing="0.18em">DEEP</text>
      <text x={cx} y={cy + 7} textAnchor="middle" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#C4973B" fontWeight="500" letterSpacing="0.18em">LIFE</text>
      <line x1={cx - 14} y1={cy + 13} x2={cx + 14} y2={cy + 13} stroke="#C4973B" strokeWidth="0.4" opacity="0.6" />
    </svg>
  );
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.05 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay },
});

export default function CircleContent() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      {/* ─── Single Hero + Circle Section (combined, no repetition) ─── */}
      <section className="relative overflow-hidden bg-surface-dark pt-28 pb-16 md:pt-32 lg:pt-40">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/20 blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[250px] rounded-full bg-accent/5 blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">
          {/* Title */}
          <div className="text-center mb-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-sans text-accent text-[11px] tracking-[0.3em] uppercase font-medium mb-4"
            >
              Der Kompass
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-serif text-4xl lg:text-5xl font-light text-white leading-tight mb-3"
            >
              Der Deep Life Circle
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="font-sans text-white/50 text-base max-w-md mx-auto"
            >
              Acht Dimensionen eines gelebten Lebens. Klicke auf ein Segment.
            </motion.p>
          </div>

          {/* Circle + Detail side by side on desktop */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Circle SVG */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-3"
            >
              <DeepLifeCircle
                activeIndex={activeIndex}
                onSelect={(i) => setActiveIndex(activeIndex === i ? null : i)}
              />
            </motion.div>

            {/* Detail panel */}
            <div className="lg:col-span-2 min-h-[200px] flex items-center">
              {activeIndex !== null ? (
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <span className="font-sans text-accent text-[11px] tracking-[0.2em] uppercase font-medium">
                    Dimension {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-2xl lg:text-3xl text-white font-light mt-2 mb-4">
                    {segments[activeIndex].name}
                  </h3>
                  <div className="w-10 h-px bg-accent/50 mb-4" />
                  <p className="font-sans text-white/60 text-base leading-relaxed mb-4">
                    {segments[activeIndex].description}
                  </p>
                  <p className="font-serif italic text-accent/80 text-base">
                    „{segments[activeIndex].question}"
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  {...fadeUp(0.15)}
                  className="w-full text-center lg:text-left"
                >
                  <p className="font-serif italic text-white/30 text-xl lg:text-2xl leading-relaxed">
                    Wo stehst du – wirklich?
                  </p>
                  <p className="font-sans text-white/20 text-sm mt-3">
                    Wähle eine Dimension, um mehr zu erfahren.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Philosophy + CTA (compact, light) ─── */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeUp(0)}>
            <p className="eyebrow mb-4">Die Idee</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-text mb-6">
              Kein Ranking. Ein Ganzes.
            </h2>
            <p className="font-sans text-text-muted text-base lg:text-lg leading-relaxed mb-6">
              Der Deep Life Circle ist kein Werkzeug zur Optimierung. Jede
              Dimension steht in Verbindung mit den anderen. Wer bereit ist,
              ehrlich hinzuschauen, findet nicht Perfektion – sondern Klarheit.
            </p>

            <blockquote className="border-l-2 border-accent px-6 py-4 bg-accent/[0.03] rounded-r-lg text-left max-w-lg mx-auto mb-8">
              <p className="font-serif italic text-text text-lg leading-relaxed">
                „Nicht Masse, sondern Substanz. Nicht Motivation, sondern
                Klarheit."
              </p>
            </blockquote>

            <Link href="/kontakt" className="btn-primary text-base px-10 py-4">
              Erstgespräch anfragen
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
