import { LocaleCode } from '@/__generated__/api-types'

export const getFormatWeekDay = (localeCode: LocaleCode) => (date: Date) => {
  const formatter = Intl.DateTimeFormat(localeCode, {
    weekday: 'long',
  })
  return formatter.format(date)
}

export const getFormatDayNumeric = (localeCode: LocaleCode) => (date: Date) => {
  const formatter = Intl.DateTimeFormat(localeCode, {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  })
  return formatter.format(date)
}

export const getFormatTime = (localeCode: LocaleCode) => (date: Date) => {
  const formatter = Intl.DateTimeFormat(localeCode, {
    hour: '2-digit',
    minute: '2-digit',
  })
  return formatter.format(date)
}

export const joinTroughDot = (list: string[]) => list.join(' • ')

export const capitalizeFirstLetter = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1)
