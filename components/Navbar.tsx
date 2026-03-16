"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Über mich", href: "#ueber-mich" },
  { label: "Angebote", href: "#angebote" },
  { label: "Circle", href: "#circle" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md border-b border-gold/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#"
          className="font-serif text-gold text-xl lg:text-2xl font-light tracking-[0.12em] uppercase"
        >
          Deep Life
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-sans text-xs tracking-[0.18em] uppercase text-text-muted hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="mailto:marcel.pickelmann@gmail.com"
          className="hidden lg:inline-flex btn text-xs"
        >
          Erstgespräch buchen
        </a>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
        >
          <span
            className={`block w-6 h-px bg-gold transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-gold transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-gold transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-cream/98 backdrop-blur-md border-t border-gold/10`}
      >
        <ul className="flex flex-col px-6 py-6 gap-5">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-sans text-xs tracking-[0.18em] uppercase text-text-muted hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="mailto:marcel.pickelmann@gmail.com"
              className="btn text-xs w-full text-center"
            >
              Erstgespräch buchen
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
