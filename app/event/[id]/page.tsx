import {
  EventQuery,
  EventQueryVariables,
  LocaleCode,
  ShowImageType,
} from '@/__generated__/api-types'
import { EVENT_QUERY } from '@/app/event/[id]/graphql'
import { Header } from '@/components/Header'
import { graphqlClient } from '@/lib/graphqlClient'

export const revalidate = 60 // revalidate at most every 15s

export default async function Page({ params }: { params: { id: string } }) {
  const data = await graphqlClient.request<EventQuery, EventQueryVariables>(
    EVENT_QUERY,
    {
      eventId: parseInt(params.id, 10),
      type: ShowImageType.Poster,
    }
  )

  const { event } = data
  return (
    <main className="flex min-h-screen flex-col">
      <Header localeCode={LocaleCode.Sk} currentPath={`/event/id`} />
      <div>{params.id}</div>
      <div>{JSON.stringify(event)}</div>
    </main>
  )
}
