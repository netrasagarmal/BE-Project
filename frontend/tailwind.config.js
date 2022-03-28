module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '75' : '300px',
      }
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
  important: true,
}


// module.exports = {
//   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {
//       animation: ['hover', 'focus'],
//       transitionProperty: ['hover', 'focus'],
//     },
//   },
//   plugins: [],
//   important: true,
  
// }
