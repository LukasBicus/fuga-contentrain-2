import { LocaleCode } from '@/__generated__/api-types'
import { SimplePage } from '@/types'
import fs from 'fs'
import fsPromises from 'fs/promises'
import { join } from 'path'
import matter from 'gray-matter'

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

const getSimplePagesDirectory = (localeCode: LocaleCode = defaultLocaleCode) =>
  join(process.cwd(), 'content/page/Simple-page', localeCode)
export function getSimplePagesFilenames(
  localeCode: LocaleCode = defaultLocaleCode
) {
  return fs.readdirSync(getSimplePagesDirectory(localeCode))
}

const getSlugFromMdFilename = (filename: string) =>
  filename.replace(/\.md$/, '')

export function getSimplePageBySlug(
  slug: string,
  localeCode: LocaleCode = defaultLocaleCode
): SimplePage {
  const fullPath = join(getSimplePagesDirectory(localeCode), `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return { ...(data as Omit<SimplePage, 'content'>), content }
}

export function getAllSimplePages(localeCode: LocaleCode = defaultLocaleCode) {
  return getSimplePagesFilenames(localeCode)
    .map((filename) => getSimplePageBySlug(getSlugFromMdFilename(filename)))
    .sort((simplePage1, simplePage2) =>
      simplePage1.createdAt > simplePage2.createdAt ? -1 : 1
    )
}
