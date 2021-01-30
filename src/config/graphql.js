import { ApolloClient, InMemoryCache } from '@apollo/client';
import { currentUserVar, checkOutVar, userPositionVar } from '../cache';

const client = new ApolloClient({
  uri: 'https://server.dibuangsayang.tech',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getCurrentUser: {
            read: () => {
              return currentUserVar();
            },
          },
          getCheckOut: {
            read: () => {
              return checkOutVar();
            },
          },
          getUserPosition: {
            read: () => {
              return userPositionVar();
            },
          },
        },
      },
    },
  }),
});

export default client;
