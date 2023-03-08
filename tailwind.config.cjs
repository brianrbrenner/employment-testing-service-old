/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}", "./components/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {},
  },
  plugins: [],
  important: true,
  enabled: process.env.NODE_ENV === "production" || process.env.NODE_ENV === "development",
};



