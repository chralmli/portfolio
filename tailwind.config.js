/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      filter: {
        'brightness-70': 'brightness(70%)',
      }
    },
  },
  plugins: [],
}

