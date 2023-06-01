const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot.js');
const publicApiTemplate = require('./publicApiTemplate.js');

module.exports = async (layer, sliceName) => {
  try {
    await fs.writeFile(
      resolveRoot('src', layer, sliceName, 'index.ts'),
      publicApiTemplate(sliceName)
    );
  } catch (e) {
    throw new Error(`Не удалось создать public api для слайла ${sliceName}, ${e}`)
  }
}