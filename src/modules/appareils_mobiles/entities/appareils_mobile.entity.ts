import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';

@Table
export class AppareilsMobile extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number;

  @Column
  utilisateur_id!: number;

  @Column
  token_appareil!: string;

  @Column
  plateforme!: string; // ios, android, web

  @Column(DataType.DECIMAL)
  derniere_latitude!: number;

  @Column(DataType.DECIMAL)
  derniere_longitude!: number;

  @Column
  updated_at!: Date;
}
