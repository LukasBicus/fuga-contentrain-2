import { LocaleCode } from '@/__generated__/api-types'
import { getDataDirectory, loadJsonFile } from '@/lib/api'
import { IArticleData, IHeaderData, IMarkdownObject, IPageData } from '@/types'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

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
