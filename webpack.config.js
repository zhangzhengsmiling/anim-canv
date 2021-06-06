
const path = require('path');

var config = {
  mode: 'development',
  // devServer: {
  //   port: 8000,
  //   host: '127.0.0.1',
  //   overlay: {
  //       errors: true,
  //   }
  // },
  entry: path.resolve(__dirname, './src/main.ts'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './out'),
  },
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