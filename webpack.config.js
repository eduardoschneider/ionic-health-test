const path = require('path');

module.exports = {
  entry: './src/index.tsx', // Caminho para seu arquivo de entrada
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader', // Ou 'babel-loader' se você estiver usando Babel
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|sass)$/, // Processa arquivos .scss e .sass
        use: [
          'style-loader', // Injeta CSS no DOM
          'css-loader',   // Interpreta @import e url()
          'sass-loader'   // Compila Sass para CSS
        ],
      },
    ],
  },
};