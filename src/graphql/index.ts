import {makeExecutableSchema} from 'apollo-server-lambda';

import {resolvers} from './resolvers';
import {typeDefs} from "./api";

export const schema: any = makeExecutableSchema({
    resolvers,
    typeDefs
});
