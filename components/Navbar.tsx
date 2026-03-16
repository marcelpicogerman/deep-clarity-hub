"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Über mich", href: "/ueber-mich" },
  { label: "Angebote", href: "/angebote" },
  { label: "Circle", href: "/circle" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200/60 shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-serif text-primary text-xl lg:text-2xl font-semibold tracking-wide"
        >
          Deep Life
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`font-sans text-[13px] tracking-wide transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-primary font-medium"
                    : "text-text-muted hover:text-primary"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="block h-0.5 bg-primary rounded-full mt-0.5" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/kontakt"
          className="hidden lg:inline-flex btn-primary text-[13px]"
        >
          Gespräch anfragen
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
        >
          <span
            className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        } bg-white/98 backdrop-blur-md border-t border-gray-100`}
      >
        <ul className="flex flex-col px-6 py-6 gap-5">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`font-sans text-sm tracking-wide transition-colors ${
                  isActive(link.href)
                    ? "text-primary font-medium"
                    : "text-text-muted hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/kontakt"
              className="btn-primary text-sm w-full text-center"
            >
              Gespräch anfragen
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
