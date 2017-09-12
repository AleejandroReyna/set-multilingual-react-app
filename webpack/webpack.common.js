const Path = require('path'),
      Webpack = require('webpack'),
      CleanWebpackPlugin = require('clean-webpack-plugin'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    app: `${Path.resolve(__dirname, '../src')}/index.js`
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new HtmlWebpackPlugin({
      title: 'Multilingual React App',
      template: `${Path.resolve(__dirname, '../src/templates')}/index.html`
    })
  ],
  output: {
    path: Path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js'
  }
}

module.exports = config