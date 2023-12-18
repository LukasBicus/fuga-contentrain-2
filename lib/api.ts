import { LocaleCode } from '@/__generated__/api-types'
import { Article } from '@/types'
import fs from 'fs'
import fsPromises from 'fs/promises'
import matter from 'gray-matter'
import { join } from 'path'

const defaultLocaleCode = LocaleCode.Sk

export const loadJsonFile = async (filePath: string) => {
  try {
    const data = await fsPromises.readFile(filePath, 'utf-8')
    return JSON.parse(data)
  } catch (err) {
    console.error(`Error reading file from disk: ${err}`)
  }
}

export const loadLocalizedCollectionData = async <T extends object>(
  collection: string,
  localeCode: LocaleCode
): Promise<T[]> =>
  loadJsonFile(
    join(
      process.cwd(),
      'contentrain/contentrain',
      collection,
      `${localeCode}.json`
    )
  )

const getArticlesDirectory = (localeCode: LocaleCode = defaultLocaleCode) =>
  join(process.cwd(), 'data/article', localeCode)
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
): Article {
  const fullPath = join(getArticlesDirectory(localeCode), `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return { ...(data as Omit<Article, 'content'>), content }
}

export function getAllArticles(localeCode: LocaleCode = defaultLocaleCode) {
  return getArticlesFilenames(localeCode)
    .map((filename) => getArticleBySlug(getSlugFromMdFilename(filename)))
    .sort((articleA, articleB) =>
      articleA.createdAt > articleB.createdAt ? -1 : 1
    )
}
