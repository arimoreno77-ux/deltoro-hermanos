/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          yellow: '#F59E0B',
          yellowDark: '#D97706',
          amber: '#EAB308',
          dark: '#111827',
          charcoal: '#1F2937',
          whatsapp: '#25D366',
          light: '#F3F4F6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
