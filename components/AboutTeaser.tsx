"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Profile Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-surface-alt" />
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/marcel-casual.png"
                  alt="Marcel Pickelmann"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 256px, 320px"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="space-y-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="eyebrow"
            >
              Über Marcel
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="font-serif text-3xl lg:text-4xl font-light text-text leading-tight"
            >
              Marcel Pickelmann
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans text-text-muted text-sm tracking-wide"
            >
              Unternehmer &middot; Connector &middot; Strategischer Begleiter
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="font-sans text-text-muted leading-relaxed text-base lg:text-lg"
            >
              Marcel ist kein klassischer Coach. Er ist Fragensteller,
              Perspektivengeber und Netzwerker. Er bringt unternehmerischen Blick
              und systemisches Denken zusammen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="pt-2"
            >
              <Link href="/ueber-mich" className="btn-outline text-sm">
                Mehr erfahren
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
