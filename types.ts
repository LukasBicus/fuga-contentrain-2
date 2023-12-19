export interface IObjectWithID {
  ID: string
}
export interface IArticleData extends IObjectWithID {
  title: string
  slug: string
  createdAt: number
  updatedAt?: number
  content: string
}

export interface IHeaderItemData {
  label: string
  articleId?: string
  pageId?: string
  slug: string
}

export interface IHeaderData extends IObjectWithID {
  items: IHeaderItemData
}

export interface IPageData extends IObjectWithID {
  title: string
  slug: string
}
