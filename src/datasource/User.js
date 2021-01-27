import { RESTDataSource } from 'apollo-datasource-rest';
import { configuration } from '../config';

export class UserApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${configuration.serviceUrl}/api/user`;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }

  getMe() {
    return this.get('/me');
  }

  async loginUser(payload) {
    // console.log('login--------');
    try {
      const res = await this.post('/login', payload);
      // console.log(res, '============');
      return res.Data;
    } catch (error) {
      if (!(error.extensions)) {
        return 'Something went wrong';
      }
      return error.extensions.response.body.message;
    }
  }
}
