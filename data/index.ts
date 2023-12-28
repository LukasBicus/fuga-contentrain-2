'use server'

import { LocaleCode } from '@/__generated__/api-types'
import { DEFAULT_LOCALE_CODE } from '@/envs'
import { IHeaderData, IPageData } from '@/types'
import fs from 'fs'
import matter from 'gray-matter'
import path, { join } from 'path'
import pageData from './page/index.json'

const loadJsonFile = (filePath: string) => {
  try {
    const data = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(data)
  } catch (err) {
    console.error(`Error reading file from disk: ${err}`)
  }
}

const loadMarkdownFile = <T extends object>(filepath: string): T => {
  const fileContents = fs.readFileSync(filepath, 'utf8')
  const { data, content } = matter(fileContents)
  return { ...data, content } as T
}

const getDataDirectory = (dirname: string) =>
  join(process.cwd(), 'data', dirname)

const isJSONFilePath = (filepath: string) => filepath.endsWith('.json')
const isMarkdownFilePath = (filepath: string) => filepath.endsWith('.md')

type ComponentDirectoryContent<T> = {
  [key in LocaleCode]?: Record<string, T>
}

type DataDirectoryContent<T> = {
  [key in LocaleCode]?: T[]
}

const loadDataFromDir = <T extends object>(
  dirname: string
): ComponentDirectoryContent<T> => {
  const dirPath = getDataDirectory(dirname)
  const result: ComponentDirectoryContent<T> = {}
  const localeDirs = fs
    .readdirSync(dirPath)
    .filter((p) =>
      Object.values(LocaleCode).includes(p as LocaleCode)
    ) as LocaleCode[]
  for (const localeDir of localeDirs) {
    const markdownFilenames = (
      fs.readdirSync(path.join(dirPath, localeDir)) as string[]
    ).filter(isMarkdownFilePath)

    const markdownData = markdownFilenames.reduce(
      (acc: Record<string, T> = {}, filename) => {
        const pathname = path.join(dirPath, localeDir, filename)
        return {
          ...acc,
          [filename]: loadMarkdownFile<T>(pathname),
        }
      },
      {}
    )

    const jsonFilenames = (
      fs.readdirSync(path.join(dirPath, localeDir)) as string[]
    ).filter(isJSONFilePath)

    const jsonData = jsonFilenames.reduce(
      (acc: Record<string, T> = {}, filename) => {
        const pathname = path.join(dirPath, localeDir, filename)
        return {
          ...acc,
          [filename]: loadJsonFile(pathname) as T,
        }
      },
      {}
    )
    result[localeDir] = {
      ...markdownData,
      ...jsonData,
    }
  }
  return result
}

export interface IData {
  page: DataDirectoryContent<IPageData>
  // header: DataDirectoryContent<IHeaderData>
  header: ComponentDirectoryContent<IHeaderData>
}

const data: IData = {
  page: pageData as DataDirectoryContent<IPageData>,
  // header: headerData as DataDirectoryContent<IHeaderData>,
  header: loadDataFromDir<IHeaderData>('header'),
}

export async function getPages(localeCode: LocaleCode = DEFAULT_LOCALE_CODE) {
  return Promise.resolve(data.page[localeCode] || [])
}

export async function getHeaders(localeCode: LocaleCode = DEFAULT_LOCALE_CODE) {
  return Promise.resolve(Object.values(data.header[localeCode] || {}))
}
