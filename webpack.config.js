const path = require('path');

module.exports = {
  entry: {
    main: './src/app.js',
    about: './src/frase.js',
    chiste: './src/chiste.js',
  },
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};