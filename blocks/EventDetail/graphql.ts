import { gql } from 'graphql-request'

export const EVENT_QUERY = gql`
  fragment TranslatedFields on Translated {
    en
    sk
    cs
    hu
  }

  query Event($eventId: PositiveInt!, $type: ShowImageType!) {
    event(id: $eventId) {
      ageClassificationTranslated {
        ...TranslatedFields
      }
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
      formatTranslated {
        ...TranslatedFields
      }
      gateOpensAt
      gateClosedAt
      id
      names {
        ...TranslatedFields
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
      soundMixTranslated {
        ...TranslatedFields
      }
      startsAt
      state
      versionTranslated {
        ...TranslatedFields
      }
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
