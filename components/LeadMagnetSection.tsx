"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function LeadMagnetSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[100px]" />
      </div>

      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8 flex justify-center"
        >
          <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#B8892A"
              strokeWidth={1.2}
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="eyebrow text-gold/70 mb-5"
        >
          Kostenloser Guide
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="font-serif text-3xl lg:text-4xl font-light text-cream leading-tight mb-4"
        >
          Dein kostenloser{" "}
          <em className="italic text-gold-light">Deep Life Starter Guide</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="font-sans text-cream/60 text-base leading-relaxed mb-10 font-light"
        >
          Die 8 Dimensionen des Deep Life Circle – mit Reflexionsfragen für
          jeden Bereich. Kostenlos.
        </motion.p>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="deine@email.de"
                required
                className="flex-1 bg-dark-mid border border-gold/20 text-cream placeholder:text-cream/30 font-sans text-sm px-5 py-3 focus:outline-none focus:border-gold/50 transition-colors duration-200"
              />
              <button
                type="submit"
                className="btn-filled text-xs whitespace-nowrap"
              >
                Guide anfordern
              </button>
            </form>
          ) : (
            <div className="border border-gold/30 p-6 text-center">
              <p className="font-serif text-gold-light text-xl italic mb-1">
                Danke.
              </p>
              <p className="font-sans text-cream/60 text-sm">
                Der Guide ist auf dem Weg zu dir.
              </p>
            </div>
          )}

          <p className="font-sans text-cream/30 text-xs mt-4 tracking-[0.1em]">
            Kein Spam. Nur Tiefe.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
