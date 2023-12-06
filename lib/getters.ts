import { LocaleCode, ShowTranslation } from '@/__generated__/api-types'

export const getTranslation = <
  T extends Pick<ShowTranslation, '__typename' | 'localeCode'>,
>(
  translations: Array<T>,
  localeCode: LocaleCode
) => translations.find((t) => t.localeCode === localeCode) || translations[0]
