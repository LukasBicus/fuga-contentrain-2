import { LocaleCode } from '@/__generated__/api-types'
import { DEFAULT_LOCALE_CODE } from '@/envs'
import { uniq } from 'lodash'

export const availableLocales = uniq([
  DEFAULT_LOCALE_CODE,
  LocaleCode.Sk,
  LocaleCode.En,
])
