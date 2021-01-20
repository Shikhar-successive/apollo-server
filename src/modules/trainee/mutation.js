import pubsuObject from '../pubsub';
import constant from '../../lib/constant';

export default {
  create: async (parent, args, context) => {
    const { user } = args;
    const { dataSources: { traineeApi } } = context;
    const response = await traineeApi.create(user);
    pubsuObject.publish(constant.subscriptions.TRAINEE_ADDED, { traineeAdded: response.data.data });
    return response.data.data;
  },

  update: async (parent, args, context) => {
    const {
      originalId, name, role, email, password, updatedBy,
    } = args;
    const { dataSources: { traineeApi } } = context;
    const response = await traineeApi.update(originalId, name, role, email, password, updatedBy);
    pubsuObject.publish(constant.subscriptions.TRAINEE_UPDATED,
      { traineeUpdated: response.data.Details });
    return response.data.Details;
  },

  delete: async (parent, args, context) => {
    const { id } = args;
    const { dataSources: { traineeApi } } = context;
    const response = await traineeApi.deleteUser(id);
    pubsuObject.publish(
      constant.subscriptions.TRAINEE_DELETED,
      { traineeDeleted: response.data.id },
    );
    return response.data.id;
  },
};
