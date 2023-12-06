import { ENTRADIO_API_KEY, ENTRADIO_API_URL } from '@/envs'
import { GraphQLClient } from 'graphql-request'

export const graphqlClient = new GraphQLClient(ENTRADIO_API_URL, {
  headers: {
    Authorization: `Bearer ${ENTRADIO_API_KEY}`,
  },
  fetch,
})
