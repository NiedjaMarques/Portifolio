/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px 10px rgb(255, 74, 0)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}


