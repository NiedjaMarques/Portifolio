/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'azul-escuro': '#001427',
        'azul-claro': '#2C7BE1', //azul claro
        'azul-transparente': '#051F3B',
        'rosa': '#FF8098', //rosa-salmão
        'rosa-transparente': '#1A1F32', //rosa-salmão
        'amarelo': '#EAC047', //amarelo
        'amarelo-transparente': '#19262B', 
        'verde': '#84E296', // verde
        'verde-transparente':'#0D2932',
        
      },
      animation: {
        'color-transition': 'colorTransition 3s infinite',
      },
      keyframes: {
        colorTransition: {
          '0%, 100%': { color: '#FF8098' }, // rosa
          '50%': { color: '#EAC047' },    // amarelo
          '75%': { color: '#84E296' },    // verde
        },
      },
    },
  },
  plugins: []
}


