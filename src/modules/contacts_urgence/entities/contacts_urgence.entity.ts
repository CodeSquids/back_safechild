import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table
export class ContactsUrgence extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number; //[primary key]

  @Column
  enfant_id!: number; //[not null]

  @Column
  nom_complet!: string;

  @Column
  relation!: string; // pere, mere, tuteur, autre

  @Column
  telephone!: string;

  @Column
  est_principal!: boolean;

  @Column
  created_at!: Date;
}
