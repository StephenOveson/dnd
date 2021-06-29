module.exports = {
  purge: ["./src/pages/**/*.{js, ts, tsx, jsx}", "./src/components/**/*.{js, ts, tsx, jsx}"],
  darkMode: 'class',
  theme: {
    colors: {
      grey: "#292929",
      lightGrey: "#585858",
      yellow: "#ffc815",
      white: "#fff",
      black: "#000",
    },
    extend: {},
  },
  variants: {
    display: ["group-hover"],
    extend: {
      translate: ['checked'],
      backgroundColor: ['checked'],
      inset: ['checked'],
      animation: ["hover"] 
    },
  },
  plugins: [],
}
