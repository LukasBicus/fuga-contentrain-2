'use client'

import { LocaleCode } from '@/__generated__/api-types'
import { DEFAULT_LOCALE_CODE } from '@/public-envs'
import i18next from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
  UseTranslationOptions,
} from 'react-i18next'
import { availableLocales, getOptions } from './settings'

i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      (lc: string, ns: string) => import(`./locales/${lc}/${ns}.json`)
    )
  )
  .init({
    ...getOptions(),
    lng: DEFAULT_LOCALE_CODE, // always require fixed T
    preload: availableLocales,
  })

export function useClientTranslation(
  localeCode: LocaleCode,
  namespace: string = 'translate',
  options: UseTranslationOptions<string> = {}
) {
  const ret = useTranslationOrg(namespace, options)
  const { i18n } = ret

  return {
    t: localeCode
      ? i18n.getFixedT(localeCode, namespace, options.keyPrefix)
      : i18n.t,
    i18n: ret.i18n,
  }
}
