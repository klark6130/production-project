const firstUpper = require('../firstUpper.js');

module.exports = (sliceName) => {
  return `export type { 
  ${firstUpper(sliceName)}Schema
} from './model/types/${sliceName}Schema'

export { ${firstUpper(sliceName)} } from './ui/${firstUpper(sliceName)}/${firstUpper(sliceName)}';
`
}