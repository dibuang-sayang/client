import { ApolloClient, InMemoryCache } from '@apollo/client';
import { currentUserVar } from '../cache';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getCurrentUser: {
            read: () => {
              return currentUserVar();
            },
          },
        },
      },
    },
  }),
});

export default client;
