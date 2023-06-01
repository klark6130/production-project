const { resolve } = require('path');

module.exports = (...segments) => resolve(__dirname, '..', '..', ...segments);