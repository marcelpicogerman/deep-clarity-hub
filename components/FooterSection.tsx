"use client";

import { motion } from "framer-motion";

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="w-5 h-5"
      aria-label="Instagram"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="w-5 h-5"
      aria-label="LinkedIn"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function FooterSection() {
  return (
    <footer id="kontakt" className="section-dark relative overflow-hidden">
      {/* Decorative top line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gold/3 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        {/* Top CTA Block */}
        <div className="text-center mb-20 lg:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="eyebrow text-gold/60 mb-5"
          >
            Bereit?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="font-serif text-4xl lg:text-6xl font-light text-cream leading-tight mb-4"
          >
            Bereit für den ersten Schritt?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-cream/50 text-base mb-10 font-light"
          >
            Das Erstgespräch ist der Anfang.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a
              href="mailto:marcel.pickelmann@gmail.com"
              className="btn-filled text-xs"
            >
              Erstgespräch buchen
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/10 mb-10" />

        {/* Middle: Social + Contact */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="text-center lg:text-left">
            <p className="font-serif text-gold text-xl font-light tracking-[0.12em] uppercase mb-1">
              Deep Life
            </p>
            <p className="font-sans text-cream/30 text-xs tracking-[0.15em]">
              Academy of Becoming
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href="https://instagram.com/deeplifeevolutionhub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/40 hover:text-gold transition-colors duration-200 flex items-center gap-2"
              aria-label="Instagram"
            >
              <InstagramIcon />
              <span className="font-sans text-xs tracking-[0.1em] hidden sm:inline">
                @deeplifeevolutionhub
              </span>
            </a>

            <span className="w-px h-4 bg-gold/20" />

            <a
              href="https://linkedin.com/in/marcelpickelmann"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/40 hover:text-gold transition-colors duration-200 flex items-center gap-2"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
              <span className="font-sans text-xs tracking-[0.1em] hidden sm:inline">
                marcelpickelmann
              </span>
            </a>

            <span className="w-px h-4 bg-gold/20" />

            <a
              href="mailto:marcel.pickelmann@gmail.com"
              className="font-sans text-cream/40 hover:text-gold text-xs tracking-[0.1em] transition-colors duration-200"
            >
              marcel.pickelmann@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-cream/25 text-xs tracking-[0.08em]">
            © 2026 Deep Life Evolution Hub · Academy of Becoming · powered by
            Marcel Pickelmann
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#datenschutz"
              className="font-sans text-cream/30 hover:text-gold/60 text-xs tracking-[0.1em] transition-colors duration-200"
            >
              Datenschutz
            </a>
            <a
              href="#impressum"
              className="font-sans text-cream/30 hover:text-gold/60 text-xs tracking-[0.1em] transition-colors duration-200"
            >
              Impressum
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
