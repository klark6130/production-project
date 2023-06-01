const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot.js');
const reduxSliceTemplate = require('./model/reduxSliceTemplate.js');
const schemaTemplate = require('./model/schemaTemplate.js');
const sliceTypeTemplate = require('./model/sliceTypeTemplate.js');

module.exports = async (layer, sliceName) => {
  const resolveModelPath = (...folders) => resolveRoot('src', layer, sliceName, 'model', ...folders);

  try {
    await fs.mkdir(resolveModelPath());
    await fs.mkdir(resolveModelPath('selectors'));
    await fs.mkdir(resolveModelPath('services'));
    await fs.mkdir(resolveModelPath('slices'));
    await fs.mkdir(resolveModelPath('types'));
  } catch (e) {
    throw new Error(`Не удалось создать model для ${sliceName}, ${e}`)
  }

  try {
    await fs.writeFile(
      resolveModelPath('slices', `${sliceName}Slice.ts`),
      reduxSliceTemplate(sliceName)
    )
  } catch (e) {
    throw new Error(`Не удалось создать слайс для ${sliceName}, ${e}`)
  }

  try {
    await fs.writeFile(
      resolveModelPath('types', `${sliceName}Schema.ts`),
      schemaTemplate(sliceName)
    )
  } catch (e) {
    throw new Error(`Не удалось создать schema для ${sliceName}, ${e}`)
  }

  try {
    await fs.writeFile(
      resolveModelPath('types', `${sliceName}.ts`),
      sliceTypeTemplate(sliceName)
    )
  } catch (e) {
    throw new Error(`Не удалось создать type для ${sliceName}, ${e}`)
  }
}