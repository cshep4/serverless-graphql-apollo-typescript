import { ApolloServer } from 'apollo-server-lambda';
import {schema} from "./graphql";

const server = new ApolloServer({
  schema: schema,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  }),
  playground: {
    endpoint: "/dev/graphql"
  }
});

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: true,
    credentials: true,
  },
});