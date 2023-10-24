/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'space-img': "url('space.jpg')"
      },
      filter: {
        'grayscale-80': 'grayscale(80%)',
      },
      }
    },
  plugins: [],
}

