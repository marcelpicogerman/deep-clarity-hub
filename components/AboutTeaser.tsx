"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">

          {/* Left: Profile Visual */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl bg-surface-alt border border-gray-100" />
              <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-card">
                <Image
                  src="/marcel-casual.jpg"
                  alt="Marcel Pickelmann"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAUG/8QAIxAAAQMDAgcAAAAAAAAAAAAAAQACAwQRMRJBEzM0UWFysf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwB9TI6OaN3E0s37Z3Sgbi4WdrnEy1VyeaBnwVcpelh9G/EH/9k="
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="eyebrow"
            >
              Über Marcel
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="font-serif text-3xl md:text-4xl lg:text-[42px] font-light text-text leading-tight"
            >
              Marcel Pickelmann
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-text-muted text-sm tracking-wide"
            >
              Unternehmer &middot; Connector &middot; Strategischer Begleiter
            </motion.p>

            {/* Gold divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="origin-left w-10 h-px bg-accent"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="font-sans text-text-muted leading-relaxed text-base md:text-lg"
            >
              Marcel ist kein klassischer Coach. Er ist Fragensteller,
              Perspektivengeber und Netzwerker. Er bringt unternehmerischen Blick
              und systemisches Denken zusammen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="pt-2"
            >
              <Link href="/ueber-mich" className="btn-primary text-sm">
                Mehr erfahren
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
