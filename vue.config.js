const path = require('path')
// import path = require('path')
const resolve = (dir) => path.join(__dirname, dir)
// console.log(process.env.NODE_ENV)
module.exports = {
  //   publicPath: process.env.NODE_ENV === 'production' ? '/robot/dist/' : '',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '',
  css: {
    // 是否开启 CSS source maps
    sourceMap: true
  },
  chainWebpack: (config) => {
    // 修复HMR
    config.resolve.symlinks(true)
    // vue默认@指向src目录
    config.resolve.alias.set('@', path.resolve('src'))
  },
  devServer: {
    port: 9001
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, 'src/assets/scss/common.scss')]
    }
  }
}
