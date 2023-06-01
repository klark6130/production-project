const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot.js');
const createModel = require('./createModel.js');
const createUI = require('./createUI.js');
const createPublicApi = require('./createPublicApi.js');

module.exports = async (layer, sliceName) => {
  try {
    const folder = resolveRoot('src', layer, sliceName)
    await fs.mkdir(folder);
  } catch (e) {
    throw new Error(`Не удалось создать директорию для слайса ${sliceName}, ${e}`)
  }

  await createModel(layer, sliceName);
  await createUI(layer, sliceName);
  await createPublicApi(layer, sliceName);
}