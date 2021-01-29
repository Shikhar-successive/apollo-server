export default {
  getMe: async (parent, args, context) => {
    const { dataSources: { userApi } } = context;
    const response = await userApi.getMe();
    return response.data.user;
  },
};
