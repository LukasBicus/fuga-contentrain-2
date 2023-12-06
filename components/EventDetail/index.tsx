import { EventQuery, LocaleCode } from '@/__generated__/api-types'
import { getFormatDayNumeric, getFormatTime, joinTroughDot } from '@/lib/format'
import { getTranslation } from '@/lib/getters'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const placeholderImageProps = {
  src: 'https://placehold.co/600x400/jpeg?text=Entradio+placeholder',
  alt: 'Entradio placeholder',
  width: 600,
  height: 400,
}

export const EventDetail: React.FC<{
  localeCode: LocaleCode
  event: EventQuery['event']
}> = async ({ event, localeCode }) => {
  const primaryImageProps = event.show.primaryImage
    ? {
        src: event.show.primaryImage.url,
        alt: event.show.primaryImage.key,
        width: event.show.primaryImage.width!,
        height: event.show.primaryImage.height!,
      }
    : placeholderImageProps
  const description =
    getTranslation(event.show.translations, localeCode).description || ''

  const formatDayNumeric = getFormatDayNumeric(localeCode)
  const formatTime = getFormatTime(localeCode)
  const startsAtDate = new Date(event.startsAt)
  return (
    <>
      <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
        <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
          <Image className="w-full" {...primaryImageProps} />
          <Image className="mt-6 w-full" {...placeholderImageProps} />
        </div>
        <div className="md:hidden">
          <Image className="w-full" {...primaryImageProps} />
          <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
            <Image
              className="md:w-48 md:h-48 w-full"
              {...placeholderImageProps}
            />
            <Image
              {...placeholderImageProps}
              className="md:w-48 md:h-48 w-full"
            />
            <Image
              className="md:w-48 md:h-48 w-full"
              {...placeholderImageProps}
            />
            <Image
              {...placeholderImageProps}
              className="md:w-48 md:h-48 w-full"
            />
          </div>
        </div>
        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
          <div className="border-b border-gray-200 pb-6">
            <p className="text-sm leading-none text-gray-600 dark:text-gray-300 ">
              {getTranslation(event.show.translations, localeCode).tagline}
            </p>
            <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
              {event.names[localeCode]}
            </h1>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
              Starts
            </p>
            <p className="text-sm leading-none text-gray-600 dark:text-gray-300">
              {joinTroughDot([
                formatDayNumeric(startsAtDate),
                formatTime(startsAtDate),
              ])}
            </p>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
              Venue
            </p>
            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600 dark:text-gray-300">
                {event.venue.name}
              </p>
            </div>
          </div>
          <Link href={event.ecommerceEventURL}>
            <button className="font-mono dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700 focus:outline-none">
              Prejdi do obchodu
            </button>
          </Link>
          <div>
            <div
              className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <p className="text-base leading-4 mt-7 text-gray-600 dark:text-gray-300">
              Age classification code: {event.ageClassificationCode}
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">
              Format code: {event.formatCode}
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">
              Sound mix code: {event.soundMixCode}
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">
              Version code: {event.versionCode}
            </p>
          </div>
          <div>
            <div className="border-b border-t py-4 border-gray-200 mt-4">
              <div className="flex justify-between items-center cursor-pointer">
                <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
                  <h3>Adresa</h3>
                  <p>{event.venue.name}</p>
                  <p>{event.venue.address.complex}</p>
                  <p>{event.venue.address.town}</p>
                  <p>{event.venue.address.street}</p>
                  <p>{event.venue.address.postalCode}</p>
                  <p>{event.venue.address.country}</p>
                </p>
              </div>
              <div
                className="hidden pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 dark:text-gray-300"
                id="sect"
              >
                If you have any questions on how to return your item to us,
                contact us.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
