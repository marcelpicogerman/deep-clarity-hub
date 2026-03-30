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
  },
  {
    number: "02",
    title: "1:1 Begleitung",
    tagline: "Die Tiefe.",
    description:
      "Kontinuierliche strategische Begleitung über Zeit. An deiner Realität ausgerichtet – nicht an einem Framework.",
    detail: "Individuell",
  },
  {
    number: "03",
    title: "Netzwerk & Experten",
    tagline: "Der Kreis.",
    description:
      "Zugang zu einem kuratierten Netzwerk und gezielte Weiterleitung an Spezialisten – u.a. Morph Face Profiling.",
    detail: "Auf Anfrage",
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
              className="group bg-white rounded-2xl p-7 lg:p-8 shadow-card border-l-2 border-transparent hover:border-l-accent hover:-translate-y-2.5 hover:shadow-card-hover transition-all duration-400"
            >
              {/* Number */}
              <span className="font-serif text-3xl font-light text-primary/12 leading-none block mb-3 group-hover:text-primary/20 transition-colors duration-300">
                {service.number}
              </span>

              {/* Title & tagline */}
              <h3 className="font-serif text-xl lg:text-2xl font-medium text-text mb-1">
                {service.title}
              </h3>
              <p className="font-sans text-accent text-[11px] tracking-[0.2em] uppercase font-medium mb-3">
                {service.tagline}
              </p>

              {/* Divider */}
              <div className="w-8 h-px bg-primary/15 mb-3 group-hover:w-12 group-hover:bg-accent/50 transition-all duration-400" />

              {/* Description */}
              <p className="font-sans text-text-muted text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Price/detail tag */}
              <span className="inline-block font-sans text-[11px] tracking-[0.14em] uppercase text-primary/60 border border-primary/15 px-3.5 py-1.5 rounded-full group-hover:border-primary/30 group-hover:text-primary transition-all duration-300">
                {service.detail}
              </span>
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
