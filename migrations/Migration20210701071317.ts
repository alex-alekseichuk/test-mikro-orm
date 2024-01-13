import { Migration } from '@mikro-orm/migrations';

export class Migration20210701071317 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user" ("id" serial primary key, "email" varchar(255) not null);');
  }

  async down(): Promise<void> {
    this.addSql('drop table "user";');
  }

}
