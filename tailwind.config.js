// require '/src/assets/bread2.png'

module.exports = {
  purge: [
    "./src/components/*.vue"
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'bread': "url('/src/assets/bread.jpg')",
      })
    }
  },
  variants: {},
  plugins: [],
}
