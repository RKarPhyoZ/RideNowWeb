
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#dbe3ed',
          200: '#baccdb',
          300: '#8eaac3',
          400: '#6386a8',
          500: '#456a8f',
          600: '#335275',
          700: '#2a4360',
          800: '#1E3A5F', // Primary Navy
          900: '#1d324f',
          950: '#111f33',
        },
        gold: {
          50: '#fbf8eb',
          100: '#f6efcd',
          200: '#eedda0',
          300: '#e4c46d',
          400: '#D4AF37', // Primary Gold
          500: '#b89228',
          600: '#96701f',
          700: '#78551b',
          800: '#63451c',
          900: '#553b1d',
          950: '#301f0d',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 4px 20px -2px rgba(30, 58, 95, 0.08)',
        'luxury-hover': '0 10px 30px -4px rgba(30, 58, 95, 0.12)',
      },
    },
  },
  plugins: [],
}
