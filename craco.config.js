// craco.config.js
const path = require(`path`);

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('autoprefixer'),
      ],
    },
  },
  webpack: {
    alias: {
      '@images': path.resolve(__dirname, './src/images'),
    }
  },
}