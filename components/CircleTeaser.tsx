"use client";

import { motion } from "framer-motion";
import Link from "next/link";

function MiniCircle() {
  const cx = 200;
  const cy = 200;
  const outerR = 170;
  const innerR = 55;
  const labelR = 120;
  const total = 8;

  const segments = [
    "Identität", "Berufung", "Finanzielle Souveränität", "Gesellschaftlicher Beitrag",
    "Beziehungsqualität", "Emotionale Reife", "Geisteshaltung", "Körperlichkeit",
  ];

  const segmentData = segments.map((name, i) => {
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
    return { name, path, lx, ly, opacity: i % 2 === 0 ? 0.9 : 0.75 };
  });

  return (
    <svg viewBox="0 0 400 400" className="w-full max-w-[280px] md:max-w-xs lg:max-w-sm mx-auto" aria-label="Deep Life Circle">
      <circle cx={cx} cy={cy} r={outerR + 12} fill="none" stroke="#2D5A4F" strokeWidth="0.5" opacity="0.2" />
      {segmentData.map((seg) => (
        <g key={seg.name}>
          <path d={seg.path} fill="#2D5A4F" fillOpacity={seg.opacity} stroke="#FFFFFF" strokeWidth="2" />
          <text
            x={seg.lx} y={seg.ly} textAnchor="middle" dominantBaseline="middle"
            fontSize="9.5" fontFamily="DM Sans, sans-serif" fill="#FFFFFF" fontWeight="400" letterSpacing="0.03em"
          >
            {seg.name.length > 12 ? (
              <>
                <tspan x={seg.lx} dy="-5">{seg.name.split(" ")[0]}</tspan>
                <tspan x={seg.lx} dy="11">{seg.name.split(" ").slice(1).join(" ")}</tspan>
              </>
            ) : seg.name}
          </text>
        </g>
      ))}
      <circle cx={cx} cy={cy} r={innerR} fill="#1A2E2A" stroke="#2D5A4F" strokeWidth="1.5" />
      <text x={cx} y={cy - 8} textAnchor="middle" fontSize="13" fontFamily="DM Sans, sans-serif" fill="#C4973B" fontWeight="500" letterSpacing="0.18em">DEEP</text>
      <text x={cx} y={cy + 10} textAnchor="middle" fontSize="13" fontFamily="DM Sans, sans-serif" fill="#C4973B" fontWeight="500" letterSpacing="0.18em">LIFE</text>
    </svg>
  );
}

export default function CircleTeaser() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">
          {/* Circle SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <MiniCircle />
          </motion.div>

          {/* Text */}
          <div className="space-y-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="eyebrow"
            >
              Der Kompass
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.1 }}
              className="font-serif text-3xl lg:text-4xl font-light text-text leading-tight"
            >
              Der Deep Life Circle
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans text-text-muted text-base lg:text-lg leading-relaxed"
            >
              Acht Dimensionen eines gelebten Lebens – kein Framework, sondern ein
              Spiegel. Wo stehst du – wirklich?
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="pt-2"
            >
              <Link href="/circle" className="btn-outline text-sm">
                Circle entdecken
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
