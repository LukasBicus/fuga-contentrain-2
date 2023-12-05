import { LocaleCode } from '@/types'
import axios from 'axios'
import Image from 'next/image'
import React from 'react'

const EVENTS_QUERY = `
query EventsQuery($filter: EventsFilter, $type: ShowImageType!) {
  events(filter: $filter) {
    items {
      id
      show {
        id
        translations {
          tagline
          localeCode
        }
        primaryImage(type: $type) {
          url
          width
          height
          key
          id
        }
      }
      names {
        cs
        en
        sk
      }
      startsAt
      venue {
        id
        name
      }
      state
    }
  }
}
`
async function getData() {
  const { ENTRADIO_API_URL, ENTRADIO_API_KEY } = process.env
  if (ENTRADIO_API_KEY && ENTRADIO_API_URL) {
    const response = await fetch(ENTRADIO_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ENTRADIO_API_KEY}`,
      },
      body: JSON.stringify({
        query: EVENTS_QUERY,
        variables: {
          filter: {
            divisionId: 3,
            state: 'published',
            fromStartsAt: new Date().toISOString(),
          },
          type: 'poster',
        },
      }),
      next: { revalidate: 60 },
    })

    const data = await response.json()
    if (data.errors) {
      throw data
    }
    return data.data
  }
  return null
}

export const Program: React.FC<{ localeCode: LocaleCode }> = async ({
  localeCode,
}) => {
  const data = await getData()

  const {
    events: { items },
  } = data

  return (
    <div className="w-full">
      <div className="mx-auto h-full px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <h2 className="py-6 max-w-lg text-4xl">Program</h2>
        {/*// @ts-ignore*/}
        {items.map((item) => (
          <div
            key={item.id}
            className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                {item.show.primaryImage?.url ? (
                  <Image
                    className="h-48 w-full object-cover md:w-48"
                    src={item.show.primaryImage.url}
                    alt={item.show.primaryImage.key}
                    width={135}
                    height={202}
                  />
                ) : (
                  <Image
                    className="h-48 w-full object-cover md:w-48"
                    src="https://attendio-library.attendio.online/5f6c59a6b32df40dd71ea8a9970cbdcb4f0294f0-poster-medium.jpeg"
                    alt={'An alt'}
                    width={135}
                    height={202}
                  />
                )}
              </div>
              <div className="p-8">
                <h5 className="uppercase tracking-wide text-sm">
                  {item.names[localeCode]}
                </h5>
                <p className="mt-2 text-gray-500">{item.startsAt}</p>
                <p className="mt-2 text-gray-500">{item.venue.name}</p>
                <p className="block mt-1 text-lg leading-tight font-medium text-black">
                  {item.show.translations.find(
                    // @ts-ignore
                    (translation) => translation.localeCode === localeCode
                  ).tagline || item.show.translations[0].tagline}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
