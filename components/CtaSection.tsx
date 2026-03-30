"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-primary-dark py-20 md:py-24 lg:py-28">

      {/* ─── Decorative background layers ─── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large radial glow top-right */}
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full bg-primary/40 blur-[160px]" />
        {/* Bottom-left subtle glow */}
        <div className="absolute -bottom-10 -left-10 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[120px]" />
        {/* Decorative horizontal rule */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      </div>

      {/* ─── Giant watermark text ─── */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="font-serif text-[100px] md:text-[140px] lg:text-[160px] xl:text-[180px] font-light text-white/[0.03] whitespace-nowrap leading-none">
          Deep Life
        </span>
      </div>

      {/* ─── Content ─── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-sans text-accent text-[11px] tracking-[0.32em] uppercase font-medium mb-5"
        >
          Bereit für den nächsten Schritt?
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight mb-6"
        >
          Ein Gespräch.
          <br />
          <span className="text-accent italic">Kein Pitch.</span>
        </motion.h2>

        {/* Divider */}
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="origin-center block w-12 h-px bg-accent/50 mx-auto mb-6"
        />

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="font-sans text-white/50 text-base lg:text-lg mb-10 max-w-md mx-auto leading-relaxed"
        >
          Kein Versprechen außer Ehrlichkeit. 60 Minuten, die zeigen, was
          wirklich dahinter steckt.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/kontakt" className="btn-accent text-base px-10 py-4 w-full sm:w-auto min-w-[220px]">
            Erstgespräch anfragen
          </Link>
          <Link href="/angebote" className="btn-ghost text-base w-full sm:w-auto min-w-[180px]">
            Mehr erfahren
          </Link>
        </motion.div>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-sans text-[11px] tracking-[0.12em] text-white/35 mt-8"
        >
          Deep Life Evolution Hub Ltd · UK Company #17052482
        </motion.p>

      </div>
    </section>
  );
}
