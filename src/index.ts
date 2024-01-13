import path from 'path';
import { MikroORM } from '@mikro-orm/core';
import { User } from './entities/User.entity';

async function main() {
  const orm = await MikroORM.init({
    entities: [path.join(__dirname, '**/entities/*.entity.*')],
    dbName: 'test',
    type: 'postgresql', // one of `mongo` | `mysql` | `mariadb` | `postgresql` | `sqlite`
    clientUrl: 'postgresql://test:test@localhost:5432', // defaults to 'mongodb://localhost:27017' for mongodb driver
  });

  // insert
  // const alex = orm.em. User('alex@site.com');
  // orm.em.persist(alex);
  // await orm.em.flush();

  const users = await orm.em.find(User, {});
  console.log(users);

  // users[1].email = 'alex.alekseichuk@gmail.com';
  // await orm.em.flush();
  //
  // orm.em.remove(users[1]);
  // await orm.em.flush();

  await orm.close();
}

main();
