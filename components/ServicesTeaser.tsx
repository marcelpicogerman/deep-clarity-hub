"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Erstgespräch",
    description: "Orientierung. Klarheit über den nächsten Schritt. Kein Verkaufsgespräch – ein echtes Gespräch.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2M3 12h2m14 0h2" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "1:1 Begleitung",
    description: "Tiefe, kontinuierliche Begleitung über Zeit. Strukturiert, ehrlich, an deiner Realität ausgerichtet.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Netzwerk & Experten",
    description: "Zugang zum Kreis und gezielte Weiterleitung an Spezialisten – u.a. Morph Face Profiling.",
  },
];

export default function ServicesTeaser() {
  return (
    <section className="section-padding bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-14 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="eyebrow mb-4"
          >
            Angebote
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="font-serif text-3xl lg:text-5xl font-light text-text"
          >
            Wie du anfängst
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
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
              className="group bg-white border border-gray-200 rounded-xl p-8 hover:-translate-y-1 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="text-primary mb-5 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl font-medium text-text mb-3">
                {service.title}
              </h3>
              <p className="font-sans text-text-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/angebote" className="btn-outline text-sm">
            Alle Angebote ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}
