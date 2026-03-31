"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const credentials = [
  {
    title: "Unternehmerische Praxis",
    description:
      "Eigene Marke aufgebaut und sechsstellig skaliert. Über 800 kleine und mittelständische Unternehmen strategisch betreut. Keine Theorie – gelebte Erfahrung.",
  },
  {
    title: "Humanmorphologie",
    description:
      "Ausgebildet in der Methode des Morph Face Profiling unter Klaus H. Eisenblätter. Heute COO & Brand Strategy der Marke. Lesen, was andere übersehen.",
  },
  {
    title: "Pallas-Seminare",
    description:
      "Vier Seminarreihen à acht Monate. Persönlichkeitsentwicklung als Lebenspraxis, nicht als Event. Das Fundament für echte Klarheit und innere Führung.",
  },
];

const stats = [
  { value: "800+", label: "KMU begleitet" },
  { value: "18", label: "Sales Manager aufgebaut" },
  { value: "4", label: "Pallas-Seminarreihen" },
  { value: "32", label: "Monate Persönlichkeitsentwicklung" },
];

const values = [
  {
    title: "Selbsterkenntnis vor Ratschlägen",
    description:
      "Keine vorgefertigten Antworten. Wer sich selbst versteht, findet eigene Lösungen.",
  },
  {
    title: "Langzeit statt Kurzimpuls",
    description:
      "Echte Veränderung braucht Zeit, Struktur und jemanden, der dranbleibt.",
  },
  {
    title: "Ganzheitlich, nicht eindimensional",
    description:
      "Acht Lebensbereiche. Weil Business-Erfolg ohne innere Klarheit hohl bleibt.",
  },
  {
    title: "Substanz über Sichtbarkeit",
    description:
      "Die Menschen, die wirklich etwas bewegen, sind nicht die Lautesten – sondern die Klarsten.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.05 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay },
});

export default function UeberMichContent() {
  return (
    <>
      {/* ─── Page Hero ─── */}
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="eyebrow mb-4"
          >
            Wer dahinter steht
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="font-serif text-4xl lg:text-6xl font-light text-text leading-tight mb-4"
          >
            Marcel Pickelmann
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-sans text-text-muted text-sm tracking-wide"
          >
            Unternehmer &middot; Stratege &middot; Morphologe
          </motion.p>
        </div>
      </section>

      {/* ─── Bio Section: Portrait + Werdegang ─── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Portrait */}
            <motion.div
              {...fadeUp(0.05)}
              className="flex justify-center lg:justify-end lg:sticky lg:top-32"
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl bg-surface-alt" />
                <div className="relative w-72 h-72 lg:w-96 lg:h-[480px] rounded-2xl overflow-hidden">
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

            {/* Konkreter Werdegang */}
            <div className="space-y-6">
              <motion.div {...fadeUp(0.08)}>
                <h2 className="font-serif text-3xl lg:text-4xl font-light text-text leading-tight mb-6">
                  Wer ist Marcel?
                </h2>
                <p className="font-sans text-text-muted leading-relaxed text-base lg:text-lg mb-4">
                  Unternehmer aus Bayern. Gründer, Stratege, Morphologe. Jemand,
                  der nicht aufhört zu fragen – vor allem sich selbst.
                </p>
                <p className="font-sans text-text-muted leading-relaxed text-base lg:text-lg mb-4">
                  Mit Anfang 20 erste Firma gegründet, sechsstellig skaliert,
                  veräußert. Danach kein Rückzug, sondern Tiefgang: über 800 KMU
                  begleitet, 18 Sales Manager aufgebaut, heute COO & Brand
                  Strategy bei{" "}
                  <a
                    href="https://mf-profiling.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-light transition-colors"
                  >
                    Morph Face Profiling
                  </a>
                  .
                </p>
                <p className="font-sans text-text-muted leading-relaxed text-base lg:text-lg">
                  Seit 2021 Teilnehmer der Pallas-Seminare – vier Reihen, je
                  acht Monate. Keine Methode, kein System. Eine Haltung. Die
                  Basis für alles, was danach kam.
                </p>
              </motion.div>

              {/* Blockquote */}
              <motion.blockquote
                {...fadeUp(0.12)}
                className="border-l-2 border-accent px-6 py-4 my-6 bg-accent/[0.03] rounded-r-lg"
              >
                <p className="font-serif italic text-text text-lg lg:text-xl leading-relaxed">
                  „Ich lese Menschen. Nicht intuitiv – methodisch. Auf Basis der
                  Humanmorphologie erkenne ich, wie jemand denkt, entscheidet
                  und kommuniziert."
                </p>
              </motion.blockquote>

              {/* CTA */}
              <motion.div {...fadeUp(0.15)} className="pt-2">
                <Link href="/kontakt" className="btn-primary">
                  Gespräch anfragen
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="py-12 lg:py-16 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            {...fadeUp(0)}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center lg:text-left">
                <span className="block font-serif text-3xl lg:text-4xl text-accent font-light mb-1">
                  {stat.value}
                </span>
                <span className="font-sans text-white/50 text-xs tracking-[0.15em] uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Credentials Grid ─── */}
      <section className="section-padding bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div {...fadeUp(0)} className="mb-12">
            <p className="eyebrow mb-4">Erfahrung & Fundament</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-text">
              Was mich qualifiziert.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {credentials.map((cred, i) => (
              <motion.div
                key={cred.title}
                {...fadeUp(0.05 * (i + 1))}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:border-primary/30 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <h3 className="font-serif text-lg font-medium text-text mb-4">
                  {cred.title}
                </h3>
                <p className="font-sans text-text-muted text-sm leading-relaxed">
                  {cred.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Warum ich das mache ─── */}
      <section className="section-padding bg-surface-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/15 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.p
            {...fadeUp(0)}
            className="font-sans text-accent text-[11px] tracking-[0.3em] uppercase font-medium mb-4"
          >
            Der ehrliche Teil
          </motion.p>
          <motion.h2
            {...fadeUp(0.05)}
            className="font-serif text-3xl lg:text-4xl font-light text-white leading-tight mb-8"
          >
            Warum ich das mache.
          </motion.h2>

          <motion.p
            {...fadeUp(0.08)}
            className="font-sans text-white/60 text-base lg:text-lg leading-relaxed mb-6"
          >
            Weil ich selbst an dem Punkt war. Leistungsdruck, Funktionieren, die
            Frage ob das alles ist. Nicht als Theorie – als gelebte Erfahrung.
          </motion.p>
          <motion.p
            {...fadeUp(0.1)}
            className="font-sans text-white/60 text-base lg:text-lg leading-relaxed mb-8"
          >
            Ich weiß, wie es sich anfühlt, wenn äußerer Erfolg und innere
            Klarheit nicht zusammenpassen. Wenn du funktionierst, aber spürst,
            dass etwas fehlt. Genau deshalb habe ich den Deep Life Evolution Hub
            gegründet.
          </motion.p>

          <motion.blockquote
            {...fadeUp(0.12)}
            className="border-l-2 border-accent px-6 py-4 bg-white/[0.03] rounded-r-lg text-left max-w-lg mx-auto mb-8"
          >
            <p className="font-serif italic text-white text-lg lg:text-xl leading-relaxed">
              „Nicht Masse, sondern Substanz. Nicht Motivation, sondern
              Klarheit."
            </p>
          </motion.blockquote>

          <motion.p
            {...fadeUp(0.14)}
            className="font-sans text-white/50 text-base leading-relaxed"
          >
            Der Deep Life Evolution Hub ist kein Coaching-Programm. Es ist ein
            Raum für Menschen, die bereit sind, die richtigen Fragen
            auszuhalten.
          </motion.p>
        </div>
      </section>

      {/* ─── Woran ich glaube ─── */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <p className="eyebrow mb-4">Haltung</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-text">
              Woran ich glaube.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
            {values.map((val, i) => (
              <motion.div key={val.title} {...fadeUp(0.05 * (i + 1))}>
                <h3 className="font-serif text-lg font-medium text-text mb-2">
                  {val.title}
                </h3>
                <p className="font-sans text-text-muted text-sm leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Podcast Embed ─── */}
      <section className="section-padding bg-surface-alt">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeUp(0)}>
            <p className="eyebrow mb-4">Reinhören</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-text mb-3">
              Der Chancengeber-Podcast
            </h2>
            <p className="font-sans text-text-muted text-base mb-8 max-w-md mx-auto">
              12 Episoden über Klarheit, Identität und den Weg zu einem Leben,
              das wirklich passt.
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.08)} className="mb-8">
            <iframe
              className="rounded-xl mx-auto"
              src="https://open.spotify.com/embed/show/6rZ79dccAWnCWlyrR95jKf?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              style={{ maxWidth: 600 }}
            />
          </motion.div>

          <motion.div
            {...fadeUp(0.1)}
            className="flex justify-center gap-6"
          >
            <a
              href="https://www.linkedin.com/in/marcel-pickelmann"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs tracking-[0.1em] uppercase text-accent hover:text-accent-light transition-colors"
            >
              LinkedIn →
            </a>
            <a
              href="https://open.spotify.com/show/6rZ79dccAWnCWlyrR95jKf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs tracking-[0.1em] uppercase text-accent hover:text-accent-light transition-colors"
            >
              Spotify →
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-padding bg-surface-dark">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div {...fadeUp(0)}>
            <h2 className="font-serif text-3xl lg:text-5xl font-light text-white leading-tight mb-5">
              Bereit für Klarheit?
            </h2>
            <p className="font-sans text-white/50 text-base leading-relaxed mb-8">
              60 Minuten. Direkt mit Marcel. Keine Vorqualifizierung, kein
              Verkaufsgespräch. Nur ein ehrliches Gespräch darüber, wo du stehst.
            </p>
            <Link href="/kontakt" className="btn-accent text-base px-10 py-4">
              Erstgespräch anfragen
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
