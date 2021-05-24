import { ApolloClient, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

const restLink = new RestLink({
  uri: process.env.REACT_APP_API,
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink,
});

export default client;
