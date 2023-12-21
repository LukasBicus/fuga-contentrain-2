import { LocaleCode } from '@/__generated__/api-types'
import { DEFAULT_LOCALE_CODE } from '@/envs'

export const transformSlugToRoute = (slug: string, localeCode?: LocaleCode) => {
  if (!localeCode || localeCode === DEFAULT_LOCALE_CODE) {
    return slug ? `/${slug}` : '/'
  }
  return slug ? `/${localeCode}/${slug}` : `/${localeCode}`
}
