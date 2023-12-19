export interface IObjectWithID {
  ID: string
}
export type Article = {
  ID: string
  title: string
  slug: string
  createdAt: number
  updatedAt?: number
  content: string
}

export type HeaderItem = {
  label: string
  articleId?: string
  pageId?: string
  slug: string
}

export interface IHeader extends IObjectWithID {
  items: HeaderItem
}

export interface IPage extends IObjectWithID {
  title: string
  slug: string
}
