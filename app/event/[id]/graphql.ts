import { gql } from 'graphql-request'

export const EVENT_QUERY = gql`
  query Event($eventId: PositiveInt!, $type: ShowImageType!) {
    event(id: $eventId) {
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
