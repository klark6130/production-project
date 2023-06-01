const firstUpper = require('../../firstUpper.js');

module.exports = (sliceName) => {
  return `import { ${firstUpper(sliceName)} } from './${sliceName}'

export interface ${firstUpper(sliceName)}Schema {
  isLoading: boolean
  error?: string
  data?: ${firstUpper(sliceName)}
}
`
}