"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const, delay },
});

const credentials = [
  "Unternehmer mit über 10 Jahren Erfahrung in Aufbau und Transformation",
  "Connector und strategischer Begleiter für Führungskräfte und Gründer",
  "Netzwerkpartner für spezialisierte Methoden u.a. Morph Face Profiling",
];

export default function AboutSection() {
  return (
    <section id="ueber-mich" className="section-alt py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Profile Visual */}
          <motion.div {...fadeUp(0.1)} className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Outer decorative ring */}
              <div className="absolute -inset-6 rounded-full border border-gold/15" />
              <div className="absolute -inset-3 rounded-full border border-gold/25" />

              {/* Profile circle */}
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-dark to-dark-mid flex items-center justify-center border-2 border-gold/40">
                {/* Gold inner glow */}
                <div className="absolute inset-0 rounded-full bg-gold/5" />

                {/* Initials */}
                <div className="relative flex flex-col items-center justify-center">
                  <span className="font-serif text-gold text-6xl lg:text-7xl font-light tracking-widest italic">
                    MP
                  </span>
                  <span className="font-sans text-gold/40 text-[9px] tracking-[0.3em] uppercase mt-1">
                    Marcel Pickelmann
                  </span>
                </div>

                {/* Decorative dots on ring */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold/60" />
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold/60" />
                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gold/60" />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gold/60" />
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="space-y-6">
            <motion.p {...fadeUp(0.15)} className="eyebrow">
              Über Marcel
            </motion.p>

            <motion.h2 {...fadeUp(0.2)} className="font-serif text-4xl lg:text-5xl font-light text-text leading-tight">
              Marcel Pickelmann
            </motion.h2>

            <motion.p {...fadeUp(0.25)} className="font-sans text-text-muted text-sm tracking-[0.12em] uppercase">
              Unternehmer · Connector · Strategischer Begleiter
            </motion.p>

            <span className="gold-rule block" />

            <motion.p {...fadeUp(0.3)} className="font-sans text-text-muted leading-relaxed text-base lg:text-lg font-light">
              Marcel ist kein klassischer Coach. Er ist Fragensteller,
              Perspektivengeber und Netzwerker. Er bringt unternehmerischen Blick
              und systemisches Denken zusammen – und begleitet Menschen auf einem
              Weg, der ihnen wirklich gehört.
            </motion.p>

            <motion.p {...fadeUp(0.35)} className="font-sans text-text-muted leading-relaxed text-base font-light">
              Der Deep Life Ansatz geht tiefer als Methoden und Techniken. Er
              beginnt mit ehrlicher Selbstbegegnung – mit dem Blick auf alle acht
              Dimensionen des Lebens. Nicht als Framework, sondern als Spiegel.
              Wer bereit ist, sich wirklich zu zeigen, findet hier einen Weg, der
              trägt.
            </motion.p>

            {/* Credentials */}
            <motion.ul {...fadeUp(0.4)} className="space-y-3 pt-2">
              {credentials.map((cred, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  <span className="font-sans text-text-muted text-sm leading-relaxed">
                    {cred}
                  </span>
                </li>
              ))}
            </motion.ul>

            {/* CTA */}
            <motion.div {...fadeUp(0.5)} className="pt-4">
              <a
                href="mailto:marcel.pickelmann@gmail.com"
                className="btn text-xs"
              >
                Gespräch anfragen
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
