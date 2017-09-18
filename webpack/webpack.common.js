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
      favicon: './src/react.png',
      template: `${Path.resolve(__dirname, '../src/templates')}/index.html`
    })
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
        test: /\.png$/, 
        use: [
          'file-loader'
        ] 
      }
    ]
  }
}

module.exports = config