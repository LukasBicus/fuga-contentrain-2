import { LocaleCode } from '@/__generated__/api-types'
import { DEFAULT_LOCALE_CODE } from '@/envs'
import { IArticleData } from '@/types'
import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

const defaultLocaleCode = LocaleCode.Sk

export const loadJsonFile = (filePath: string) => {
  try {
    const data = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(data)
  } catch (err) {
    console.error(`Error reading file from disk: ${err}`)
  }
}

export const loadLocalizedJSONData = <T extends object>({
  directory,
  localeCode,
  slug,
}: {
  directory: string
  localeCode: LocaleCode
  slug: string
}): T =>
  loadJsonFile(
    join(process.cwd(), 'data', directory, localeCode, `${slug}.json`)
  )

export const getDataDirectory = (dirname: string) =>
  join(process.cwd(), 'data', dirname)

export const getLocalisedDataDirectory = (
  dirname: string,
  localeCode: LocaleCode = DEFAULT_LOCALE_CODE
) => join(getDataDirectory(dirname), localeCode)

const getArticlesDirectory = (localeCode: LocaleCode = defaultLocaleCode) =>
  getLocalisedDataDirectory('article', localeCode)

export function getArticlesFilenames(
  localeCode: LocaleCode = defaultLocaleCode
) {
  return fs.readdirSync(getArticlesDirectory(localeCode))
}

const getSlugFromMdFilename = (filename: string) =>
  filename.replace(/\.md$/, '')

export function getArticleBySlug(
  slug: string,
  localeCode: LocaleCode = defaultLocaleCode
): IArticleData {
  const fullPath = join(getArticlesDirectory(localeCode), `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return { ...(data as Omit<IArticleData, 'content'>), content }
}

export function getAllArticles(localeCode: LocaleCode = defaultLocaleCode) {
  return getArticlesFilenames(localeCode)
    .map((filename) => getArticleBySlug(getSlugFromMdFilename(filename)))
    .sort((articleA, articleB) =>
      articleA.createdAt > articleB.createdAt ? -1 : 1
    )
}
