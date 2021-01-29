export default {
  getAllTrainee: async (parent, args, context) => {
    const { display: { skip, limit } } = args;
    const { dataSources: { traineeApi } } = context;
    const response = await traineeApi.getAllTrainee({ skip, limit });
    return response;
  },
};
