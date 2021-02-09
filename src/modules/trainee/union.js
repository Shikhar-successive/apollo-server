/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
export default {
  updateResponse: {
    __resolveType(obj) {
      if (obj.data) {
        return 'ResponseUser';
      }
      return 'updateError';
    },
  },
};
