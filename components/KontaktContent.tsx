"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const interestOptions = [
  "Erstgespräch (60 Min, 350 €)",
  "1:1 Begleitung",
  "Netzwerk & Experten",
  "Allgemeine Frage",
];

const steps = [
  {
    step: "01",
    title: "Du sendest die Anfrage",
    description: "Das Formular landet direkt bei Marcel – kein Assistent, kein Filter.",
  },
  {
    step: "02",
    title: "Marcel meldet sich innerhalb von 24 Stunden",
    description: "Kurze Rückmeldung mit einem Terminvorschlag für das Erstgespräch.",
  },
  {
    step: "03",
    title: "Erstgespräch findet statt",
    description: "60 Minuten, ehrlich, auf Augenhöhe. Kein Pitch, kein Verkaufsdruck.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.05 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, delay },
});

export default function KontaktContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interesse: "",
    message: "",
    datenschutz: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || !formData.datenschutz) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          interesse: formData.interesse || "Nicht angegeben",
          subject: `Neue Anfrage (${formData.interesse || "Allgemein"}) von ${formData.name} – Deep Life`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setError("Etwas ist schiefgelaufen. Bitte versuche es erneut.");
      }
    } catch {
      setError("Netzwerkfehler. Bitte versuche es erneut.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="eyebrow mb-4"
          >
            Kontakt
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="font-serif text-4xl lg:text-6xl font-light text-text leading-tight mb-4"
          >
            Ein Gespräch.
            <br />
            <span className="text-primary">Kein Pitch.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-sans text-text-muted text-base lg:text-lg max-w-lg mx-auto"
          >
            60 Minuten, 1:1 mit Marcel. Kein Verkaufsgespräch.
            Nur ein ehrliches Gespräch darüber, wo du stehst.
          </motion.p>
        </div>
      </section>

      {/* ─── Main Section ─── */}
      <section className="section-padding bg-white" id="kontaktformular">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

            {/* ─── Left: Process + Info ─── */}
            <motion.div
              {...fadeUp(0)}
              className="lg:col-span-2 space-y-10"
            >
              {/* What happens after */}
              <div>
                <h2 className="font-serif text-xl lg:text-2xl font-light text-text mb-6">
                  Was passiert nach deiner Anfrage?
                </h2>
                <div className="space-y-6">
                  {steps.map((s, i) => (
                    <motion.div key={i} {...fadeUp(0.05 * (i + 1))} className="flex gap-4">
                      <span className="font-serif text-2xl font-light text-primary/30 leading-none flex-shrink-0 w-8 pt-0.5">
                        {s.step}
                      </span>
                      <div>
                        <p className="font-sans text-text text-sm font-medium mb-1">{s.title}</p>
                        <p className="font-sans text-text-muted text-sm leading-relaxed">{s.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact info */}
              <div className="border-t border-gray-100 pt-8">
                <p className="font-sans text-text text-sm font-medium mb-3">Direkt erreichbar</p>
                <a
                  href="mailto:marcel@deeplifeevolutionhub.com"
                  className="font-sans text-text-muted text-sm hover:text-primary transition-colors block mb-2"
                >
                  marcel@deeplifeevolutionhub.com
                </a>
                <div className="flex items-center gap-4 mt-4">
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
                    Podcast →
                  </a>
                </div>
              </div>
            </motion.div>

            {/* ─── Right: Form ─── */}
            <motion.div
              {...fadeUp(0.08)}
              className="lg:col-span-3"
            >
              <div className="bg-surface-alt rounded-2xl p-8 lg:p-10">
                {!submitted ? (
                  <>
                    <h2 className="font-serif text-2xl lg:text-3xl font-light text-text mb-2">
                      Erstgespräch anfragen
                    </h2>
                    <p className="font-sans text-text-muted text-sm mb-8">
                      Füll das Formular aus – Marcel meldet sich persönlich.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="font-sans text-text text-sm font-medium block mb-2">
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          placeholder="Dein Vor- und Nachname"
                          className="w-full bg-white border border-gray-200 text-text placeholder:text-text-light font-sans text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-200"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="font-sans text-text text-sm font-medium block mb-2">
                          E-Mail
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          placeholder="deine@email.de"
                          className="w-full bg-white border border-gray-200 text-text placeholder:text-text-light font-sans text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-200"
                        />
                      </div>

                      {/* Interesse Dropdown */}
                      <div>
                        <label htmlFor="interesse" className="font-sans text-text text-sm font-medium block mb-2">
                          Worum geht es?
                        </label>
                        <select
                          id="interesse"
                          value={formData.interesse}
                          onChange={(e) => setFormData({ ...formData, interesse: e.target.value })}
                          className="w-full bg-white border border-gray-200 text-text font-sans text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-200 appearance-none cursor-pointer"
                        >
                          <option value="">Bitte wählen...</option>
                          {interestOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="font-sans text-text text-sm font-medium block mb-2">
                          Nachricht
                        </label>
                        <textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          rows={4}
                          placeholder="Was bewegt dich gerade? Was erhoffst du dir?"
                          className="w-full bg-white border border-gray-200 text-text placeholder:text-text-light font-sans text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-200 resize-none"
                        />
                      </div>

                      {/* Datenschutz */}
                      <div className="flex items-start gap-3">
                        <input
                          id="datenschutz"
                          type="checkbox"
                          checked={formData.datenschutz}
                          onChange={(e) => setFormData({ ...formData, datenschutz: e.target.checked })}
                          required
                          className="mt-1 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary/20 flex-shrink-0 cursor-pointer"
                        />
                        <label htmlFor="datenschutz" className="font-sans text-text-muted text-xs leading-relaxed cursor-pointer">
                          Ich habe die{" "}
                          <Link href="/datenschutz" className="text-primary hover:text-primary-light underline transition-colors">
                            Datenschutzerklärung
                          </Link>{" "}
                          gelesen und stimme der Verarbeitung meiner Daten für die Bearbeitung meiner Anfrage zu.
                        </label>
                      </div>

                      {error && (
                        <p className="font-sans text-red-600 text-sm">{error}</p>
                      )}

                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading ? "Wird gesendet..." : "Erstgespräch anfragen"}
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-2xl text-text mb-3">Danke für deine Anfrage.</h3>
                    <p className="font-sans text-text-muted text-sm leading-relaxed max-w-xs mx-auto">
                      Marcel meldet sich in der Regel innerhalb von 24 Stunden persönlich bei dir.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
