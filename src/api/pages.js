import { createServer } from 'json-server';

const server = createServer();
const router = server.router('db.json'); 
const middlewares = server.defaults();

server.use(middlewares);
server.use(router);
server.listen(3009, () => {
  console.log('JSON Server is running');
});
