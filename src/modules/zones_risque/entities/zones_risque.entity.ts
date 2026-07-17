import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table
export class ZonesRisque extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number;

  @Column
  nom_zone!: string;

  @Column
  niveau_risque!: number;

  @Column
  latitude!: number;

  @Column
  longitude!: number;

  @Column
  rayon_couverture_km!: number;

  @Column
  nombre_alertes!: number;

  @Column
  created_at!: Date;
}
