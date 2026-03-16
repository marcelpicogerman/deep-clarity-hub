"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
    title: "Erstgespräch",
    description:
      "Orientierung. Klarheit über den nächsten Schritt. Kein Verkaufsgespräch – ein echtes Gespräch. Du verstehst, wo du stehst und was dich weiterbringt.",
    link: "Gespräch anfragen",
    href: "mailto:marcel.pickelmann@gmail.com",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
        className="w-8 h-8"
      >
        <circle cx="12" cy="12" r="9" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2m0 14v2M3 12h2m14 0h2m-4.22-6.78l-1.42 1.42M7.64 16.36l-1.42 1.42M16.36 16.36l1.42 1.42M5.22 5.22l1.42 1.42"
        />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "1:1 Begleitung",
    description:
      "Tiefe, kontinuierliche Begleitung über Zeit. Strukturiert, ehrlich, an deiner Realität ausgerichtet – nicht an einem vorgefertigten Programm.",
    link: "Mehr erfahren",
    href: "mailto:marcel.pickelmann@gmail.com",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "Netzwerk & Experten",
    description:
      "Zugang zum Kreis und gezielte Weiterleitung an Spezialisten – u.a. Morph Face Profiling. Du bekommst exakt die Unterstützung, die du brauchst.",
    link: "Netzwerk entdecken",
    href: "mailto:marcel.pickelmann@gmail.com",
  },
];

export default function ServicesSection() {
  return (
    <section id="angebote" className="section-cream py-24 lg:py-32">
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
            Einstieg
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="font-serif text-4xl lg:text-5xl font-light text-text"
          >
            Wie du anfängst
          </motion.h2>
          <motion.span
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="gold-rule"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1 * (i + 1),
              }}
              className="group relative bg-bg-alt border border-gold/20 p-8 lg:p-10 hover:-translate-y-1 transition-all duration-400 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/5"
            >
              {/* Icon */}
              <div className="text-gold mb-6 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl font-light text-text mb-4">
                {service.title}
              </h3>

              {/* Divider */}
              <span className="block w-8 h-px bg-gold/40 mb-5" />

              {/* Description */}
              <p className="font-sans text-text-muted text-sm leading-relaxed mb-8 font-light">
                {service.description}
              </p>

              {/* Link */}
              <a
                href={service.href}
                className="font-sans text-[10px] tracking-[0.22em] uppercase text-gold hover:text-gold-light transition-colors duration-200 inline-flex items-center gap-2"
              >
                {service.link}
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8h10m-4-4l4 4-4 4"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
