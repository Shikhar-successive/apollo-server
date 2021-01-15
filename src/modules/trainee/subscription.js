import pubsubObjet from '../pubsub';
import constant from '../../lib/constant';

export default {
  traineeAdded: {
    subscribe: () => pubsubObjet.asyncIterator([constant.subscriptions.TRAINEE_ADDED]),
  },
  traineeUpdated: {
    subscribe: () => pubsubObjet.asyncIterator([constant.subscriptions.TRAINEE_UPDATED]),
  },
  traineeDeleted: {
    subscribe: () => pubsubObjet.asyncIterator([constant.subscriptions.TRAINEE_DELETED]),
  },
};
