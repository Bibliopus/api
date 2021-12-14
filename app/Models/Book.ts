import { DateTime } from 'luxon';
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm';
import Author from './Author';

export default class Book extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @column()
  public title: string;

  @column()
  public synopsis: string;

  @manyToMany(() => Author)
  public authors: ManyToMany<typeof Author>;

  @manyToMany(() => Author)
  public genres: ManyToMany<typeof Author>;
}
