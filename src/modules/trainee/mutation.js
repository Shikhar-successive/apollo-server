import userClass from '../../service/user';

export default {
  create: (parent, args) => {
    const { user } = args;
    return userClass.create(user);
  },
  update: (parent, args) => {
    const { id, email, role } = args;
    return userClass.update(id, email, role);
  },
  delete: (parent, args) => {
    const { id } = args;
    const del = userClass.delete(id);
    console.log(del, 'retrn');
    return del;
  },
};
