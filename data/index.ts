'use server'

import { LocaleCode } from '@/__generated__/api-types'
import { DEFAULT_LOCALE_CODE } from '@/public-envs'
import { IHeaderData, IPageData } from '@/types'
import headerData from './header.json'
import pageData from './page.json'

type DataDirectoryContent<T> = {
  [key in LocaleCode]?: T[]
}

export interface IData {
  page: DataDirectoryContent<IPageData>
  header: DataDirectoryContent<IHeaderData>
}

const data: IData = {
  page: pageData as DataDirectoryContent<IPageData>,
  header: headerData as DataDirectoryContent<IHeaderData>,
}

export async function getPages(localeCode: LocaleCode = DEFAULT_LOCALE_CODE) {
  return Promise.resolve(data.page[localeCode] || [])
}

export async function getHeaders(localeCode: LocaleCode = DEFAULT_LOCALE_CODE) {
  return Promise.resolve(data.header[localeCode] || [])
}
