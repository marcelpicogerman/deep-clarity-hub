"use client";

import { motion } from "framer-motion";

const episodes = [
  {
    title: "Warum Klarheit wichtiger ist als Motivation",
    description:
      "Über den Unterschied zwischen äußerem Antrieb und innerem Fundament.",
    spotifyUrl:
      "https://open.spotify.com/episode/4l14VTe4PLVSUtNvHv2Bzk",
  },
  {
    title: "Die unbequeme Wahrheit über Erfolg",
    description:
      "Was erfolgreiche Unternehmer nicht erzählen – und warum genau das zählt.",
    spotifyUrl:
      "https://open.spotify.com/episode/6Od3m1B0C1iT9EP79XjDik",
  },
];

export default function PodcastTeaser() {
  return (
    <section className="section-padding bg-surface-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/15 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5 }}
              className="font-sans text-accent text-[11px] tracking-[0.3em] uppercase font-medium mb-4"
            >
              Podcast
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-serif text-3xl lg:text-4xl font-light text-white leading-tight mb-4"
            >
              Der Chancengeber Podcast
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-sans text-white/70 text-base leading-relaxed mb-6"
            >
              Gedanken und Impulse für Unternehmer, die mehr wollen als
              Oberfläche. Auf Spotify.
            </motion.p>
            <motion.a
              href="https://open.spotify.com/show/6rZ79dccAWnCWlyrR95jKf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="btn-accent-outline text-sm inline-flex items-center gap-2"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              Alle Episoden auf Spotify
            </motion.a>
          </div>

          {/* Right: Episode Cards */}
          <div className="space-y-4">
            {episodes.map((ep, i) => (
              <motion.a
                key={i}
                href={ep.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.5, delay: 0.05 * (i + 1) }}
                className="block bg-white/[0.06] border border-white/10 rounded-xl p-5 hover:bg-white/[0.10] hover:border-white/20 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1DB954]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1DB954]/30 transition-colors">
                    <svg viewBox="0 0 24 24" fill="#1DB954" className="w-5 h-5">
                      <polygon points="8,5 19,12 8,19" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans text-white text-sm font-medium mb-1 group-hover:text-accent transition-colors">
                      {ep.title}
                    </h3>
                    <p className="font-sans text-white/60 text-xs leading-relaxed">
                      {ep.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
