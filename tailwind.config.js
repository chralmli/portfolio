/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(5px)',
      },
      fontFamily: {
        'sans': ['"Nunito"', 'sans-serif'],
        'serif': ['"Merriweather"', 'serif'],
      },
    },
  },
  variants: {
    extend: {
      opacity: ['group-hover'],
      transform: ['group-hover'],
      rotate: ['group-hover'],
      backdropFilter: ['group-hover'],
    },
  },
  plugins: [],
}

