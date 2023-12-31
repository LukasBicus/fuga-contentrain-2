import { getPages } from '@/data'
import { availableLocales } from '@/i18n/settings'
import { ICommonBlockProps } from '@/types'
import { notFound } from 'next/navigation'
import { Block } from './block'
import { analyzeSegments } from './utils'

const mapToSegments = (items: { slug: string }[], prefix?: string) =>
  items.map((item) => ({
    segments: prefix ? [prefix, item.slug] : [item.slug],
  }))

export async function generateStaticParams(): Promise<
  { segments: string[] }[]
> {
  let allSlugs: { segments: string[] }[] = []
  allSlugs = allSlugs.concat(mapToSegments(await getPages()))

  for (const localeCode of availableLocales) {
    allSlugs = allSlugs.concat(
      mapToSegments(await getPages(localeCode), localeCode)
    )
  }
  return allSlugs
}

export const revalidate = 60 // revalidate most often once in 60s

const getPathFromSegments = (segments?: string[]) =>
  `/${(segments ?? []).join('/')}`

export default async function Page({
  params,
}: {
  params: { segments?: string[] }
}) {
  const { localeCode, slug, remainingSegments } = analyzeSegments(
    params.segments
  )

  const pages = await getPages(localeCode)
  const page = pages.find((p) => p.slug === slug)
  if (!page) {
    return notFound()
  }

  const commonProps: ICommonBlockProps = {
    localeCode,
    currentPath: getPathFromSegments(params.segments),
    remainingSegments,
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      {page.blocks.map((blockData, index) => (
        <Block
          key={`${blockData.type}-${index}`}
          blockData={blockData}
          commonProps={commonProps}
          index={index}
          page={page}
        />
      ))}
    </main>
  )
}
