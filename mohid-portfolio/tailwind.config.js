/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
      'serif': ['ui-serif', 'Georgia'],
    }
  },
  plugins: [],
}
