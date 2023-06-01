const firstUpper = require('../../firstUpper.js');

module.exports = (sliceName) => {
  return `export interface ${firstUpper(sliceName)} {
  id: string
}
`
}