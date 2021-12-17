import { DateTime } from 'luxon';
import {
  BaseModel,
  column,
  HasMany,
  hasMany,
  ManyToMany,
  manyToMany,
} from '@ioc:Adonis/Lucid/Orm';
import Author from './Author';
import Edition from './Edition';
import Serie from './Serie';
import Genre from './Genre';

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

  @manyToMany(() => Genre)
  public genres: ManyToMany<typeof Genre>;

  @hasMany(() => Edition)
  public editions: HasMany<typeof Edition>;

  @manyToMany(() => Serie)
  public series: ManyToMany<typeof Serie>;
}
