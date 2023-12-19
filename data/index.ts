import { LocaleCode } from '@/__generated__/api-types'
import { getDataDirectory, loadJsonFile } from '@/lib/api'
import { IPage } from '@/types'
import fs from 'fs'
import path from 'path'

const isJSONFilePath = (path: string) => path.endsWith('.json')

const data: {
  page: { [key in LocaleCode]?: Record<string, IPage> }
} = {
  page: {},
}

const dirname = getDataDirectory('page')

const localeDirs = fs.readdirSync(dirname) as LocaleCode[]
for (const localeDir of localeDirs) {
  const localisedDir: Record<string, IPage> = {}

  const filenames = fs.readdirSync(path.join(dirname, localeDir)) as string[]
  for (const filename of filenames.filter(isJSONFilePath)) {
    const pathname = path.join(dirname, localeDir, filename)
    console.log('pathname', pathname)
    localisedDir[filename] = loadJsonFile(pathname) as IPage
  }

  data.page[localeDir] = localisedDir
}
console.log(JSON.stringify(data))

export { data }

export const getAllPagesForLocale = (localeCode: LocaleCode): IPage[] =>
  Object.values(data.page[localeCode] || {})
