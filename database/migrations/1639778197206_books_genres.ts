import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class BooksGenres extends BaseSchema {
  protected tableName = 'books_genres';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true });
      table.timestamp('updated_at', { useTz: true });

      table.integer('book_id').unsigned().references('books.id');
      table.integer('genre_id').unsigned().references('genres.id');
      table.unique(['book_id', 'genre_id']);
    });
  }

  public async down () {
    this.schema.dropTable(this.tableName);
  }
}
