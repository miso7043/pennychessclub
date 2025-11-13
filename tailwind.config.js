/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4a90e2',
        secondary: '#7cb342',
        accent: '#ff9800',
        tournament: '#e91e63',
        founder: '#9c27b0',
        contact: '#00bcd4',
        resources: '#607d8b',
      },
    },
  },
  plugins: [],
}
