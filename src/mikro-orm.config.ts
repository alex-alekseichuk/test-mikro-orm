import path from 'path';

export default {
  entities: [path.join(__dirname, '**/entities/*.entity.*')],
  dbName: 'test',
  type: 'postgresql', // one of `mongo` | `mysql` | `mariadb` | `postgresql` | `sqlite`
  clientUrl: 'postgresql://test:test@localhost:5432', // defaults to 'mongodb://localhost:27017' for mongodb driver
};
