// require '/src/assets/bread2.png'

module.exports = {
  purge: [
    "./src/components/*.vue"
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'bread': "url('/src/assets/bread.jpg')",
        'bakery': "url('/src/assets/bakery-bg.jpeg')",
        'wood': "url('/src/assets/wood-bg.jpeg')"
      })
    }
  },
  variants: {},
  plugins: [],
}
