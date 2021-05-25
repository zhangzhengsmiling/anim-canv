
const path = require('path');

var config = {
  mode: 'development',
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