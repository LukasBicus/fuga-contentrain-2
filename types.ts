import { LocaleCode } from '@/__generated__/api-types'

export type Article = {
  ID: string
  title: string
  slug: string
  createdAt: number
  updatedAt?: number
  content: string
}

export type HeaderItem = {
  ID: string
  label: string
  path: string
  order: number
  simplePageId: Record<LocaleCode, string>
}
