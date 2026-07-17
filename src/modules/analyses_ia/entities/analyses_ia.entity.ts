import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';

@Table
export class AnalysesIa extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number;

  @Column({ unique: true })
  signalement_id!: number;

  @Column(DataType.DECIMAL)
  score_correspondance!: number;

  @Column(DataType.JSONB)
  traits_identifies!: any; // Permet de stocker les vecteurs ou caractéristiques de manière flexible

  @Column
  date_analyse!: Date;
}
