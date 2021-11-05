module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      ringOffsetWidth: {
        '3': '3px',
        '6': '6px',
        '10': '10px',
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      animation: ['hover', 'focus'],
      transitionProperty: ['hover', 'focus'],
      ringOffsetWidth: ['hover', 'active'],
    },
  },
  plugins: [],
  important: true,
  
}
