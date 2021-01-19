import userClass from '../../service/user';
import pubsuObject from '../pubsub';
import constant from '../../lib/constant';

export default {
  create: (parent, args) => {
    const { user } = args;
    const newTrainee = userClass.create(user);
    pubsuObject.publish(constant.subscriptions.TRAINEE_ADDED, { traineeAdded: newTrainee });
    return newTrainee;
  },
  update: (parent, args) => {
    const { id, email, role } = args;
    const updateTrainee = userClass.update(id, email, role);
    pubsuObject.publish(constant.subscriptions.TRAINEE_UPDATED, { traineeUpdated: updateTrainee });
    return updateTrainee;
  },
  delete: (parent, args) => {
    const { id } = args;
    const deleteTrainee = userClass.delete(id);
    pubsuObject.publish(
      constant.subscriptions.TRAINEE_DELETED,
      { traineeDeleted: deleteTrainee.id },
    );
    return deleteTrainee;
  },
};
