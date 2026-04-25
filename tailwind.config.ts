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
        ink:       "#0E0608",
        burdeos:   "#3D0B1A",
        burdeos2:  "#5C1228",
        crema:     "#F4EEE4",
        crema2:    "#E8DFD0",
        nude:      "#C9A98A",
        nude2:     "#E2CBAF",
        gold:      "#B8956A",
        "warm-dark": "#1C1008",
        muted:     "#7A6E66",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        serif:   ["var(--font-baskerville)", "serif"],
        sans:    ["var(--font-jost)", "sans-serif"],
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};

export default config;
