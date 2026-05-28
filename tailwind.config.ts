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
        "cover-bg": "#000000",
        "page-bg": "#0E0E0C",
        "page-alt": "#141412",
        "text-primary": "#F0EDE6",
        "text-muted": "#6B6B65",
        rule: "#2A2A26",
        accent: {
          cognitive: "#4A6FA5",
          decision: "#C4872A",
          perception: "#3D7A6F",
          behavior: "#B04A4A",
          system: "#6B7A3A",
        },
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      fontSize: {
        "law-number": "clamp(6rem, 14vw, 16rem)",
        "law-title": "clamp(2.5rem, 5vw, 5rem)",
      },
      lineHeight: {
        body: "1.75",
      },
      letterSpacing: {
        widest: "0.2em",
        wider: "0.15em",
      },
      backgroundImage: {
        "noise-cover":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
        "noise-page":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
export default config;
