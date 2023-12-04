import { loadLocalizedCollectionData } from '@/lib/api'
import { LocaleCode } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import 'server-only'

const data = [
  {
    label: 'Program',
    link: '/',
  },
  {
    label: 'O nás',
    link: '/o-nas',
  },
  {
    label: 'Contact',
    link: '/kontakt',
  },
]

interface IHeaderProps {
  localeCode: LocaleCode
}

export const Header: React.FC<IHeaderProps> = async ({ localeCode }) => {
  const headerItemData = await loadLocalizedCollectionData<{
    ID: string
    label: string
    path: string
    order: number
    simplePageId: Record<LocaleCode, string>
  }>('Header-item', LocaleCode.sk)
  console.log('headerItemData', headerItemData)
  console.log('v', headerItemData[0].simplePageId[LocaleCode.sk])

  return (
    <header className="w-full text-gray-700 bg-white shadow-sm body-font">
      <div className="container flex flex-col p-6 mx-auto md:flex-row items-center">
        <a className="flex items-center mb-4 text-gray-900 title-font md:mb-0">
          <Image
            src="/fuga-logo.png"
            alt="Fuga Logo"
            width={175}
            height={120}
            priority
          />
        </a>
        <nav className="flex items-center justify-center text-base md:ml-auto h-full">
          {data.map((item) => (
            <Link key={item.link} href={item.link} className="mr-5">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
