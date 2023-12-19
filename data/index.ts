import { LocaleCode } from '@/__generated__/api-types'
import { getDataDirectory, loadJsonFile } from '@/lib/api'
import { IHeader, IPage } from '@/types'
import fs from 'fs'
import path from 'path'

const isJSONFilePath = (path: string) => path.endsWith('.json')

type ComponentDirectoryContent<T> = {
  [key in LocaleCode]?: Record<string, T>
}

const loadDataForJSONDir = <T extends object>(
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
    const acc: Record<string, T> = {}

    const filenames = (
      fs.readdirSync(path.join(dirPath, localeDir)) as string[]
    ).filter(isJSONFilePath)

    for (const filename of filenames) {
      const pathname = path.join(dirPath, localeDir, filename)
      console.log('pathname', pathname)
      acc[filename] = loadJsonFile(pathname) as T
    }

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

const data: {
  page: ComponentDirectoryContent<IPage>
  header: ComponentDirectoryContent<IHeader>
} = {
  page: loadDataForJSONDir<IPage>('page'),
  header: loadDataForJSONDir<IHeader>('header'),
}

export { data }
