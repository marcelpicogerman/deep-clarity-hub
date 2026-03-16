import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#B8892A",
        "gold-light": "#D4AF6A",
        "gold-pale": "#ECD9A8",
        cream: "#F5F0E8",
        "bg-alt": "#EDE7DB",
        dark: "#1A2E2A",
        "dark-mid": "#223830",
        text: "#2A2520",
        "text-muted": "#6B6358",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["DM Sans", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
        eyebrow: "0.22em",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
