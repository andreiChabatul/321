/* eslint-disable prettier/prettier */

const { CUSTOM_COLORS } = require('./src/services/colorsConfig')


module.exports = {
  content: ['./src/**/*.{html,js,vue}'],

  theme: {
    extend: {
      colors: CUSTOM_COLORS,
      fontFamily: {
      },
      boxShadow: {

      },
      borderRadius: {

      },
      backgroundImage: {

      },
      screens: {
        laptop: { max: '1400px' },
        mobile: { max: '500px' },
      }
    }
  },
  plugins: [],
}