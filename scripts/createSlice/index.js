const createTemplate = require('./templates/createTemplate.js');

const args = process.argv;

const layer = args[2];
const sliceName = args[3];

const layers = ['entities', 'features', 'pages'];

if (!layer || !layers.includes(layer)) {
  throw new Error(`Слой должен быть из [${layers.join(',')}]`)
}

if (!sliceName) {
  throw new Error('Не указано имя слайса вторым аргументом')
}

createTemplate(layer, sliceName);