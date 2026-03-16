"use client";

import { motion } from "framer-motion";

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

// SVG Circle - 8 pie segments
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

    return {
      ...seg,
      path,
      lx,
      ly,
      opacity: i % 2 === 0 ? 0.88 : 0.70,
    };
  });

  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full max-w-sm lg:max-w-md mx-auto"
      aria-label="Deep Life Circle – 8 Dimensionen"
    >
      {/* Outer decorative rings */}
      <circle cx={cx} cy={cy} r={outerR + 18} fill="none" stroke="#B8892A" strokeWidth="0.5" opacity="0.3" />
      <circle cx={cx} cy={cy} r={outerR + 10} fill="none" stroke="#B8892A" strokeWidth="0.3" opacity="0.2" />

      {/* Segments */}
      {segments8.map((seg, i) => (
        <g key={seg.name} className="group cursor-default">
          <path
            d={seg.path}
            fill="#B8892A"
            fillOpacity={seg.opacity}
            stroke="#F5F0E8"
            strokeWidth="1.5"
            className="transition-all duration-300 group-hover:fill-[#D4AF6A]"
          />
          {/* Segment labels */}
          <text
            x={seg.lx}
            y={seg.ly}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={i === 2 || i === 3 || i === 4 ? "7.5" : "8.5"}
            fontFamily="DM Sans, sans-serif"
            fill="#F5F0E8"
            fontWeight="400"
            letterSpacing="0.04em"
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

      {/* Inner center circle */}
      <circle cx={cx} cy={cy} r={innerR} fill="#1A2E2A" stroke="#B8892A" strokeWidth="1" />
      <circle cx={cx} cy={cy} r={innerR - 6} fill="none" stroke="#B8892A" strokeWidth="0.4" opacity="0.5" />

      {/* Center text */}
      <text
        x={cx}
        y={cy - 8}
        textAnchor="middle"
        fontSize="9"
        fontFamily="DM Sans, sans-serif"
        fill="#B8892A"
        fontWeight="500"
        letterSpacing="0.18em"
      >
        DEEP
      </text>
      <text
        x={cx}
        y={cy + 5}
        textAnchor="middle"
        fontSize="9"
        fontFamily="DM Sans, sans-serif"
        fill="#B8892A"
        fontWeight="500"
        letterSpacing="0.18em"
      >
        LIFE
      </text>
      <line x1={cx - 14} y1={cy + 11} x2={cx + 14} y2={cy + 11} stroke="#B8892A" strokeWidth="0.4" opacity="0.6" />
    </svg>
  );
}

export default function CircleSection() {
  return (
    <section id="circle" className="section-alt py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="eyebrow mb-4"
          >
            Der Kompass
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="font-serif text-4xl lg:text-5xl font-light text-text mb-4"
          >
            Der Deep Life Circle
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-text-muted max-w-lg mx-auto text-base font-light"
          >
            Acht Dimensionen eines gelebten Lebens – kein Framework, sondern ein
            Spiegel.
          </motion.p>
          <motion.span
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="gold-rule"
          />
        </div>

        {/* Circle SVG */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mb-6"
        >
          <DeepLifeCircle />
        </motion.div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-serif italic text-gold text-center text-lg mb-16 lg:mb-20"
        >
          Wo stehst du – wirklich?
        </motion.p>

        {/* 8 Dimension Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {segments.map((seg, i) => (
            <motion.div
              key={seg.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.05 * i,
              }}
              className="bg-cream border border-gold/15 p-6 hover:border-gold/35 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                <h3 className="font-serif text-lg font-light text-text">
                  {seg.name}
                </h3>
              </div>
              <p className="font-sans text-text-muted text-sm leading-relaxed font-light">
                {seg.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
