'use server'
import { useServerTranslation } from '@/i18n'
import { ICommonBlockProps } from '@/types'
import Image from 'next/image'
import React from 'react'

const data = [
  { src: '/kruh.png', name: 'kruh', url: '#' },
  {
    src: '/gospelova.png',
    name: 'Gospelova muzika',
    url: 'https://www.gospelovamuzika.sk/',
  },
  { src: '/zachej.png', name: 'zachej', url: 'https://www.zachej.sk/' },
  { src: '/rtvs.png', name: 'rtvs', url: '#' },
]

export const Partners: React.FC<ICommonBlockProps> = async ({ localeCode }) => {
  const { t } = await useServerTranslation(localeCode)
  return (
    <div className="px-24 py-12 bg-white w-full">
      <h3 className="text-center">{t('Partners')}</h3>
      <div className="flex items-center justify-center w-full">
        <div
          className="my-4 grid grid-cols-2 gap-6 md:grid-cols-4"
          id="frameworks-integration"
        >
          {data.map((item) => (
            <a
              key={item.name}
              className="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25 hover:bg-transparent"
              href={item.url}
            >
              <span className="my-6 grid h-24 w-24 place-items-center">
                <Image
                  src={item.src}
                  alt={item.name}
                  width={175}
                  height={120}
                />
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
