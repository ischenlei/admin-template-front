// vue.config.js
const path = require('path')
// const resolve = dir => require('path').join(__dirname, dir)
/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
        // '@': resolve('src')
      },
    },
  },
}
