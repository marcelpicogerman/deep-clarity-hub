"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Über mich", href: "/ueber-mich" },
  { label: "Angebote", href: "/angebote" },
  { label: "Circle", href: "/circle" },
  { label: "Kontakt", href: "/kontakt" },
];

/** Pages where the hero section has a dark background */
const darkHeroPages = ["/"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isDarkHero = darkHeroPages.includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // set initial state
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

  // Determine visual mode: transparent-dark (on dark hero, not scrolled) or solid-light
  const isTransparent = isDarkHero && !scrolled && !menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 will-change-transform ${
        isTransparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md shadow-nav border-b border-gray-200/60"
      }`}
    >
      <nav className="max-w-container mx-auto px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-light.png"
            alt="Deep Life Evolution Hub"
            width={36}
            height={36}
            className="w-8 h-8 md:w-9 md:h-9"
            priority
            sizes="36px"
          />
          <span
            className={`font-serif text-xl md:text-2xl font-semibold tracking-wide transition-colors duration-300 ${
              isTransparent ? "text-white" : "text-primary"
            }`}
          >
            Deep Life
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-7 lg:gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`font-sans text-[13px] tracking-wide transition-colors duration-200 ${
                  isActive(link.href)
                    ? isTransparent
                      ? "text-white font-medium"
                      : "text-primary font-medium"
                    : isTransparent
                      ? "text-white/70 hover:text-white"
                      : "text-text-muted hover:text-primary"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span
                    className={`block h-0.5 rounded-full mt-0.5 ${
                      isTransparent ? "bg-accent" : "bg-primary"
                    }`}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/kontakt"
          className={`hidden md:inline-flex text-[13px] rounded-full px-6 py-2.5 font-sans font-medium tracking-wide transition-all duration-300 ${
            isTransparent
              ? "border border-white/30 text-white hover:bg-white/10 hover:border-white/60"
              : "bg-primary text-white hover:bg-primary-light hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
          }`}
        >
          Gespräch anfragen
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              isTransparent && !menuOpen ? "bg-white" : "bg-primary"
            } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              isTransparent && !menuOpen ? "bg-white" : "bg-primary"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              isTransparent && !menuOpen ? "bg-white" : "bg-primary"
            } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? "max-h-[460px] opacity-100" : "max-h-0 opacity-0"
        } bg-white/98 backdrop-blur-md border-t border-gray-100`}
      >
        <ul className="flex flex-col px-6 py-6 gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`font-sans text-sm tracking-wide transition-colors flex items-center gap-3 ${
                  isActive(link.href)
                    ? "text-primary font-medium"
                    : "text-text-muted hover:text-primary"
                }`}
              >
                {isActive(link.href) && (
                  <span className="block w-1 h-5 bg-accent rounded-full" />
                )}
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
