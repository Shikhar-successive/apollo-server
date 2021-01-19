import Server from './Server';
import { configuration } from './config';
import schema from './modules';

const server = new Server(configuration);

(() => {
  server.bootstrap().setApollo(schema);
})();
