import { LocaleCode } from '@/__generated__/api-types'
import { getPages } from '@/data'
import { DEFAULT_LOCALE_CODE } from '@/envs'
import { ICommonComponentProps } from '@/types'
import { notFound } from 'next/navigation'
import { mapPageComponent } from './mapPageComponent'

const mapToSegments = (items: { slug: string }[], prefix?: string) =>
  items.map((item) => ({
    segments: prefix ? [prefix, item.slug] : [item.slug],
  }))

export async function generateStaticParams(): Promise<
  { segments: string[] }[]
> {
  let allSlugs: { segments: string[] }[] = []
  allSlugs = allSlugs.concat(mapToSegments(await getPages()))

  for (const localeCode of Object.values(LocaleCode)) {
    allSlugs = allSlugs.concat(
      mapToSegments(await getPages(localeCode), localeCode)
    )
  }
  return allSlugs
}

export const revalidate = 60 // revalidate at most every 60s

const getPathFromSegments = (segments?: string[]) =>
  `/${(segments ?? []).join('/')}`

const analyzeSegments = (
  segments?: string[]
): { localeCode: LocaleCode; slug: string; remainingSegments: string[] } => {
  const firstSegment = segments?.at(0)
  if (!Array.isArray(segments) || !firstSegment) {
    return {
      localeCode: DEFAULT_LOCALE_CODE,
      slug: '',
      remainingSegments: [],
    }
  }
  const secondSegment = segments.at(1)
  if (Object.values(LocaleCode).includes(firstSegment as LocaleCode)) {
    return {
      localeCode: firstSegment as LocaleCode,
      slug: secondSegment ?? '',
      remainingSegments: segments.slice(2),
    }
  }
  return {
    localeCode: DEFAULT_LOCALE_CODE,
    slug: firstSegment ?? '',
    remainingSegments: segments.slice(1),
  }
}

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

  const commonProps: ICommonComponentProps = {
    localeCode,
    currentPath: getPathFromSegments(params.segments),
    remainingSegments,
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      {page.components.map((componentData, index) =>
        mapPageComponent({ componentData, commonProps, index, page })
      )}
    </main>
  )
}
