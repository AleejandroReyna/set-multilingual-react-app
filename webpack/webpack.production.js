const Merge = require('webpack-merge'),
      Path = require('path'),
      Webpack = require('webpack'),
      UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
      ExtractTextPlugin = require("extract-text-webpack-plugin"),
      HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin'),
      Common = require('./webpack.common.js');

const extractSass = new ExtractTextPlugin({
    filename: "css/style.css"
});

const Config = Merge(Common, {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        exclude: Path.resolve(__dirname, '../node_modules'),
        use: extractSass.extract({
          fallback: "style-loader",
          use: [
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
        })
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
        sourceMap: true
    }),
    new HtmlWebpackIncludeAssetsPlugin({
        assets: ['css/style.css'],
        append: true
      }),
    new Webpack.DefinePlugin({
      'process.env' : {
          'NODE_ENV': JSON.stringify('production')
      }
    }),
    extractSass
  ]
})

module.exports = Config