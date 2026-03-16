"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

const transition = { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const };

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.03] blur-[120px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-[80px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        {/* Brand name */}
        <motion.p
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ ...transition, delay: 0.1 }}
          className="font-sans text-primary text-[11px] tracking-[0.3em] uppercase font-medium mb-3"
        >
          Deep Life Evolution Hub
        </motion.p>

        {/* Sub-brand */}
        <motion.p
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ ...transition, delay: 0.2 }}
          className="font-sans text-text-muted text-[11px] tracking-[0.18em] uppercase mb-10"
        >
          Academy of Becoming &middot; powered by Marcel
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
          <span className="text-primary font-light">
            Tief & bewusst.
          </span>
        </motion.h1>

        {/* Divider with text */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ ...transition, delay: 0.5 }}
          className="flex items-center gap-5 mb-8"
        >
          <span className="block w-12 h-px bg-accent/60" />
          <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-text-muted">
            Von innen nach außen
          </span>
          <span className="block w-12 h-px bg-accent/60" />
        </motion.div>

        {/* Subline */}
        <motion.p
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ ...transition, delay: 0.6 }}
          className="font-sans text-text-muted text-base lg:text-lg leading-relaxed max-w-xl mb-12"
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
          <Link href="/kontakt" className="btn-primary min-w-[200px]">
            Erstgespräch anfragen
          </Link>
          <Link href="/angebote" className="btn-outline min-w-[200px]">
            Angebote ansehen
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-text-muted/50">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-primary/40 to-transparent animate-float" />
        </motion.div>
      </div>
    </section>
  );
}
