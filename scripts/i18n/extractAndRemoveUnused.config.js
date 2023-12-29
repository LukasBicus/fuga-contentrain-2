const _ = require('lodash')

const { commonConfig } = require('./common.config')

module.exports = _.merge(commonConfig, {
  options: { removeUnusedKeys: true },
})
