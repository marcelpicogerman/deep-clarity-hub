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
    name: "[Präsident Investmentclub]",
    role: "Präsident · [Clubname]",
  },
  {
    quote:
      "Die Arbeit mit Marcel geht tiefer als jedes Seminar, das ich kenne.",
    name: "Sam [Nachname]",
    role: "Pallas Seminare",
  },
];

export default function TestimonialsHome() {
  return (
    <section className="section-padding bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="eyebrow mb-4"
          >
            Stimmen
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="font-serif text-3xl lg:text-5xl font-light text-text"
          >
            Stimmen aus dem Netzwerk
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.1 * (i + 1) }}
              className="relative bg-white border border-gray-200 rounded-xl p-8 hover:border-primary/30 transition-all duration-300"
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-6 font-serif text-6xl text-primary/10 leading-none select-none pointer-events-none">
                &ldquo;
              </div>

              <div className="w-8 h-0.5 bg-accent rounded-full mb-6" />

              <blockquote className="font-serif text-lg lg:text-xl font-light text-text leading-relaxed italic mb-8">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div>
                <p className="font-sans text-text text-sm font-semibold">
                  {t.name}
                </p>
                <p className="font-sans text-text-muted text-xs mt-0.5">
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
