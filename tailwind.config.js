/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Přidání vlastního breakpointu "custom" na 1090px
        custom: "1090px",
      },
    },
  },
  plugins: [],
};
