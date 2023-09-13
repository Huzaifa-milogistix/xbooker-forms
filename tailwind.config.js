/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{tsx,ts,js,jsx}",
    "./public/**/*.html",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      mono: ["monospace"],
    },
    extend: {
      colors: {
        accentRed: "#B72615",
        accentGreen: "#13320A",
        accentDarkOrange: "#AE611E",
        accentBlue: "#3877AF",
        accentDarkBlue: "#19377B",
        accentAqua: "#218E89",
        textDarkPrimary: "#333",
        textPrimary: "#333",
        textDarkSecondary: "#888",
        textSecondary: "#888",
        textWhitePrimary: "#FFF",
        textWhiteSecondary: "#E0E0E0",
        primary: "#3877AF",
        primaryDark: "#19377B",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/typography")],
};
