const firstUpper = require('../firstUpper.js');

module.exports = (sliceName) => {
  return `export type { 
  ${firstUpper(sliceName)}
} from './model/types/${sliceName}';

export { ${firstUpper(sliceName)}Component } from './ui/${firstUpper(sliceName)}/${firstUpper(sliceName)}';
`
}