"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Erstgespräch",
    description:
      "Orientierung. Klarheit über den nächsten Schritt. Kein Verkaufsgespräch – ein echtes Gespräch. Du verstehst, wo du stehst und was dich weiterbringt.",
    details: [
      "Ca. 30–45 Minuten",
      "Kostenlos & unverbindlich",
      "Per Video oder Telefon",
      "Ehrliche Standortbestimmung",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2M3 12h2m14 0h2" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "1:1 Begleitung",
    description:
      "Tiefe, kontinuierliche Begleitung über Zeit. Strukturiert, ehrlich, an deiner Realität ausgerichtet – nicht an einem vorgefertigten Programm.",
    details: [
      "Individuelle Frequenz & Dauer",
      "Persönlicher Entwicklungsplan",
      "Zwischen den Sessions erreichbar",
      "Deep Life Circle als Kompass",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Netzwerk & Experten",
    description:
      "Zugang zum Kreis und gezielte Weiterleitung an Spezialisten – u.a. Morph Face Profiling. Du bekommst exakt die Unterstützung, die du brauchst.",
    details: [
      "Kuratiertes Expertennetzwerk",
      "Morph Face Profiling",
      "Spezialisten-Vermittlung",
      "Ganzheitlicher Ansatz",
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Erstgespräch",
    description: "Ein offenes Gespräch. Keine Agenda außer ehrlicher Begegnung.",
  },
  {
    number: "02",
    title: "Reflexion",
    description: "Wo stehst du wirklich? Was bewegt dich? Was willst du verändern?",
  },
  {
    number: "03",
    title: "Begleitung",
    description: "Kontinuierlicher Prozess, individuell gestaltet, ehrlich geführt.",
  },
  {
    number: "04",
    title: "Transformation",
    description: "Nicht ein Ziel – ein neues Fundament.",
  },
];

export default function AngebotePage() {
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
            Einstieg
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="font-serif text-4xl lg:text-6xl font-light text-text leading-tight mb-4"
          >
            Wie du anfängst
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-text-muted text-base lg:text-lg max-w-xl mx-auto"
          >
            Drei Wege, die dich weiterbringen – individuell, ehrlich und an deiner Realität ausgerichtet.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-8 lg:space-y-12">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="grid lg:grid-cols-5 gap-8 lg:gap-12 bg-surface-alt border border-gray-200 rounded-2xl p-8 lg:p-12 hover:border-primary/20 transition-all duration-300"
              >
                {/* Left: Icon + Title + Description */}
                <div className="lg:col-span-3 space-y-4">
                  <div className="text-primary mb-2">{service.icon}</div>
                  <h2 className="font-serif text-2xl lg:text-3xl font-light text-text">
                    {service.title}
                  </h2>
                  <div className="w-10 h-px bg-accent/50" />
                  <p className="font-sans text-text-muted text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Right: Details */}
                <div className="lg:col-span-2">
                  <p className="font-sans text-text text-sm font-medium tracking-wide uppercase mb-4">
                    Im Detail
                  </p>
                  <ul className="space-y-3">
                    {service.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-sans text-text-muted text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14 lg:mb-16">
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
              transition={{ duration: 0.85, delay: 0.1 }}
              className="font-serif text-3xl lg:text-5xl font-light text-text"
            >
              Wie es beginnt
            </motion.h2>
          </div>

          {/* Desktop: Horizontal */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-0 relative">
            <div className="absolute top-14 left-[12.5%] right-[12.5%] h-px bg-primary/15" />
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: 0.15 * i }}
                className="flex flex-col items-center text-center px-6 relative"
              >
                <div className="relative z-10 w-28 h-28 rounded-full border-2 border-primary/30 bg-white flex flex-col items-center justify-center mb-6 hover:border-primary transition-colors duration-300">
                  <span className="font-sans text-[10px] tracking-[0.15em] text-text-muted uppercase mb-1">
                    Schritt
                  </span>
                  <span className="font-serif text-2xl text-primary font-light">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-light text-text mb-3">{step.title}</h3>
                <p className="font-sans text-text-muted text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile: Vertical */}
          <div className="lg:hidden space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 * i }}
                className="flex gap-6 relative"
              >
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full border-2 border-primary/30 bg-white flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-primary text-lg font-light">{step.number}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-primary/15 my-2 min-h-[40px]" />
                  )}
                </div>
                <div className="pb-8 pt-3">
                  <h3 className="font-serif text-xl font-light text-text mb-2">{step.title}</h3>
                  <p className="font-sans text-text-muted text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Link href="/kontakt" className="btn-primary">
              Jetzt beginnen
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
