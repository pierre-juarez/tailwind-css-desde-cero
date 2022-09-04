/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        dangerx: '#dd2d4a',
        msg: {
          600: '#0a2463',
          400: '#3e92cc'
        }
      }
    },
  },
  plugins: [],
}
