"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Marcel stellt die Fragen, die man sich selbst nicht traut zu stellen. Nach unserem Gespräch war mir vieles klarer.",
    name: "Thomas K.",
    role: "Unternehmer",
    year: "2025",
  },
  {
    quote:
      "Der Deep Life Circle hat mir gezeigt, wo ich wirklich stehe – nicht wo ich dachte zu stehen.",
    name: "Sabine M.",
    role: "Führungskraft",
    year: "2025",
  },
  {
    quote:
      "Keine Floskeln, keine vorgefertigten Antworten. Nur echte Auseinandersetzung mit dem, was zählt.",
    name: "Markus R.",
    role: "",
    year: "2025",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-alt py-24 lg:py-32">
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
            Stimmen
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="font-serif text-4xl lg:text-5xl font-light text-text"
          >
            Was Menschen sagen
          </motion.h2>
          <motion.span
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="gold-rule"
          />
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1 * (i + 1),
              }}
              className="relative bg-cream border border-gold/15 p-8 lg:p-10 hover:border-gold/30 transition-all duration-300"
            >
              {/* Large quote mark */}
              <div className="absolute top-6 right-8 font-serif text-7xl text-gold/10 leading-none select-none pointer-events-none">
                &ldquo;
              </div>

              {/* Gold accent top line */}
              <span className="block w-8 h-px bg-gold mb-6" />

              {/* Quote */}
              <blockquote className="font-serif text-xl lg:text-2xl font-light text-text leading-relaxed italic mb-8">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-dark-mid flex items-center justify-center flex-shrink-0">
                  <span className="font-serif text-gold text-sm font-light">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-sans text-text text-sm font-medium">
                    {t.name}
                  </p>
                  <p className="font-sans text-text-muted text-xs">
                    {t.role ? `${t.role}, ` : ""}{t.year}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
