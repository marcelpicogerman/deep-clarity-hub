import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deep Life Evolution Hub – Academy of Becoming",
  description:
    "Für Menschen, die mehr wollen als Durchschnitt – und bereit sind, den Weg wirklich zu gehen. Marcel Pickelmann: Unternehmer · Connector · Strategischer Begleiter.",
  keywords: [
    "Deep Life",
    "Coaching",
    "Persönlichkeitsentwicklung",
    "Marcel Pickelmann",
    "Academy of Becoming",
    "Leben gestalten",
  ],
  authors: [{ name: "Marcel Pickelmann" }],
  openGraph: {
    title: "Deep Life Evolution Hub – Academy of Becoming",
    description:
      "Für Menschen, die mehr wollen als Durchschnitt – und bereit sind, den Weg wirklich zu gehen.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased bg-white text-text">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <FooterSection />
      </body>
    </html>
  );
}
