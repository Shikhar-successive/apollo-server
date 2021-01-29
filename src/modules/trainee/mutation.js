import pubsuObject from '../pubsub';
import constant from '../../lib/constant';

export default {
  create: async (parent, args, context) => {
    const { user } = args;
    const { dataSources: { traineeApi } } = context;
    const response = await traineeApi.create(user);
    pubsuObject.publish(constant.subscriptions.TRAINEE_ADDED, { traineeAdded: response.data.data });
    return response;
  },

  update: async (parent, args, context) => {
    const { user } = args;
    const { dataSources: { traineeApi } } = context;
    const response = await traineeApi.update(user);
    pubsuObject.publish(constant.subscriptions.TRAINEE_UPDATED,
      { traineeUpdated: response.data.Details });
    return response;
  },

  deleteUser: async (parent, args, context) => {
    const { user } = args;
    const { originalId } = user;
    const { dataSources: { traineeApi } } = context;
    const response = await traineeApi.deleteUser(originalId);
    pubsuObject.publish(
      constant.subscriptions.TRAINEE_DELETED,
      { traineeDeleted: response.data.id },
    );
    return response;
  },
};
