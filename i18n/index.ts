'use server'
import { LocaleCode } from '@/__generated__/api-types'
import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { defaultNS, getOptions } from './settings'

const initI18next = async (localeCode: LocaleCode, namespace: string) => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (lc: string, ns: string) => import(`./locales/${lc}/${ns}.json`)
      )
    )
    .init(getOptions(localeCode, namespace))
  return i18nInstance
}

export async function useServerTranslation(
  localeCode: LocaleCode,
  ns: string = defaultNS,
  options: {
    keyPrefix?: string
  } = {}
) {
  const i18nextInstance = await initI18next(localeCode, ns)
  return {
    t: i18nextInstance.getFixedT(localeCode, ns, options.keyPrefix),
    i18n: i18nextInstance,
  }
}
