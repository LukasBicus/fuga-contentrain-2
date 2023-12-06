import {
  EventState,
  LocaleCode,
  ShowImageType,
  EventsQueryQueryVariables,
  EventsQueryQuery,
} from '@/__generated__/api-types'
import { EVENTS_QUERY } from '@/components/Program/graphql'
import { graphqlClient } from '@/lib/graphqlClient'
import {
  capitalizeFirstLetter,
  getFormatDayNumeric,
  getFormatTime,
  getFormatWeekDay,
  joinTroughDot,
} from '@/lib/format'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Program: React.FC<{ localeCode: LocaleCode }> = async ({
  localeCode,
}) => {
  const data = await graphqlClient.request<
    EventsQueryQuery,
    EventsQueryQueryVariables
  >(EVENTS_QUERY, {
    filter: {
      divisionId: 3,
      state: EventState.Published,
      fromStartsAt: new Date().toISOString(),
    },
    type: ShowImageType.Poster,
  })

  const {
    events: { items },
  } = data

  const formatWeekDay = getFormatWeekDay(localeCode)
  const formatDayNumeric = getFormatDayNumeric(localeCode)
  const formatTime = getFormatTime(localeCode)
  return (
    <div className="w-full">
      <div className="mx-auto h-full px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <h2 className="py-6 max-w-lg text-4xl">Program</h2>
        {items.map((item) => {
          const startsAtDate = new Date(item.startsAt)
          return (
            <div
              key={item.id}
              className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5"
            >
              <Link
                className="md:flex font-body hover:scale-105 hover:bg-transparent"
                href={`/event/${item.id}`}
              >
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
                  <p className="mt-2 text-gray-500">
                    {capitalizeFirstLetter(
                      joinTroughDot([
                        formatWeekDay(startsAtDate),
                        formatDayNumeric(startsAtDate),
                        formatTime(startsAtDate),
                      ])
                    )}
                  </p>
                  <p className="mt-2 text-gray-500">{item.venue.name}</p>
                  <p className="block mt-1 text-lg leading-tight font-medium text-black">
                    {item.show.translations.find(
                      (translation) => translation.localeCode === localeCode
                    )?.tagline || item.show.translations[0].tagline}
                  </p>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
