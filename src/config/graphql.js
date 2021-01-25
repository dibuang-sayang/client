import { ApolloClient, InMemoryCache } from '@apollo/client';
import {currentUser} from "../cache"

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache({
    typePolicies: {
      Query:{
        fields: {
          getCurrentUser: {
            read: () => {
              return currentUser()
            }
          }
        }
      }
    }
  }),
});

export default client;
