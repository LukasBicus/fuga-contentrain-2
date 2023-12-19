import { LocaleCode } from '@/__generated__/api-types'
import { data } from '@/data'
import { transformSlugToRoute } from '@/lib/routes'
import { clsx } from 'clsx'
import { orderBy } from 'lodash'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import 'server-only'

interface IHeaderProps {
  localeCode: LocaleCode
  currentPath: string
}

export const Header: React.FC<IHeaderProps> = async ({
  localeCode,
  currentPath,
}) => {
  const headerData = Object.values(data.header[localeCode] || {}).at(0)
  if (!headerData) {
    return null
  }

  const items = headerData.items.map((item) => {
    return {
      ...item,
      path: transformSlugToRoute(item.slug, localeCode),
    }
  })

  return (
    <header className="w-full text-gray-700 bg-white shadow-sm body-font">
      <div className="container flex flex-col p-6 mx-auto md:flex-row items-center">
        <Link
          className="flex items-center mb-4 text-gray-900 title-font md:mb-0"
          href="/"
        >
          <Image
            src="/fuga-logo.png"
            alt="Fuga Logo"
            width={175}
            height={120}
            priority
          />
        </Link>
        <nav className="flex items-center justify-center text-base md:ml-auto h-full">
          {orderBy(items, 'order').map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={clsx('mr-4', 'px-2', 'py-1', 'border-l-4', {
                ['border-l-red-700']: item.path === currentPath,
                ['border-l-transparent']: item.path !== currentPath,
              })}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
