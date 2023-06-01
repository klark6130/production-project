const firstUpper = require('../../firstUpper.js');

module.exports = (sliceName) => {
  return `.${firstUpper(sliceName)} {
  
}
`
}