import { DateTime } from 'luxon';
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm';
import Book from './Book';
import Author from './Author';

export default class Genre extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @column()
  public name: string;

  @column()
  public description: string;

  @manyToMany(() => Book)
  public books: ManyToMany<typeof Book>;

  @manyToMany(() => Author)
  public authors: ManyToMany<typeof Author>;
}
