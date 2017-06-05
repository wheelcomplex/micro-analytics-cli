const supportsAsyncAwait =
  parseInt(process.version.slice(1).split('.').join('')) > 760;

const path = supportsAsyncAwait ? './src/index' : './dist/index';

module.exports = require(path);
