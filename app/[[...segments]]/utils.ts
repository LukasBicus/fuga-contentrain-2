import { LocaleCode } from '@/__generated__/api-types'
import { availableLocales } from '@/i18n/settings'
import { DEFAULT_LOCALE_CODE } from '@/public-envs'

export const analyzeSegments = (
  segments?: string[]
): { localeCode: LocaleCode; slug: string; remainingSegments: string[] } => {
  const firstSegment = segments?.at(0)
  if (!Array.isArray(segments) || !firstSegment) {
    return {
      localeCode: DEFAULT_LOCALE_CODE,
      slug: '',
      remainingSegments: [],
    }
  }
  const secondSegment = segments.at(1)
  if (availableLocales.includes(firstSegment as LocaleCode)) {
    return {
      localeCode: firstSegment as LocaleCode,
      slug: secondSegment ?? '',
      remainingSegments: segments.slice(2),
    }
  }
  return {
    localeCode: DEFAULT_LOCALE_CODE,
    slug: firstSegment ?? '',
    remainingSegments: segments.slice(1),
  }
}
