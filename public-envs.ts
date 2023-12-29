import { LocaleCode } from '@/__generated__/api-types'

const DEFAULT_LOCALE_CODE = (process.env.NEXT_PUBLIC_DEFAULT_LOCALE_CODE ||
  LocaleCode.En) as LocaleCode

export { DEFAULT_LOCALE_CODE }
