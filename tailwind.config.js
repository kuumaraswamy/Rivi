/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-background': '#406882',
        'custom-background1': '#6998AB',
        'custom-background2': '#B1D0E0',
        'custom-background3': '#EEF2FF',
      }
    },
  },
  plugins: [],
}
