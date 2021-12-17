import { DateTime } from 'luxon';
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm';
import Genre from './Genre';
import Book from './Book';
import Serie from './Serie';

export default class Author extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @column()
  public name: string;

  @column()
  public surname: string;

  @column()
  public pseudonyme: string;

  @manyToMany(() => Book)
  public books: ManyToMany<typeof Book>;

  @manyToMany(() => Genre)
  public genres: ManyToMany<typeof Genre>;

  @manyToMany(() => Serie)
  public series: ManyToMany<typeof Serie>;
}
