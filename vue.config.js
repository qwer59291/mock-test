const path = require('path')

const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('assets'))
      .set('components', resolve('components'))
      .set('router',resolve('router'))
  }
}
