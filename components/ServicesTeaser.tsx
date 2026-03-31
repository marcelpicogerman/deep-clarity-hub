"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Erstgespräch",
    tagline: "Der Anfang.",
    description:
      "60 Minuten. 1:1 mit Marcel. Strukturierte Standortbestimmung – kein Pitch, keine Agenda außer Ehrlichkeit.",
    detail: "350 €",
    highlight: true,
    badge: "Dein Einstieg",
    cta: "Jetzt anfragen",
    ctaHref: "/kontakt",
  },
  {
    number: "02",
    title: "1:1 Begleitung",
    tagline: "Die Tiefe.",
    description:
      "Kontinuierliche strategische Begleitung über Zeit. An deiner Realität ausgerichtet – nicht an einem Framework.",
    detail: "Individuell",
    highlight: false,
    badge: null,
    cta: "Mehr erfahren",
    ctaHref: "/angebote",
  },
  {
    number: "03",
    title: "Netzwerk & Experten",
    tagline: "Der Kreis.",
    description:
      "Zugang zu einem kuratierten Netzwerk und gezielte Weiterleitung an Spezialisten – u.a. Morph Face Profiling.",
    detail: "Auf Anfrage",
    highlight: false,
    badge: null,
    cta: "Mehr erfahren",
    ctaHref: "/angebote",
  },
];

export default function ServicesTeaser() {
  return (
    <section className="section-padding bg-surface-alt">
      <div className="max-w-container mx-auto px-6 lg:px-10">

        {/* ─── Header ─── */}
        <div className="grid md:grid-cols-2 gap-6 items-end mb-12 lg:mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5 }}
              className="eyebrow mb-4"
            >
              Angebote
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-text leading-tight"
            >
              Wie du anfängst.
              <br />
              <span className="text-primary">Wie wir tiefer gehen.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.5, delay: 0.07 }}
            className="font-sans text-text-muted text-base leading-relaxed md:max-w-sm md:ml-auto"
          >
            Keine Standardpakete. Keine Copy-Paste-Methoden. Jeder Mensch
            kommt mit seiner eigenen Realität – und die steht im Mittelpunkt.
          </motion.p>
        </div>

        {/* ─── Cards ─── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-10">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.04 * (i + 1),
              }}
              className={`group relative rounded-2xl p-7 lg:p-8 transition-all duration-400 ${
                service.highlight
                  ? "bg-primary text-white shadow-card-hover border border-primary-light/20 hover:-translate-y-2.5"
                  : "bg-white shadow-card border-l-2 border-transparent hover:border-l-accent hover:-translate-y-2.5 hover:shadow-card-hover"
              }`}
            >
              {/* Badge for Erstgespräch */}
              {service.badge && (
                <span className="absolute top-5 right-5 font-sans text-[10px] tracking-[0.15em] uppercase bg-accent text-white px-2.5 py-1 rounded-full font-medium">
                  {service.badge}
                </span>
              )}

              {/* Number */}
              <span className={`font-serif text-3xl font-light leading-none block mb-3 transition-colors duration-300 ${
                service.highlight ? "text-white/20" : "text-primary/25 group-hover:text-primary/35"
              }`}>
                {service.number}
              </span>

              {/* Title & tagline */}
              <h3 className={`font-serif text-xl lg:text-2xl font-medium mb-1 ${
                service.highlight ? "text-white" : "text-text"
              }`}>
                {service.title}
              </h3>
              <p className={`font-sans text-[11px] tracking-[0.2em] uppercase font-medium mb-3 ${
                service.highlight ? "text-accent-light" : "text-accent"
              }`}>
                {service.tagline}
              </p>

              {/* Divider */}
              <div className={`w-8 h-px mb-3 group-hover:w-12 transition-all duration-400 ${
                service.highlight ? "bg-white/30 group-hover:bg-white/50" : "bg-primary/20 group-hover:bg-accent/50"
              }`} />

              {/* Description */}
              <p className={`font-sans text-sm leading-relaxed mb-5 ${
                service.highlight ? "text-white/80" : "text-text-muted"
              }`}>
                {service.description}
              </p>

              {/* Bottom row: price + CTA */}
              <div className="flex items-center justify-between gap-3 mt-auto">
                <span className={`font-serif text-xl font-light ${
                  service.highlight ? "text-accent-light" : "text-primary"
                }`}>
                  {service.detail}
                </span>
                <Link
                  href={service.ctaHref}
                  className={`font-sans text-xs tracking-[0.12em] uppercase font-medium transition-colors ${
                    service.highlight
                      ? "text-white/70 hover:text-white"
                      : "text-primary/70 hover:text-primary"
                  }`}
                >
                  {service.cta} →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── CTA ─── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center"
        >
          <Link href="/angebote" className="btn-outline text-sm">
            Alle Angebote ansehen
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
