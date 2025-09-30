/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fun: [
          'Luckiest Guy',
          'Fredoka',
          'cursive',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
