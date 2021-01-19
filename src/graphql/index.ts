import { makeExecutableSchema } from 'apollo-server-lambda';

import resolvers from './resolvers';
import typeDefs from "./api/schema";

export const schema: any = makeExecutableSchema({
  resolvers,
  typeDefs
});
