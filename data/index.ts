import { LocaleCode } from '@/__generated__/api-types'
import { DEFAULT_LOCALE_CODE } from '@/envs'
import { IHeaderData, IPageData } from '@/types'
import fs from 'fs'
import matter from 'gray-matter'
import path, { join } from 'path'
import 'server-only'

export const loadJsonFile = (filePath: string) => {
  try {
    const data = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(data)
  } catch (err) {
    console.error(`Error reading file from disk: ${err}`)
  }
}

export const loadMarkdownFile = <T extends object>(filepath: string): T => {
  const fileContents = fs.readFileSync(filepath, 'utf8')
  const { data, content } = matter(fileContents)
  return { ...data, content } as T
}

export const getDataDirectory = (dirname: string) =>
  join(process.cwd(), 'data', dirname)

const isJSONFilePath = (filepath: string) => filepath.endsWith('.json')
const isMarkdownFilePath = (filepath: string) => filepath.endsWith('.md')

type ComponentDirectoryContent<T> = {
  [key in LocaleCode]?: Record<string, T>
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

const data: {
  page: ComponentDirectoryContent<IPageData>
  header: ComponentDirectoryContent<IHeaderData>
} = {
  page: loadDataFromDir<IPageData>('page'),
  header: loadDataFromDir<IHeaderData>('header'),
}

export { data }

export function getPages(localeCode: LocaleCode = DEFAULT_LOCALE_CODE) {
  'use server'
  return Object.values(data.page[localeCode] || {})
}
