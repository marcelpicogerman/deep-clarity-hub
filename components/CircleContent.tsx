"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const segments = [
  {
    name: "Identität",
    description:
      "Wer bist du wirklich – jenseits von Rollen, Erwartungen und Masken? Das Fundament allem Weiteren.",
  },
  {
    name: "Berufung",
    description:
      "Was ist dein Beitrag zur Welt? Wo treffen Talent, Leidenschaft und Bedeutung aufeinander?",
  },
  {
    name: "Finanzielle Souveränität",
    description:
      "Nicht Reichtum als Ziel – sondern Freiheit. Die Fähigkeit, das Leben nach eigenen Maßstäben zu gestalten.",
  },
  {
    name: "Gesellschaftlicher Beitrag",
    description:
      "Wie wirkst du in die Welt? Welchen Abdruck hinterlässt du in deinem Umfeld und darüber hinaus?",
  },
  {
    name: "Beziehungsqualität",
    description:
      "Die Tiefe deiner Verbindungen. Vertrauen, Nähe, ehrliche Begegnung – mit anderen und mit dir selbst.",
  },
  {
    name: "Emotionale Reife",
    description:
      "Der Umgang mit dem Innenleben. Resilienz, Regulation und die Fähigkeit, Gefühle als Information zu nutzen.",
  },
  {
    name: "Geisteshaltung",
    description:
      "Wie du denkst, formt was du siehst. Die innere Haltung bestimmt die äußere Wirklichkeit.",
  },
  {
    name: "Körperlichkeit",
    description:
      "Dein Körper als Heimat. Energie, Vitalität und die physische Basis für alles, was du erschaffen willst.",
  },
];

function DeepLifeCircle() {
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
      {/* Outer rings */}
      <circle cx={cx} cy={cy} r={outerR + 16} fill="none" stroke="#2D5A4F" strokeWidth="0.5" opacity="0.2" />
      <circle cx={cx} cy={cy} r={outerR + 8} fill="none" stroke="#2D5A4F" strokeWidth="0.3" opacity="0.15" />

      {/* Segments */}
      {segments8.map((seg) => (
        <g key={seg.name} className="group cursor-default">
          <path
            d={seg.path}
            fill="#2D5A4F"
            fillOpacity={seg.opacity}
            stroke="#FFFFFF"
            strokeWidth="2"
            className="transition-all duration-300 group-hover:fill-[#3D7A6B]"
          />
          <text
            x={seg.lx}
            y={seg.ly}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={seg.name.length > 14 ? "7" : "8.5"}
            fontFamily="DM Sans, sans-serif"
            fill="#FFFFFF"
            fontWeight="400"
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

      {/* Inner circle */}
      <circle cx={cx} cy={cy} r={innerR} fill="#1A2E2A" stroke="#2D5A4F" strokeWidth="1.5" />
      <circle cx={cx} cy={cy} r={innerR - 6} fill="none" stroke="#C4973B" strokeWidth="0.4" opacity="0.5" />

      {/* Center text */}
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

export default function CircleContent() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="eyebrow mb-4"
          >
            Der Kompass
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="font-serif text-4xl lg:text-6xl font-light text-text leading-tight mb-4"
          >
            Der Deep Life Circle
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-text-muted text-base lg:text-lg max-w-lg mx-auto"
          >
            Acht Dimensionen eines gelebten Lebens – kein Framework, sondern ein Spiegel.
          </motion.p>
        </div>
      </section>

      {/* Circle Visualization */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <DeepLifeCircle />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-serif italic text-primary text-center text-xl lg:text-2xl"
          >
            Wo stehst du – wirklich?
          </motion.p>
        </div>
      </section>

      {/* 8 Dimension Cards */}
      <section className="section-padding bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85 }}
              className="font-serif text-3xl lg:text-4xl font-light text-text"
            >
              Die 8 Dimensionen
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {segments.map((seg, i) => (
              <motion.div
                key={seg.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.05 * i }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <h3 className="font-serif text-lg font-medium text-text">{seg.name}</h3>
                </div>
                <p className="font-sans text-text-muted text-sm leading-relaxed">
                  {seg.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
          >
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-text mb-6">
              Die Philosophie dahinter
            </h2>
            <p className="font-sans text-text-muted text-base lg:text-lg leading-relaxed mb-6">
              Der Deep Life Circle ist kein Werkzeug zur Optimierung. Er ist eine
              Einladung, sich wirklich anzuschauen. Jede Dimension steht in
              Verbindung mit den anderen – sie bilden kein Ranking, sondern ein
              Ganzes.
            </p>
            <p className="font-sans text-text-muted text-base lg:text-lg leading-relaxed mb-10">
              Wer bereit ist, ehrlich hinzuschauen, findet in diesem Spiegel nicht
              Perfektion, sondern Klarheit. Und Klarheit ist der erste Schritt zu
              einem Leben, das wirklich dir gehört.
            </p>
            <Link href="/kontakt" className="btn-primary">
              Gespräch anfragen
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
