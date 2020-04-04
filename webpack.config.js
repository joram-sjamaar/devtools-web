const path = require('path')

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'frontend/dist')
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ]
      },
    ],
  },
}