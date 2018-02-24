
const path = require('path');

const routes = {
  input: path.resolve('src'),
  output: path.resolve('public', 'js')
}

module.exports = {
  entry: [routes.input],
  output: {
    path: routes.output,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}