/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
   
    extend: {
      spacing: {
        'neg-796': '-796px',
        'neg-501': '-501px',
      },
    }
  },
  darkTheme: "light",
  plugins: []
  
}