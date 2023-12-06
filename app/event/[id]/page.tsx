import {
  EventQuery,
  EventQueryVariables,
  LocaleCode,
  ShowImageType,
} from '@/__generated__/api-types'
import { EVENT_QUERY } from '@/app/event/[id]/graphql'
import { EventDetail } from '@/components/EventDetail'
import { Header } from '@/components/Header'
import { graphqlClient } from '@/lib/graphqlClient'
import { notFound } from 'next/navigation'

export const revalidate = 60 // revalidate at most every 15s

const getData = async (eventId: number) => {
  try {
    return await graphqlClient.request<EventQuery, EventQueryVariables>(
      EVENT_QUERY,
      {
        eventId,
        type: ShowImageType.Poster,
      }
    )
  } catch (e) {
    return null
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getData(parseInt(params.id, 10))
  if (!data) {
    notFound()
  }
  return (
    <main className="flex min-h-screen flex-col">
      <Header localeCode={LocaleCode.Sk} currentPath={`/event/id`} />
      <EventDetail localeCode={LocaleCode.Sk} event={data.event} />
    </main>
  )
}
