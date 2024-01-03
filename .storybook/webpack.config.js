const path = require('path')

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, '../'), // path to your source folder
  }

  return config
}
