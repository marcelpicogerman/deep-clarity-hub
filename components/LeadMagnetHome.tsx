"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function LeadMagnetHome() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="section-padding bg-surface-dark relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.7 }}
          className="mb-8 flex justify-center"
        >
          <div className="w-16 h-16 rounded-full border border-accent/40 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="#C4973B" strokeWidth={1.3} className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-sans text-accent text-[11px] tracking-[0.22em] uppercase font-medium mb-5"
        >
          Kostenloser Guide
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.85, delay: 0.15 }}
          className="font-serif text-3xl lg:text-4xl font-light text-white leading-tight mb-4"
        >
          Dein kostenloser{" "}
          <span className="text-accent-light">Deep Life Starter Guide</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="font-sans text-white/50 text-base leading-relaxed mb-10"
        >
          Die 8 Dimensionen des Deep Life Circle – mit Reflexionsfragen für
          jeden Bereich. Kostenlos.
        </motion.p>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
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
                className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/30 font-sans text-sm px-5 py-3.5 rounded-lg focus:outline-none focus:border-accent/60 transition-colors duration-200"
              />
              <button type="submit" className="btn-accent whitespace-nowrap">
                Guide anfordern
              </button>
            </form>
          ) : (
            <div className="border border-accent/30 rounded-lg p-6 text-center">
              <p className="font-serif text-accent-light text-xl italic mb-1">Danke.</p>
              <p className="font-sans text-white/50 text-sm">Der Guide ist auf dem Weg zu dir.</p>
            </div>
          )}

          <p className="font-sans text-white/25 text-xs mt-4 tracking-wide">
            Kein Spam. Nur Tiefe.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
