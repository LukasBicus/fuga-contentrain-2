import { LocaleCode } from '@/__generated__/api-types'
import { DEFAULT_LOCALE_CODE } from '@/envs'
import { IArticleData, IHeaderData, IMarkdownObject, IPageData } from '@/types'
import fs from 'fs'
import matter from 'gray-matter'
import path, { join } from 'path'

export const loadJsonFile = (filePath: string) => {
  try {
    const data = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(data)
  } catch (err) {
    console.error(`Error reading file from disk: ${err}`)
  }
}

export const getDataDirectory = (dirname: string) =>
  join(process.cwd(), 'data', dirname)

const isJSONFilePath = (filepath: string) => filepath.endsWith('.json')

type ComponentDirectoryContent<T> = {
  [key in LocaleCode]?: Record<string, T>
}

const loadDataFromJSONDir = <T extends object>(
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
    const filenames = (
      fs.readdirSync(path.join(dirPath, localeDir)) as string[]
    ).filter(isJSONFilePath)

    result[localeDir] = filenames.reduce(
      (acc: Record<string, T> = {}, filename) => {
        const pathname = path.join(dirPath, localeDir, filename)
        return {
          ...acc,
          [filename]: loadJsonFile(pathname) as T,
        }
      },
      {}
    )
  }
  return result
}

export const loadMarkdownFile = <T extends IMarkdownObject>(
  filepath: string
): T => {
  const fileContents = fs.readFileSync(filepath, 'utf8')
  const { data, content } = matter(fileContents)

  return { ...data, content } as T
}

const loadDataFromMarkdownDir = <T extends IMarkdownObject>(
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
    const filenames = (
      fs.readdirSync(path.join(dirPath, localeDir)) as string[]
    ).filter(isJSONFilePath)

    result[localeDir] = filenames.reduce(
      (acc: Record<string, T> = {}, filename) => {
        const pathname = path.join(dirPath, localeDir, filename)
        return {
          ...acc,
          [filename]: loadMarkdownFile<T>(pathname),
        }
      },
      {}
    )
  }
  return result
}

const data: {
  page: ComponentDirectoryContent<IPageData>
  header: ComponentDirectoryContent<IHeaderData>
  article: ComponentDirectoryContent<IArticleData>
} = {
  page: loadDataFromJSONDir<IPageData>('page'),
  header: loadDataFromJSONDir<IHeaderData>('header'),
  article: loadDataFromMarkdownDir<IArticleData>('article'),
}

export { data }

export const getAllArticles = (localeCode: LocaleCode = DEFAULT_LOCALE_CODE) =>
  Object.values(data.article[localeCode] || {}).sort((articleA, articleB) =>
    articleA.createdAt > articleB.createdAt ? -1 : 1
  )

export const getArticleBySlug = (
  slug: string,
  localeCode: LocaleCode = DEFAULT_LOCALE_CODE
): IArticleData | undefined =>
  getAllArticles(localeCode).find((a) => a.slug === slug)

export const getAllPages = (localeCode: LocaleCode = DEFAULT_LOCALE_CODE) =>
  Object.values(data.page[localeCode] || {})
