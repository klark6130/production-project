const firstUpper = require('../firstUpper.js');
const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot.js');
const componentTemplate = require('./ui/componentTemplate.js');
const styleTemplate = require('./ui/styleTemplate.js');
const storyTemplate = require('./ui/storyTemplate.js');

module.exports = async (layer, sliceName) => {
  const componentName = firstUpper(sliceName);
  const resolveUIPath = (...folders) => resolveRoot('src', layer, sliceName, 'ui', ...folders);

  try {
    const folder = resolveRoot(resolveUIPath());
    await fs.mkdir(folder);
  } catch (e) {
    throw new Error(`Не удалось создать ui для слайса ${sliceName}, ${e}`)
  }

  // Component
  try {
    await fs.mkdir(resolveUIPath(componentName));
    await fs.writeFile(
      resolveUIPath(componentName, `${componentName}.tsx`),
      componentTemplate(firstUpper(sliceName))
    )

    await fs.writeFile(
      resolveUIPath(componentName, `${componentName}.module.scss`),
      styleTemplate(sliceName)
    )

    await fs.writeFile(
      resolveUIPath(componentName, `${componentName}.stories.tsx`),
      storyTemplate(layer, sliceName)
    )

  } catch (e) {
    throw new Error(`Не удалось создать component для слайса ${sliceName}, ${e}`)
  }
}