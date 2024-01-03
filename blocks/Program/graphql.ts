import { gql } from 'graphql-request'

export const EVENTS_QUERY = gql`
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
          hu
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
