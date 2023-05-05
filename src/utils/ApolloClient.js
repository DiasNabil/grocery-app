import clientConfig from './clientConfig'
import { ApolloClient, InMemoryCache,ApolloProvider, createHttpLink } from '@apollo/client'

const client = new ApolloClient({
    uri: clientConfig.graphqlUrl,
    cache: new InMemoryCache(),
  });

export default client 