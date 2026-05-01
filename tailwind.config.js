/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00d4ff',
        secondary: '#090909',
        accent: '#00d4ff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          from: { boxShadow: '0 0 20px #00d4ff' },
          to: { boxShadow: '0 0 30px #00d4ff, 0 0 40px #00d4ff' },
        },
      },
    },
  },
  plugins: [],
}