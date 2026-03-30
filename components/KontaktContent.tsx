"use client";

import { motion } from "framer-motion";
import { useState } from "react";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function KontaktContent() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

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
          subject: `Neue Anfrage von ${formData.name} – Deep Life`,
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
      {/* Page Hero */}
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
            Bereit für den ersten Schritt?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-sans text-text-muted text-base lg:text-lg max-w-xl mx-auto"
          >
            Das Erstgespräch ist der Anfang. Unverbindlich, ehrlich, auf Augenhöhe.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="font-serif text-2xl lg:text-3xl font-light text-text mb-6">
                  Kontaktdaten
                </h2>
                <div className="space-y-5">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-alt flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans text-text text-sm font-medium mb-1">E-Mail</p>
                      <a
                        href="mailto:marcel@deeplifeevolutionhub.com"
                        className="font-sans text-text-muted text-sm hover:text-primary transition-colors"
                      >
                        marcel@deeplifeevolutionhub.com
                      </a>
                    </div>
                  </div>

                  {/* Social */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-alt flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans text-text text-sm font-medium mb-2">Social Media</p>
                      <div className="flex items-center gap-4">
                        <a
                          href="https://instagram.com/deeplifeevolutionhub"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-muted hover:text-primary transition-colors flex items-center gap-2"
                        >
                          <InstagramIcon />
                          <span className="font-sans text-sm hidden sm:inline">Instagram</span>
                        </a>
                        <a
                          href="https://linkedin.com/in/marcelpickelmann"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-muted hover:text-primary transition-colors flex items-center gap-2"
                        >
                          <LinkedInIcon />
                          <span className="font-sans text-sm hidden sm:inline">LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="bg-surface-alt rounded-xl p-6">
                <h3 className="font-serif text-lg font-medium text-text mb-3">
                  Verfügbarkeit
                </h3>
                <p className="font-sans text-text-muted text-sm leading-relaxed mb-3">
                  Erstgespräche finden in der Regel innerhalb von 5 Werktagen
                  statt. Die Termine werden individuell abgestimmt.
                </p>
                <p className="font-sans text-text-muted text-sm leading-relaxed">
                  Bevorzugte Zeiten: Mo–Fr, 9:00–18:00 Uhr
                </p>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="lg:col-span-3"
            >
              <div className="bg-surface-alt rounded-2xl p-8 lg:p-10">
                <h2 className="font-serif text-2xl lg:text-3xl font-light text-text mb-2">
                  Nachricht senden
                </h2>
                <p className="font-sans text-text-muted text-sm mb-8">
                  Schreib mir und ich melde mich schnellstmöglich bei dir.
                </p>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
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
                        placeholder="Dein Name"
                        className="w-full bg-white border border-gray-200 text-text placeholder:text-text-light font-sans text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-200"
                      />
                    </div>

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

                    <div>
                      <label htmlFor="message" className="font-sans text-text text-sm font-medium block mb-2">
                        Nachricht
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={5}
                        placeholder="Was bewegt dich? Was suchst du?"
                        className="w-full bg-white border border-gray-200 text-text placeholder:text-text-light font-sans text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-200 resize-none"
                      />
                    </div>

                    {error && (
                      <p className="font-sans text-red-600 text-sm">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? "Wird gesendet..." : "Nachricht senden"}
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-2xl text-text mb-2">Danke für deine Nachricht.</h3>
                    <p className="font-sans text-text-muted text-sm">
                      Ich melde mich in der Regel innerhalb von 24 Stunden bei dir.
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
