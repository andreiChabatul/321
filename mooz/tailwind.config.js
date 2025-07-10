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
        maxDV: { max: '1500px' },
        miniDV: { max: '1199px' },
        mobileM: { max: '530px' },
      }
    }
  },
  plugins: [],
}