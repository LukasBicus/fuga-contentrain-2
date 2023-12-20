export interface IObjectWithID {
  ID: string
}

export interface IMarkdownObject {
  content: string
}
export interface IArticleData extends IObjectWithID, IMarkdownObject {
  title: string
  slug: string
  createdAt: number
  updatedAt?: number
}

export interface IHeaderItemData {
  label: string
  articleId?: string
  pageId?: string
  slug: string
}

export interface IHeaderData extends IObjectWithID {
  items: IHeaderItemData[]
}

export interface IComponentData {
  type: 'header' | 'eventDetail'
  commonProps: ('localeCode' | 'currentPath' | 'routeParams')[]
}

export interface IPageData extends IObjectWithID {
  title: string
  slug: string
  components: IComponentData[]
}
