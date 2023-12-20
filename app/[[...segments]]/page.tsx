import { LocaleCode } from '@/__generated__/api-types'
import { ColumnPage } from '@/app/[[...segments]]/ColumnPage'
import { getAllArticles, getAllPages } from '@/data'
import { DEFAULT_LOCALE_CODE } from '@/envs'
import { notFound } from 'next/navigation'
import { Article } from './Article'

const mapToSegments = (items: { slug: string }[], prefix?: string) =>
  items.map((item) => ({
    segments: prefix ? [prefix, item.slug] : [item.slug],
  }))

export async function generateStaticParams(): Promise<
  { segments: string[] }[]
> {
  let allSlugs: { segments: string[] }[] = []
  allSlugs = allSlugs.concat(mapToSegments(getAllPages()))
  allSlugs = allSlugs.concat(mapToSegments(getAllArticles()))

  for (const localeCode of Object.values(LocaleCode)) {
    allSlugs = allSlugs.concat(
      mapToSegments(getAllPages(localeCode), localeCode)
    )
    allSlugs = allSlugs.concat(
      mapToSegments(getAllArticles(localeCode), localeCode)
    )
  }
  return allSlugs
}

// when a page not generated by generateStaticParams is visited, notFound page is displayed
export const dynamicParams = false

const getPathFromSegments = (segments?: string[]) =>
  `/${(segments ?? []).join('/')}`

const analyzeSegments = (segments?: string[]) => {
  const firstSegment = segments?.at(0)
  if (!Array.isArray(segments) || !firstSegment) {
    return {
      localeCode: DEFAULT_LOCALE_CODE,
      slug: '',
    }
  }
  const secondSegment = segments.at(1)
  if (Object.values(LocaleCode).includes(firstSegment as LocaleCode)) {
    return {
      localeCode: firstSegment as LocaleCode,
      slug: secondSegment ?? '',
    }
  }
  return {
    localeCode: DEFAULT_LOCALE_CODE,
    slug: firstSegment ?? '',
  }
}

export default async function Page({
  params,
}: {
  params: { segments?: string[] }
}) {
  console.log('params.segments', params.segments)
  const { localeCode, slug } = analyzeSegments(params.segments)

  const pages = getAllPages(localeCode)
  const page = pages.find((p) => p.slug === slug)

  const articles = getAllArticles(localeCode)
  const article = articles.find((a) => a.slug === slug)

  if (page) {
    return (
      <ColumnPage
        page={page}
        currentPath={getPathFromSegments(params.segments)}
        localeCode={localeCode}
      />
    )
  }
  if (article) {
    return (
      <Article
        article={article}
        localeCode={localeCode}
        currentPath={getPathFromSegments(params.segments)}
      />
    )
  }
  if (!page && !article) {
    return notFound()
  }
}
