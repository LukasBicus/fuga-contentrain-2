const { join } = require('path')

const UNTRANSLATED_VALUE = ''

const DEFAULT_LANG = 'en'

const commonConfig = {
  input: ['app/**/*.tsx', 'components/**/*.tsx', 'internalComponents/**/*.tsx'],
  output: './i18n/locales',
  options: {
    debug: true,
    func: {
      list: ['i18next.t', 'i18n.t', 't', 't<string>'],
      extensions: ['.ts', '.tsx'],
    },
    sort: true,
    lngs: ['en', 'sk', 'cs', 'hu'],
    ns: ['translation'],
    defaultLng: DEFAULT_LANG,
    defaultNs: 'translation',
    defaultValue: (lng, ns, key) => {
      console.log('lng, ns, key,', lng, ns, key)
      return lng === DEFAULT_LANG ? key : UNTRANSLATED_VALUE
    },
    resource: {
      loadPath: join(process.cwd(), '/i18n/locales/{{lng}}/{{ns}}.json'),
      savePath: '{{lng}}/{{ns}}.json',
      jsonIndent: 2,
      lineEnding: '\n',
    },
    nsSeparator: '|',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      prefix: '{{',
      suffix: '}}',
    },
  },
}

module.exports = {
  commonConfig,
  UNTRANSLATED_VALUE,
}
