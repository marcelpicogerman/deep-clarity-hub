"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Erstgespräch",
    description:
      "Ein offenes Gespräch. Keine Agenda außer ehrlicher Begegnung.",
  },
  {
    number: "02",
    title: "Reflexion",
    description:
      "Wo stehst du wirklich? Was bewegt dich? Was willst du verändern?",
  },
  {
    number: "03",
    title: "Begleitung",
    description:
      "Kontinuierlicher Prozess, individuell gestaltet, ehrlich geführt.",
  },
  {
    number: "04",
    title: "Transformation",
    description: "Nicht ein Ziel – ein neues Fundament.",
  },
];

export default function ProcessSection() {
  return (
    <section className="section-cream py-24 lg:py-32">
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
            Ablauf
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="font-serif text-4xl lg:text-5xl font-light text-text"
          >
            Wie es beginnt
          </motion.h2>
          <motion.span
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="gold-rule"
          />
        </div>

        {/* Desktop: Horizontal Process */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-0 relative">
          {/* Connecting line */}
          <div className="absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gold/20" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.15 * i,
              }}
              className="flex flex-col items-center text-center px-6 relative"
            >
              {/* Step Circle */}
              <div className="relative z-10 w-24 h-24 rounded-full border border-gold/40 bg-cream flex flex-col items-center justify-center mb-6 hover:border-gold transition-colors duration-300">
                <span className="font-sans text-[9px] tracking-[0.2em] text-gold/60 uppercase mb-0.5">
                  Schritt
                </span>
                <span className="font-serif text-2xl text-gold font-light">
                  {step.number}
                </span>
              </div>

              <h3 className="font-serif text-xl font-light text-text mb-3">
                {step.title}
              </h3>
              <p className="font-sans text-text-muted text-sm leading-relaxed font-light">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Vertical Process */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1 * i,
              }}
              className="flex gap-6 relative"
            >
              {/* Left: Number + Line */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center flex-shrink-0">
                  <span className="font-serif text-gold text-lg font-light">
                    {step.number}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-gold/20 my-2 min-h-[40px]" />
                )}
              </div>

              {/* Right: Content */}
              <div className="pb-8 pt-2">
                <h3 className="font-serif text-xl font-light text-text mb-2">
                  {step.title}
                </h3>
                <p className="font-sans text-text-muted text-sm leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="mailto:marcel.pickelmann@gmail.com"
            className="btn text-xs"
          >
            Jetzt beginnen
          </a>
        </motion.div>
      </div>
    </section>
  );
}
