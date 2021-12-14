import { DateTime } from 'luxon';
import { BaseModel, column, HasManyThrough, hasManyThrough } from '@ioc:Adonis/Lucid/Orm';
import Genre from './Genre';
import Book from './Book';

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

  @hasManyThrough([
    () => Genre,
    () => Book,
  ])
  public genres: HasManyThrough<typeof Genre>;
}
