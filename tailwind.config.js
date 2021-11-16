module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#3451A1",
        error: "#D2354D",
        header: "#1D1C1D",
        inactive: "#BBBBBB",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
