/* eslint-disable no-underscore-dangle */
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import path from 'path';
import * as user from './user';
import * as trainee from './trainee';

const types = fileLoader(path.join(__dirname, './**/*.graphql'));
const typeDefs = mergeTypes(types, { all: true });

export default {
  resolvers: {
    // ...trainee.unionResolver,
    Query: {
      ...user.getMe,
      ...trainee.query,
    },
    Mutation: {
      ...trainee.mutation,
      ...user.loginUser,
    },
    Subscription: {
      ...trainee.subscriptions,
    },
  },
  typeDefs,
};
