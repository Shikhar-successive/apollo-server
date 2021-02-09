/* eslint-disable no-new-object */
import { RESTDataSource } from 'apollo-datasource-rest';
import { configuration } from '../config';

export class TraineeApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${configuration.serviceUrl}/api/trainee`;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }

  async getAllTrainee({ skip, limit }) {
    const response = await this.get('/getall', { skip, limit });
    return response;
  }

  async create(data) {
    const newTrainee = new Object({ ...data });
    try {
      const response = await this.post('/create', newTrainee);
      return response;
    } catch (error) {
      return error.extensions.response.body;
    }
  }

  async update(data) {
    const updateTrainee = new Object({ ...data });
    try {
      const response = await this.put('/update', updateTrainee);
      return response;
    } catch (error) {
      // console.log(error.extensions.response.body);
      return error.extensions.response.body;
    }
  }

  async deleteUser(id) {
    const path = '/delete/'.concat(id);
    try {
      const response = await this.delete(path);
      return response;
    } catch (error) {
      return error.extensions.response.body;
    }
  }
}
