"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const credentials = [
  "Unternehmer mit über 10 Jahren Erfahrung in Aufbau und Transformation",
  "Connector und strategischer Begleiter für Führungskräfte und Gründer",
  "Netzwerkpartner für spezialisierte Methoden u.a. Morph Face Profiling",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const, delay },
});

export default function UeberMichContent() {
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
            Über Marcel
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="font-serif text-4xl lg:text-6xl font-light text-text leading-tight mb-4"
          >
            Marcel Pickelmann
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-text-muted text-sm tracking-wide"
          >
            Unternehmer &middot; Connector &middot; Strategischer Begleiter
          </motion.p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Profile Visual */}
            <motion.div {...fadeUp(0.1)} className="flex justify-center lg:justify-end lg:sticky lg:top-32">
              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl bg-surface-alt" />
                <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/marcel-portrait-vertical.jpg"
                    alt="Marcel Pickelmann"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 288px, 384px"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <div className="space-y-8">
              <motion.div {...fadeUp(0.15)}>
                <h2 className="font-serif text-3xl lg:text-4xl font-light text-text leading-tight mb-6">
                  Wer ist Marcel?
                </h2>
                <p className="font-sans text-text-muted leading-relaxed text-base lg:text-lg">
                  Marcel ist kein klassischer Coach. Er ist Fragensteller,
                  Perspektivengeber und Netzwerker. Er bringt unternehmerischen Blick
                  und systemisches Denken zusammen – und begleitet Menschen auf einem
                  Weg, der ihnen wirklich gehört.
                </p>
              </motion.div>

              <motion.div {...fadeUp(0.25)}>
                <p className="font-sans text-text-muted leading-relaxed text-base lg:text-lg">
                  Der Deep Life Ansatz geht tiefer als Methoden und Techniken. Er
                  beginnt mit ehrlicher Selbstbegegnung – mit dem Blick auf alle acht
                  Dimensionen des Lebens. Nicht als Framework, sondern als Spiegel.
                  Wer bereit ist, sich wirklich zu zeigen, findet hier einen Weg, der
                  trägt.
                </p>
              </motion.div>

              {/* Divider */}
              <div className="w-16 h-px bg-accent/60" />

              {/* Credentials */}
              <motion.div {...fadeUp(0.35)}>
                <h3 className="font-serif text-2xl font-light text-text mb-5">
                  Erfahrung & Hintergrund
                </h3>
                <ul className="space-y-4">
                  {credentials.map((cred, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="font-sans text-text-muted text-base leading-relaxed">
                        {cred}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Philosophy */}
              <motion.div {...fadeUp(0.45)}>
                <h3 className="font-serif text-2xl font-light text-text mb-5">
                  Philosophie & Ansatz
                </h3>
                <p className="font-sans text-text-muted leading-relaxed text-base lg:text-lg mb-4">
                  Marcels Arbeit basiert auf der Überzeugung, dass nachhaltiger Wandel
                  von innen nach außen geschieht. Er arbeitet nicht mit
                  vorgefertigten Programmen, sondern mit echtem Zuhören, präzisen
                  Fragen und einem tiefen Verständnis für die Komplexität des Lebens.
                </p>
                <p className="font-sans text-text-muted leading-relaxed text-base lg:text-lg">
                  Der Deep Life Circle bildet dabei den Kompass – acht Dimensionen,
                  die gemeinsam ein vollständiges Bild ergeben. Nicht als Checkliste,
                  sondern als Einladung zur ehrlichen Selbstbegegnung.
                </p>
              </motion.div>

              {/* CTA */}
              <motion.div {...fadeUp(0.55)} className="pt-4">
                <Link href="/kontakt" className="btn-primary">
                  Gespräch anfragen
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
