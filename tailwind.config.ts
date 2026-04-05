import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F0F0F",
        "section-alt": "#1A1A1E",
        "brand-accent": "#7B5EA7",
        "cta-accent": "#9B7EC8",
        "cta-hover": "#7E5FAF",
        "text-primary": "#F5F0EB",
        "text-secondary": "#A39E98",
        "card-bg": "#1E1E22",
        border: "#2A2A2E",
        "footer-bg": "#0A0A0A",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
