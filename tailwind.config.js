/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(5px)',
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

