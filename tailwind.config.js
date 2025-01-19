/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#4D547A",
        darkBlue: "#030816",
        secondary: "#4D547AB2",
        "background-2": "#e6ebf9",
        accent: "#698cba",
        backgroundClr: "#F8F9FC",
        btnHoverColor: "#4d547a1a",
      },
      fontFamily: {
        rubik: ["var(--font-rubik)"],
      },
      screens: {
        "mw-12": { max: "1280px" },
        "mw-10": { max: "1024px" },
        "mw-8": { max: "840px" },
        "mw-7": { max: "768px" },
        "mw-6": { max: "640px" },
        "mw-5": { max: "575px" },
        "mw-4": { max: "420px" },
        "mw-3": { max: "360px" },
      },
      maxWidth: {
        maxWidth: "1100px",
      },
      boxShadow: {
        "shadow-cal": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
    },
  },
  variants: {
    extend: {
      textAlign: ["dir"],
    },
  },
  corePlugins: {
    preflight: true, // Preflight should be enabled
  },
  plugins: [],
};
