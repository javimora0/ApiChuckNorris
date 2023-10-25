const path = require('path');

module.exports = {
  entry: {
    main: './src/app.js',
    about: './src/frase.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};