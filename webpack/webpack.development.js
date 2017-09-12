const Merge = require('webpack-merge'),
      Path = require('path'),
      Common = require('./webpack.common.js'),
      Webpack = require('webpack');

const Config = Merge(Common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: `${Path.resolve(__dirname, '../dist')}`,
    hot: true
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin()
  ]
})

module.exports = Config