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

  async getAll() {
    return this.get('/getall');
  }

  create(data) {
    const newTrainee = new Object({ ...data });
    return this.post('/create', newTrainee);
  }

  update(originalId, name, role, email, password, updatedBy) {
    const data = {
      originalId, name, role, email, password, updatedBy,
    };
    const updateTrainee = new Object({ ...data });
    return this.put('/update', updateTrainee);
  }

  deleteUser(id) {
    const path = '/delete/'.concat(id);
    return this.delete(path);
  }
}
