/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode manually
  theme: {
    extend: {
      colors: {
        // Custom black scale
        'brand-black': '#0a0a0a',
        'brand-dark': '#121212',
        'brand-gray': '#1e1e1e',
        'brand-light-gray': '#2a2a2a',
      },
      fontFamily: {
        // Add custom fonts here if needed, e.g., 'sans': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
