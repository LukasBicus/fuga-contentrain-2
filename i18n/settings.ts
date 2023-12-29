import { LocaleCode } from '@/__generated__/api-types'

import { uniq } from 'lodash'

const DEFAULT_LOCALE_CODE = LocaleCode.Sk

export const availableLocales = uniq([
  DEFAULT_LOCALE_CODE,
  LocaleCode.Sk,
  LocaleCode.En,
])

export const defaultNS = 'translation'
export const cookieName = 'i18next'

export function getOptions(localeCode = DEFAULT_LOCALE_CODE, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: availableLocales,
    DEFAULT_LOCALE_CODE,
    lng: localeCode,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  }
}
