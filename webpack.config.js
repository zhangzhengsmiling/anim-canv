
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devServer = {
  contentBase: path.resolve(__dirname, 'out'),
  port: 8000,
  host: '127.0.0.1',
  overlay: {
    errors: true,
  }
}

var config = {
  mode: 'development',
  devServer,
  entry: path.resolve(__dirname, './src/main.ts'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './out'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: 'index.html',
    })
  ],
  resolve: {
    extensions: ['.ts', '.js', '.json', '.wasm'],
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        use: ['ts-loader']
      }
    ]
  }
}

module.exports = config;