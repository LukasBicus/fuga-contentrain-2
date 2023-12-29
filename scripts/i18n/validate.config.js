const _ = require('lodash')

const { commonConfig, UNTRANSLATED_VALUE } = require('./common.config')

console.log('commonConfig,', commonConfig)

const MISSING_KEY = '__I18N_MISSING_KEY__'

const isEmpty = (key) => key === UNTRANSLATED_VALUE
const isMissing = (key) => key === MISSING_KEY

const getInvalidKeysForLanguage = (namespaces, isInvalid) => {
  return _.reduce(
    namespaces,
    (result, translations, namespaceKey) => {
      const invalidKeys = _(translations)
        .pickBy((v) => isInvalid(v))
        .keys()
        .value()

      const namespaceToInvalidKeys = _.isEmpty(invalidKeys)
        ? {}
        : { [namespaceKey]: invalidKeys }
      return { ...result, ...namespaceToInvalidKeys }
    },
    {}
  )
}

const getInvalidKeys = (resStore, isInvalid) => {
  return _.reduce(
    resStore,
    (result, namespaces, locale) => {
      const invalidKeys = getInvalidKeysForLanguage(namespaces, isInvalid)
      const localeToInvalidKeys = _.isEmpty(invalidKeys)
        ? {}
        : { [locale]: invalidKeys }
      return { ...result, ...localeToInvalidKeys }
    },
    {}
  )
}

const getFlatKeys = (lgConfg) =>
  _(lgConfg)
    .map((ns, language) =>
      _(ns)
        .map((pairs, nsKey) =>
          _.keys(pairs).map((k) => `${language}${nsKey}:${k}`)
        )
        .flatten()
        .value()
    )
    .flatten()
    .value()

const getUnusedKeys = (scaned, stored) =>
  _.difference(getFlatKeys(stored), getFlatKeys(scaned))

const format = (v) => JSON.stringify(v, null, 4)

module.exports = _.merge(commonConfig, {
  options: {
    debug: false,
    // Note: when generating new keys, their value is set to empty string ('')
    // If there are missing keys after generation we set their default value
    // to custom string so we can distinguish them from existing empty strings.
    defaultValue: MISSING_KEY,
  },
  flush: function flushWithoutModifications(done) {
    const unusedKeys = getUnusedKeys(this.parser.resScan, this.parser.resStore)

    const missingKeys = getInvalidKeys(this.parser.resStore, isMissing)
    const emptyKeys = getInvalidKeys({ en: this.parser.resStore.en }, isEmpty)

    let hasError = false

    if (unusedKeys.length) {
      console.error('Unused keys:', format(unusedKeys))
      hasError = true
    }

    if (!_.isEmpty(emptyKeys)) {
      console.error('Empty (en) i18n keys:', format(emptyKeys))
      hasError = true
    }

    if (!_.isEmpty(missingKeys)) {
      console.error('Missing i18n keys:', format(missingKeys))
      hasError = true
    }

    if (hasError) {
      process.exit(1)
    }

    // override default flush that updates locales
    done()
  },
})
