const Merge = require('webpack-merge'),
      Path = require('path'),
      Common = require('./webpack.common.js'),
      Webpack = require('webpack');

const Config = Merge(Common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: `${Path.resolve(__dirname, '../dist')}`,
    hot: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        exclude: Path.resolve(__dirname, '../node_modules'),
        use: [
          "style-loader",
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ctx: {
                autoprefixer: {}
              },
              plugins: [
                require('autoprefixer')()
              ]
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.DefinePlugin({
        'process.env' : {
            'NODE_ENV': JSON.stringify('development')
        }
    })
  ]
})

module.exports = Config