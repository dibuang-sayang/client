import { ApolloClient, InMemoryCache } from '@apollo/client';
import { currentUserVar, checkOutVar  } from '../cache';

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
          getCheckOut : {
            read: () => {
              return checkOutVar()
            }
          }
        },
      },
    },
  }),
});

export default client;
