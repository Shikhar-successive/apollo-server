export default {
  getAll: async (parent, args, context) => {
    const { dataSources: { traineeApi } } = context;
    const response = await traineeApi.getAll();
    return response.data.records[0].data;
  },
};
