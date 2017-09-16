const Path = require('path'),
      Webpack = require('webpack'),
      CleanWebpackPlugin = require('clean-webpack-plugin'),
      ExtractTextPlugin = require("extract-text-webpack-plugin"),
      HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: "css/style.css",
  disable: process.env.NODE_ENV !== "production"
});

const config = {
  entry: {
    app: `${Path.resolve(__dirname, '../src')}/index.js`
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new HtmlWebpackPlugin({
      title: 'Multilingual React App',
      template: `${Path.resolve(__dirname, '../src/templates')}/index.html`
    }),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: ['css/style.css'],
      append: true
    }),
    extractSass
  ],
  output: {
    path: Path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: Path.resolve(__dirname, '../node_modules'),
        use: [
          {
            loader: 'babel-loader'  
          }
        ]
      },
      {
        test: /\.(css|scss|sass)$/,
        exclude: Path.resolve(__dirname, '../node_modules'),
        use: extractSass.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader"
            },
            {
              loader: "postcss-loader",
              options: {
                config: {
                  path: './postcss.config.js'
                },
                ctx: {
                  autoprefixer: {}
                },
                plugins: [
                  require('postcss-import')(),
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
  }
}

module.exports = config