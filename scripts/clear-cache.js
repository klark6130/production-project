// remove  node_modules/.cache

const fs = require('fs');
console.log('CLEAR CACHE');
const { join: joinPath } = require('path');
const cacheDir = joinPath(__dirname, '..', 'node_modules/.cache')
console.log('cached dir', cacheDir);
fs.rmSync(cacheDir, { recursive: true, force: true }) 