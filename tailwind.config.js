/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F5F749",
        background: "#2A2B2A",
        text: "#FAFAFF",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      backgroundImage: {
        'card-gradient': 'linear-gradient(to right, #323332, #3E403E)',
      },
    },
  },
  plugins: [],
}
