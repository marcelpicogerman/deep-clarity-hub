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
      className="w-full max-w-md lg:max-w-lg mx-auto"
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
                <tspan x={seg.lx} dy="-5">
                  {seg.name.split(" ")[0]}
                </tspan>
                <tspan x={seg.lx} dy="11">
                  {seg.name.split(" ").slice(1).join(" ")}
                </tspan>
              </>
            ) : (
              seg.name
            )}
          </text>
        </g>
      ))}

      <circle cx={cx} cy={cy} r={innerR} fill="#1A2E2A" stroke="#C4973B" strokeWidth="1" />
      <circle cx={cx} cy={cy} r={innerR - 6} fill="none" stroke="#C4973B" strokeWidth="0.4" opacity="0.5" />

      <text x={cx} y={cy - 7} textAnchor="middle" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#C4973B" fontWeight="500" letterSpacing="0.18em">
        DEEP
      </text>
      <text x={cx} y={cy + 7} textAnchor="middle" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#C4973B" fontWeight="500" letterSpacing="0.18em">
        LIFE
      </text>
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
      {/* ─── Hero (dark, matching homepage) ─── */}
      <section className="relative overflow-hidden bg-surface-dark pt-28 pb-14 md:pt-32 md:pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/20 blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
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
            className="font-serif text-4xl lg:text-6xl font-light text-white leading-tight mb-4"
          >
            Der Deep Life Circle
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-sans text-white/60 text-base lg:text-lg max-w-lg mx-auto"
          >
            Acht Dimensionen eines gelebten Lebens – kein Framework, sondern
            ein Spiegel.
          </motion.p>
        </div>
      </section>

      {/* ─── Circle Visualization (dark background for contrast) ─── */}
      <section className="section-padding bg-surface-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[250px] rounded-full bg-accent/5 blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <DeepLifeCircle
              activeIndex={activeIndex}
              onSelect={(i) => setActiveIndex(activeIndex === i ? null : i)}
            />
          </motion.div>

          {activeIndex !== null ? (
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-lg mx-auto text-center bg-white/[0.06] border border-accent/30 rounded-xl p-6 mb-2"
            >
              <h3 className="font-serif text-xl text-accent mb-2">
                {segments[activeIndex].name}
              </h3>
              <p className="font-sans text-white/70 text-sm leading-relaxed mb-3">
                {segments[activeIndex].description}
              </p>
              <p className="font-serif italic text-white/50 text-sm">
                {segments[activeIndex].question}
              </p>
            </motion.div>
          ) : (
            <motion.p
              {...fadeUp(0.15)}
              className="font-serif italic text-accent text-center text-xl lg:text-2xl"
            >
              Klicke auf eine Dimension – wo stehst du wirklich?
            </motion.p>
          )}
        </div>
      </section>

      {/* ─── 8 Dimension Cards (light, with color accents) ─── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <motion.p {...fadeUp(0)} className="eyebrow mb-4">
              Im Detail
            </motion.p>
            <motion.h2
              {...fadeUp(0.05)}
              className="font-serif text-3xl lg:text-4xl font-light text-text"
            >
              Die 8 Dimensionen
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {segments.map((seg, i) => (
              <motion.div
                key={seg.name}
                {...fadeUp(0.03 * i)}
                className="group bg-surface-alt border border-gray-200 rounded-xl p-6 hover:border-accent/40 hover:bg-accent/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-serif text-sm font-medium flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-base font-medium text-text group-hover:text-primary transition-colors">
                    {seg.name}
                  </h3>
                </div>
                <p className="font-sans text-text-muted text-sm leading-relaxed mb-3">
                  {seg.description}
                </p>
                <p className="font-serif italic text-primary/60 text-xs leading-relaxed">
                  {seg.question}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Philosophy (dark, centered) ─── */}
      <section className="section-padding bg-surface-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeUp(0)}>
            <p className="font-sans text-accent text-[11px] tracking-[0.3em] uppercase font-medium mb-4">
              Die Idee
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-white mb-8">
              Die Philosophie dahinter
            </h2>
            <p className="font-sans text-white/60 text-base lg:text-lg leading-relaxed mb-6">
              Der Deep Life Circle ist kein Werkzeug zur Optimierung. Er ist eine
              Einladung, sich wirklich anzuschauen. Jede Dimension steht in
              Verbindung mit den anderen – sie bilden kein Ranking, sondern ein
              Ganzes.
            </p>

            <blockquote className="border-l-2 border-accent px-6 py-4 bg-white/[0.03] rounded-r-lg text-left max-w-lg mx-auto mb-8">
              <p className="font-serif italic text-white text-lg lg:text-xl leading-relaxed">
                „Wer bereit ist, ehrlich hinzuschauen, findet nicht Perfektion
                – sondern Klarheit."
              </p>
            </blockquote>

            <p className="font-sans text-white/50 text-base leading-relaxed mb-10">
              Klarheit ist der erste Schritt zu einem Leben, das wirklich dir
              gehört.
            </p>

            <Link href="/kontakt" className="btn-accent text-base px-10 py-4">
              Erstgespräch anfragen
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
