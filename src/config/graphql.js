import { ApolloClient, InMemoryCache } from '@apollo/client';
import { currentUserVar, checkOutVar, userPositionVar  } from '../cache';

const client = new ApolloClient({
  uri: 'http://13.213.17.85:4000',
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
          },
          getUserPosition : {
            read: () => {
              return userPositionVar()
            }
          }
        },
      },
    },
  }),
});

export default client;
