"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

const transition = { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const };

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cream section-cream"
      style={{ paddingTop: "80px" }}
    >
      {/* Radial gold glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gold/8 blur-[120px] animate-pulse-slow" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gold-light/6 blur-[80px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-24 left-12 lg:left-24 w-px h-24 bg-gradient-to-b from-transparent via-gold/30 to-transparent animate-float" />
        <div className="absolute bottom-32 right-16 lg:right-32 w-px h-16 bg-gradient-to-b from-transparent via-gold/20 to-transparent animate-float-delayed" />
        <div className="absolute top-1/2 left-8 w-1 h-1 rounded-full bg-gold/40 animate-float" />
        <div className="absolute top-1/3 right-12 w-1.5 h-1.5 rounded-full bg-gold/30 animate-float-delayed" />
        <div className="absolute bottom-1/4 left-1/4 w-1 h-1 rounded-full bg-gold/25 animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        {/* Brand name */}
        <motion.p
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ ...transition, delay: 0.1 }}
          className="font-sans text-gold text-[10px] tracking-[0.35em] uppercase mb-3"
        >
          Deep Life Evolution Hub
        </motion.p>

        {/* Sub-brand */}
        <motion.p
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ ...transition, delay: 0.2 }}
          className="font-sans text-text-muted text-[10px] tracking-[0.2em] uppercase mb-10"
        >
          Academy of Becoming · powered by Marcel
        </motion.p>

        {/* Main H1 */}
        <motion.h1
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ ...transition, delay: 0.35 }}
          className="font-serif text-5xl sm:text-6xl lg:text-8xl font-light text-text leading-[1.05] mb-8"
        >
          Dein Leben.
          <br />
          <em className="italic text-gold not-italic font-light">
            Tief & bewusst.
          </em>
        </motion.h1>

        {/* Gold divider with text */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ ...transition, delay: 0.5 }}
          className="flex items-center gap-5 mb-8"
        >
          <span className="block w-12 h-px bg-gold/60" />
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-text-muted">
            Von innen nach außen
          </span>
          <span className="block w-12 h-px bg-gold/60" />
        </motion.div>

        {/* Subline */}
        <motion.p
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ ...transition, delay: 0.6 }}
          className="font-sans text-text-muted text-base lg:text-lg leading-relaxed max-w-xl mb-12 font-light"
        >
          Für Menschen, die mehr wollen als Durchschnitt – und bereit sind, den
          Weg wirklich zu gehen.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ ...transition, delay: 0.75 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="mailto:marcel.pickelmann@gmail.com"
            className="btn text-xs min-w-[200px]"
          >
            Erstgespräch anfragen
          </a>
          <a href="#angebote" className="btn-filled text-xs min-w-[200px]">
            Angebote ansehen
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-text-muted/50">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-gold/40 to-transparent animate-float" />
        </motion.div>
      </div>
    </section>
  );
}
