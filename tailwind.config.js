/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header': '#A97964',
        'light-brown': '#FDF0D9',
        'purple-light': '#A06580',
        'purple-dark': '#883B62'
      },
      keyframes: {
        slide: {
          '0%': {
            opacity: 0,
            transform: 'translateY(50%)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        slide: 'slide 1s ease-out forwards'
      }
    },
  },
  plugins: [],
}

