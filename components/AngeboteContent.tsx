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
    price: "350 €",
    highlight: true,
    description:
      "Kein Verkaufsgespräch. Ein echtes Gespräch. Du bekommst Marcel — nicht einen Assistenten, nicht ein Formular.",
    details: [
      "60 Minuten",
      "1:1 mit Marcel persönlich",
      "Strukturierte Standortbestimmung",
      "Ehrliche Einschätzung — keine Schonung",
      "Investition: 350 € (Executive Coaches berechnen 500–1.000 €)",
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

const iAmItems = [
  "Ein persönliches Gegenüber — jede Session, ohne Ausnahme",
  "Fragensteller, der bei unbequemen Antworten bleibt",
  "Unternehmerischer Blick, systemisches Denken",
  "Connector zu einem handverlesenen Netzwerk",
  "Diskret. Was hier besprochen wird, bleibt hier.",
];

const iAmNotItems = [
  "Kein zertifizierter Coach mit Methodenkoffer",
  "Kein Motivationssprecher. Keine schnellen Antworten.",
  "Keine Heilsversprechen. Keine Umsatzgarantien.",
  "Keine Agentur — du bekommst niemals einen Assistenten",
  "Nicht für jeden geeignet. Das ist keine Marketing-Phrase.",
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

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.05 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay },
});

export default function AngeboteContent() {
  return (
    <>
      {/* ─── Page Hero (dark) ─── */}
      <section className="relative overflow-hidden bg-surface-dark pt-28 pb-14 md:pt-32 md:pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/20 blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-sans text-accent text-[11px] tracking-[0.3em] uppercase font-medium mb-4"
          >
            Einstieg
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="font-serif text-4xl lg:text-6xl font-light text-white leading-tight mb-4"
          >
            Wie du anfängst
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-sans text-white/60 text-base lg:text-lg max-w-xl mx-auto"
          >
            Drei Wege, die dich weiterbringen – individuell, ehrlich und an deiner Realität ausgerichtet.
          </motion.p>
        </div>
      </section>

      {/* ─── Was ich bin / Was ich nicht bin ─── */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <motion.div
            {...fadeUp(0)}
            className="text-center mb-14"
          >
            <p className="eyebrow mb-4">Klartext</p>
            <h2 className="font-serif text-3xl lg:text-5xl font-light text-text">
              Was ich bin. Was ich nicht bin.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              {...fadeUp(0.05)}
              className="border-2 border-accent/30 rounded-2xl p-8 lg:p-10 bg-accent/[0.04]"
            >
              <h3 className="font-serif text-xl lg:text-2xl font-light text-accent mb-6">
                Das bin ich
              </h3>
              <ul className="space-y-4">
                {iAmItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-sans text-text text-sm leading-relaxed font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              {...fadeUp(0.1)}
              className="border border-gray-200 rounded-2xl p-8 lg:p-10 bg-gray-50/50"
            >
              <h3 className="font-serif text-xl lg:text-2xl font-light text-text-muted mb-6">
                Das bin ich nicht
              </h3>
              <ul className="space-y-4">
                {iAmNotItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="font-sans text-text-muted text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.p
            {...fadeUp(0.15)}
            className="text-center mt-10 font-serif text-text-muted text-sm italic"
          >
            Wenn du dir nicht sicher bist, ob das für dich ist — dann ist es wahrscheinlich nicht für dich.
          </motion.p>
        </div>
      </section>

      {/* ─── Services Section (alternating backgrounds) ─── */}
      <section className="section-padding bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              {...fadeUp(0.05)}
              className={`grid lg:grid-cols-5 gap-8 lg:gap-12 rounded-2xl p-8 lg:p-12 transition-all duration-300 ${
                "highlight" in service && service.highlight
                  ? "bg-surface-dark text-white border border-white/10"
                  : "bg-white border border-gray-200 hover:border-primary/20"
              }`}
            >
              <div className="lg:col-span-3 space-y-4">
                <div className={`mb-2 ${
                  "highlight" in service && service.highlight ? "text-accent" : "text-primary"
                }`}>
                  {service.icon}
                </div>
                <div className="flex items-baseline gap-4 flex-wrap">
                  <h2 className={`font-serif text-2xl lg:text-3xl font-light ${
                    "highlight" in service && service.highlight ? "text-white" : "text-text"
                  }`}>
                    {service.title}
                  </h2>
                  {"price" in service && service.price && (
                    <span className="font-serif text-2xl lg:text-3xl font-light text-accent">
                      {service.price}
                    </span>
                  )}
                </div>
                <div className="w-10 h-px bg-accent/50" />
                <p className={`font-sans text-base leading-relaxed ${
                  "highlight" in service && service.highlight ? "text-white/70" : "text-text-muted"
                }`}>
                  {service.description}
                </p>
                {"highlight" in service && service.highlight && (
                  <Link href="/kontakt" className="btn-accent inline-flex mt-2">
                    Erstgespräch anfragen
                  </Link>
                )}
              </div>

              <div className="lg:col-span-2">
                <p className={`font-sans text-sm font-medium tracking-wide uppercase mb-4 ${
                  "highlight" in service && service.highlight ? "text-white/60" : "text-text"
                }`}>
                  Im Detail
                </p>
                <ul className="space-y-3">
                  {service.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        "highlight" in service && service.highlight ? "text-accent" : "text-primary"
                      }`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`font-sans text-sm ${
                        "highlight" in service && service.highlight ? "text-white/70" : "text-text-muted"
                      }`}>
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Process Section (dark background) ─── */}
      <section className="section-padding bg-surface-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/3 w-[300px] h-[250px] rounded-full bg-accent/5 blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14 lg:mb-16">
            <motion.p
              {...fadeUp(0)}
              className="font-sans text-accent text-[11px] tracking-[0.3em] uppercase font-medium mb-4"
            >
              Ablauf
            </motion.p>
            <motion.h2
              {...fadeUp(0.05)}
              className="font-serif text-3xl lg:text-5xl font-light text-white"
            >
              Wie es beginnt
            </motion.h2>
          </div>

          {/* Desktop: Horizontal */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-0 relative">
            <div className="absolute top-14 left-[12.5%] right-[12.5%] h-px bg-white/10" />
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                {...fadeUp(0.07 * i)}
                className="flex flex-col items-center text-center px-6 relative"
              >
                <div className="relative z-10 w-28 h-28 rounded-full border-2 border-accent/30 bg-surface-dark flex flex-col items-center justify-center mb-6 hover:border-accent transition-colors duration-300">
                  <span className="font-sans text-[10px] tracking-[0.15em] text-white/40 uppercase mb-1">
                    Schritt
                  </span>
                  <span className="font-serif text-2xl text-accent font-light">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-light text-white mb-3">{step.title}</h3>
                <p className="font-sans text-white/50 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile: Vertical */}
          <div className="lg:hidden space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                {...fadeUp(0.05 * i)}
                className="flex gap-6 relative"
              >
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full border-2 border-accent/30 bg-surface-dark flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-accent text-lg font-light">{step.number}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-white/10 my-2 min-h-[40px]" />
                  )}
                </div>
                <div className="pb-8 pt-3">
                  <h3 className="font-serif text-xl font-light text-white mb-2">{step.title}</h3>
                  <p className="font-sans text-white/50 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            {...fadeUp(0.2)}
            className="text-center mt-16"
          >
            <Link href="/kontakt" className="btn-accent text-base px-10 py-4">
              Gespräch anfragen
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
