"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Marcel stellt die Fragen, die andere nicht stellen — und lässt sie wirken.",
    name: "Klaus Eisenblätter",
    role: "Unternehmer · Mentor",
  },
  {
    quote:
      "Selten jemanden erlebt, der so präzise sieht, was wirklich dahinter steckt.",
    name: "Anonymisiert",
    role: "Präsident eines Investmentclubs",
  },
  {
    quote:
      "Die Arbeit mit Marcel geht tiefer als jedes Seminar, das ich kenne.",
    name: "Sam P.",
    role: "Pallas Seminare",
  },
];

export default function TestimonialsHome() {
  return (
    <section className="section-padding bg-surface-dark relative overflow-hidden">

      {/* ─── Background texture / glow ─── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[400px] h-[350px] rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 w-[250px] h-[200px] rounded-full bg-accent/5 blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-10">

        {/* ─── Header ─── */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.5 }}
            className="font-sans text-accent text-[11px] tracking-[0.3em] uppercase font-medium mb-4"
          >
            Stimmen
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-serif text-3xl lg:text-5xl font-light text-white"
          >
            Stimmen aus dem Netzwerk
          </motion.h2>
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="origin-center block w-12 h-px bg-accent/50 mx-auto mt-6"
          />
        </div>

        {/* ─── Cards ─── */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.06 * (i + 1) }}
              className="relative bg-white/[0.06] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.10] hover:border-white/16 hover:-translate-y-2 hover:shadow-lg transition-all duration-400 group overflow-hidden"
            >
              {/* Large decorative quote mark */}
              <div
                className="absolute -top-1 right-5 font-serif text-[72px] leading-none text-accent/10 select-none pointer-events-none group-hover:text-accent/15 transition-colors duration-300"
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Top accent line */}
              <div className="w-8 h-0.5 bg-accent/50 rounded-full mb-6 group-hover:w-12 group-hover:bg-accent transition-all duration-400" />

              {/* Quote */}
              <blockquote className="font-serif text-lg lg:text-xl font-light text-white/90 leading-relaxed italic mb-8 relative z-10">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex flex-col gap-0.5">
                <p className="font-sans text-white text-sm font-medium">
                  {t.name}
                </p>
                <p className="font-sans text-white/60 text-xs tracking-wide">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
