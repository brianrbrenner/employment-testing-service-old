/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.tsx"],
  purge: {
    content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.tsx}"]
    // These options are passed through directly to PurgeCSS
  },
  theme: {
    extend: {},
  },
  plugins: [],
  important: true,
};
