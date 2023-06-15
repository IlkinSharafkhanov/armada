/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.jsx",
"./components/**/*.jsx"],
  theme: {
 
    screens: {
      'bigger-desktop': {'max': '1327px',},

      'desktop': {'max': '1149px',},
      // => @media (min-width: 1280px) { ... }

      'laptop': {'max': '1000px',},
      // => @media (min-width: 1024px) { ... }

      'laptop2': {'max': '869px',},

      'tablet': {'max': '768px',},
      // => @media (min-width: 640px) { ... }

      'phone': {'max': '695px',},
    },
    boxShadow:{
      'select': "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      'xl': "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;",
      'navbar':"rgba(0, 0, 0, 0.24) 0px 3px 8px"
    },
    colors:{
      'white':"#ffff",
      'white-web': "#f4f4f5",
      'black': "#000000",
      'gold': "#cbb899",
      'button-gold': '#A8977B',
      'button-hover': '#9C8A6B',
      'grey-p':'#3F4245',
      'grey-subtext': '#6c737d',
      'grey-hover': '#abb8c3',
      'brown-main':'#54200F',
      'brown-second':'#5b291a'
    },
    fontFamily:{
      'modern': "sans-serif"
    },
    extend: {},
  },
  plugins: [],
}
