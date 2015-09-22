var path = require('path');

module.exports = {
  scss: [path.join(__dirname, 'scss')],
  js: [path.join(__dirname, 'js/ionic-bundle.min.js')],
  fonts: [path.join(__dirname, 'fonts/**/*.{eot,svg,ttf,woff}')],
  css: [path.join(__dirname, 'css')],
}