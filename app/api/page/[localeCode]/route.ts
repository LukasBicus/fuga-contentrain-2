import { LocaleCode } from '@/__generated__/api-types'
import { getPages } from '@/data'
import { DEFAULT_LOCALE_CODE } from '@/envs'
import { NextResponse } from 'next/server'

export async function generateStaticParams(): Promise<
  { localeCode: string }[]
> {
  return Object.values(LocaleCode).map((localeCode) => ({
    localeCode,
  }))
}

export const dynamicParams = false

export async function GET(
  request: Request,
  { params }: { params: { localeCode: string } }
) {
  return NextResponse.json(
    await getPages((params.localeCode as LocaleCode) || DEFAULT_LOCALE_CODE),
    { status: 200 }
  )
}
