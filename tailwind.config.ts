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
        primary: {
          DEFAULT: "#2D5A4F",
          light: "#3D7A6B",
          dark: "#1E3D35",
        },
        accent: {
          DEFAULT: "#C4973B",
          light: "#D4AF6A",
          pale: "#E8D5A8",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          alt: "#F5F8F7",
          dark: "#1A2E2A",
          "dark-mid": "#223830",
        },
        text: {
          DEFAULT: "#1A1A1A",
          muted: "#6B7280",
          light: "#9CA3AF",
        },
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
        float: "float 6s ease-in-out infinite",
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
