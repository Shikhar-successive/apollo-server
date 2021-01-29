export default {
  loginUser: async (parent, args, context) => {
    const { payload: { email, password } } = args;
    console.log(email, password);
    const { dataSources: { userApi } } = context;
    const response = await userApi.loginUser({ email, password });
    return response;
  },
};
