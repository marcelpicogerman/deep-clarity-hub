"use client";

import Link from "next/link";

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

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Über mich", href: "/ueber-mich" },
  { label: "Angebote", href: "/angebote" },
  { label: "Circle", href: "/circle" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function FooterSection() {
  return (
    <footer className="bg-surface-dark relative overflow-hidden">
      {/* Subtle top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-light/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-16 lg:pt-20 pb-10">
        {/* Top section: Brand + Links + Social */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <p className="font-serif text-white text-2xl font-semibold tracking-wide">
                Deep Life
              </p>
            </Link>
            <p className="font-sans text-white/40 text-sm leading-relaxed max-w-xs">
              Academy of Becoming &ndash; Für Menschen, die mehr wollen als
              Durchschnitt.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-sans text-white/60 text-xs tracking-[0.15em] uppercase font-medium mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-white/50 hover:text-accent text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <p className="font-sans text-white/60 text-xs tracking-[0.15em] uppercase font-medium mb-5">
              Kontakt
            </p>
            <div className="space-y-3 mb-6">
              <a
                href="mailto:marcel.pickelmann@gmail.com"
                className="font-sans text-white/50 hover:text-accent text-sm transition-colors duration-200 block"
              >
                marcel.pickelmann@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/deeplifeevolutionhub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-accent transition-colors duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://linkedin.com/in/marcelpickelmann"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-accent transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-white/25 text-xs tracking-wide">
            &copy; 2026 Deep Life Evolution Hub &middot; Academy of Becoming
            &middot; powered by Marcel Pickelmann
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#datenschutz"
              className="font-sans text-white/30 hover:text-white/60 text-xs transition-colors duration-200"
            >
              Datenschutz
            </a>
            <a
              href="#impressum"
              className="font-sans text-white/30 hover:text-white/60 text-xs transition-colors duration-200"
            >
              Impressum
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
