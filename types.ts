export enum LocaleCode {
  en = 'en',
  sk = 'sk',
  cs = 'cs',
}

export type SimplePage = {
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
