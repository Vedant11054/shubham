/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: '#0f172a',
        secondary: '#1e293b',
        accent: '#7c3aed',
      },
    },
  },
  plugins: [],
}
