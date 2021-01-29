export default {
  getMe: async (parent, args, context) => {
    const { dataSources: { userApi } } = context;
    const response = await userApi.getMe();
    console.log(response);
    return response.data.user;
  },
};
