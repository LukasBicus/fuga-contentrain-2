import {
  LocaleCode,
  Query,
  QueryEventArgs,
  ShowImageType,
  ShowPrimaryImageArgs,
} from '@/__generated__/api-types'
import { Header } from '@/components/Header'
import { entradioApiGraphqlRequest } from '@/lib/entradio-api'

const EVENT_QUERY = `
query Event($id: PositiveInt!, $type: ShowImageType!) {
  event(id: $id) {
    ageClassificationCode
    auditorium {
      id
      name
    }
    client {
      id
      name
    }
    division {
      id
      name
      email
      phoneNumber
    }
    endsAt
    duration
    ecommerceEventURL
    formatCode
    gateOpensAt
    gateClosedAt
    id
    names {
      cs
      en
      hu
      sk
    }
    organizerNote
    show {
      id
      images {
        id
        key
        height
        url
        width
      }
      languageCodes
      primaryImage(type: $type) {
        id
        key
        height
        width
        url
      }
      translations {
        tagline
        localeCode
        description
      }
    }
    soundMixCode
    startsAt
    state
    versionCode
    venue {
      address {
        complex
        country
        postalCode
        street
        town
      }
      id
      name
      secondaryName
    }
  }
}
`

export default async function Page({ params }: { params: { id: string } }) {
  console.log('params', params)
  const data = await entradioApiGraphqlRequest<
    QueryEventArgs & ShowPrimaryImageArgs,
    Pick<Query, 'event'>
  >({
    query: EVENT_QUERY,
    variables: {
      id: parseInt(params.id, 10),
      type: ShowImageType.Poster,
    },
  })

  const { event } = data
  return (
    <main className="flex min-h-screen flex-col">
      <Header localeCode={LocaleCode.Sk} currentPath={`/event/id`} />
      <div>{params.id}</div>
      <div>{JSON.stringify(event)}</div>
    </main>
  )
}
