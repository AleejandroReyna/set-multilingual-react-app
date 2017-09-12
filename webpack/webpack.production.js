const Merge = require('webpack-merge'),
      Webpack = require('webpack'),
      UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
      Common = require('./webpack.common.js');

const Config = Merge(Common, {
  devtool: 'source-map',
  plugins: [
    new UglifyJsPlugin({
        sourceMap: true
    }),
    new Webpack.DefinePlugin({
        'process.env' : {
            'NODE_ENV': JSON.stringify('production')
        }
    })
  ]
})

module.exports = Config