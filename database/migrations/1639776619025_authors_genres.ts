import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class AuthorsGenres extends BaseSchema {
  protected tableName = 'authors_genres';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true });
      table.timestamp('updated_at', { useTz: true });

      table.integer('author_id').unsigned().references('users.id');
      table.integer('genre_id').unsigned().references('genres.id');
      table.unique(['author_id', 'genre_id']);
    });
  }

  public async down () {
    this.schema.dropTable(this.tableName);
  }
}
