import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class AuthorsSeries extends BaseSchema {
  protected tableName = 'authors_series';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true });
      table.timestamp('updated_at', { useTz: true });

      table.integer('author_id').unsigned().references('users.id');
      table.integer('serie_id').unsigned().references('series.id');
      table.unique(['author_id', 'serie_id']);
    });
  }

  public async down () {
    this.schema.dropTable(this.tableName);
  }
}
