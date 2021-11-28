// craco.config.js
const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@images': path.resolve(__dirname, './src/images'),
      '@fonts': path.resolve(__dirname, './src/fonts'),
      '@icons': path.resolve(__dirname, './src/components/icons')
    }
  },
}