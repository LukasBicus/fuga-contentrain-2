import { LocaleCode } from '@/__generated__/api-types'

export interface IObjectWithID {
  ID: string
}

export interface IHeaderItemData {
  label: string
  pageId: string
  slug: string
}

export interface IHeaderData extends IObjectWithID {
  items: IHeaderItemData[]
}

export interface IComponentData {
  type:
    | 'header'
    | 'eventDetail'
    | 'hero'
    | 'program'
    | 'partners'
    | 'footer'
    | 'markdown'
  props: Record<string, any>
}

export interface ICommonComponentProps {
  localeCode: LocaleCode
  currentPath: string
  remainingSegments: string[]
}

export interface IPageData extends IObjectWithID {
  title: string
  slug: string
  content?: string
  createdAt: 1701418374289
  updatedAt?: 1701439444464
  components: IComponentData[]
}
