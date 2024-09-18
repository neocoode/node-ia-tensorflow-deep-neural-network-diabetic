const path = require('path');

module.exports = {
  // outras configurações...
  resolve: {
    alias: {
      '@data': path.resolve(__dirname, 'src/data/'),
      '@models': path.resolve(__dirname, 'src/models/')
    },
    extensions: ['.ts', '.js']
  },
  // ...
};
