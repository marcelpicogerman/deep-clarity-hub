"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};
const transition = { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const };

const stats = [
  { value: "10+", label: "Jahre Unternehmertum" },
  { value: "1:1", label: "Individuelle Begleitung" },
  { value: "8", label: "Lebensdimensionen" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden bg-surface-dark">

      {/* ─── Subtle radial glow ─── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 w-[300px] h-[250px] rounded-full bg-accent/5 blur-[80px]" />
      </div>

      {/* ─── Left column: Content ─── */}
      <div className="relative z-10 flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-24 pt-28 md:pt-32 pb-8 lg:pb-12 w-full lg:w-[58%]">

        {/* Animated accent line */}
        <motion.span
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.02 }}
          className="origin-left block w-14 h-px bg-accent mb-6"
        />

        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ ...transition, delay: 0.06 }}
          className="font-sans text-accent text-[11px] tracking-[0.3em] uppercase font-medium mb-4"
        >
          Deep Life Evolution Hub
        </motion.p>

        {/* Main H1 */}
        <motion.h1
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ ...transition, delay: 0.11 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.06] mb-5"
        >
          Identität ist
          <br />
          der Ursprung.
          <br />
          <em className="not-italic text-accent">Wirkung ist</em>
          <br />
          <em className="not-italic text-accent">die Konsequenz.</em>
        </motion.h1>

        {/* Micro-divider */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ ...transition, delay: 0.16 }}
          className="flex items-center gap-4 mb-5"
        >
          <span className="block w-8 h-px bg-accent/50" />
          <span className="font-sans text-[11px] tracking-[0.22em] uppercase text-white/50">
            Von innen nach außen
          </span>
        </motion.div>

        {/* Subline */}
        <motion.p
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ ...transition, delay: 0.19 }}
          className="font-sans text-white/65 text-base md:text-[17px] leading-relaxed max-w-[440px] mb-8"
        >
          Für Unternehmer, die verstanden haben: Das Außen wächst nur so weit
          wie das Innen trägt.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ ...transition, delay: 0.22 }}
          className="flex flex-col sm:flex-row items-start gap-4 mb-10 lg:mb-14"
        >
          <Link href="/kontakt" className="btn-accent min-w-[200px]">
            Erstgespräch anfragen
          </Link>
          <Link href="/angebote" className="btn-ghost min-w-[200px]">
            Angebote ansehen
          </Link>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="flex flex-wrap items-start gap-8 lg:gap-12 border-t border-white/10 pt-7"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-0.5">
              <span className="font-serif text-2xl lg:text-3xl text-white font-light tracking-tight">
                {stat.value}
              </span>
              <span className="font-sans text-[10px] tracking-[0.18em] uppercase text-white/55">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ─── Right column: Marcel's photo (desktop) ─── */}
      <div className="hidden lg:block absolute right-0 top-0 w-[46%] h-full">
        {/* Left-side fade blend */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-surface-dark via-surface-dark/15 to-transparent pointer-events-none" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-surface-dark to-transparent pointer-events-none" />

        <Image
          src="/marcel-portrait-vertical.jpg"
          alt="Marcel Pickelmann – Unternehmer & strategischer Begleiter"
          fill
          className="object-cover object-top"
          priority
          sizes="46vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAD/8QAIBAAAQMDBQEAAAAAAAAAAAAAAQACAwQREhQhJFNhkf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDerfCZc7giOwcQL47q1dJ2t+IEx4U/tQgpD//Z"
        />
      </div>

      {/* ─── Mobile photo (below content) ─── */}
      <div className="relative lg:hidden w-full h-64 sm:h-80">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-surface-dark via-transparent to-surface-dark/60 pointer-events-none" />
        <Image
          src="/marcel-portrait-vertical.jpg"
          alt="Marcel Pickelmann"
          fill
          className="object-cover object-top"
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAD/8QAIBAAAQMDBQEAAAAAAAAAAAAAAQACAwQREhQhJFNhkf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDerfCZc7giOwcQL47q1dJ2t+IEx4U/tQgpD//Z"
        />
      </div>

      {/* ─── Bottom-right label ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="absolute bottom-5 right-6 z-20 hidden lg:flex flex-col items-end gap-0.5"
      >
        <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-white/25">
          Marcel Pickelmann
        </span>
        <span className="font-sans text-[10px] tracking-[0.16em] uppercase text-accent/45">
          Academy of Becoming
        </span>
      </motion.div>

      {/* ─── Scroll indicator ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.4 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/20">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-accent/40 to-transparent animate-float" />
      </motion.div>

    </section>
  );
}
