"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay so it doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6">
      <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-xl p-5 sm:p-6">
        <p className="font-sans text-sm text-text-muted leading-relaxed mb-4">
          Wir verwenden technisch notwendige Cookies, um diese Website
          bereitzustellen. Mehr dazu in unserer{" "}
          <Link
            href="/datenschutz"
            className="text-primary underline hover:text-accent transition-colors"
          >
            Datenschutzerkl&auml;rung
          </Link>
          .
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={accept}
            className="px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors"
          >
            Akzeptieren
          </button>
          <button
            onClick={decline}
            className="px-5 py-2.5 bg-gray-100 text-text-muted text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
          >
            Nur notwendige
          </button>
        </div>
      </div>
    </div>
  );
}
