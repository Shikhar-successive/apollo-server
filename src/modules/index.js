import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import path from 'path';
import * as user from './user';
import * as trainee from './trainee';

const types = fileLoader(path.join(__dirname, './**/*.graphql'));
const typeDefs = mergeTypes(types, { all: true });

export default {
  resolvers: {
    Query: {
      ...user.getProfile,
      ...trainee.query,
    },
    Mutation: {
      ...trainee.mutation,
    },
  },
  typeDefs,
};
