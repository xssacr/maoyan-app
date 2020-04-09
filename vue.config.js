const path = require('path')
const pxtovw = require('postcss-px-to-viewport')

module.exports = {
  css: {
    loaderOptions: {
      css: {

      },
      postcss: {
        plugins: [
          new pxtovw({
            unitToConvert: 'px',
            viewportWidth: 375,
            unitPrecision: 3,
            propList: ['*'],
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: [/node_modules/],
          })
        ]
      }
    }
  },
  chainWebpack: config => {
    return config.resolve.alias.set('assets', path.resolve(__dirname, './src/assets'))
  }
}