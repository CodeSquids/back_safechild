import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table
export class Enfant extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number;

  @Column
  parent_id!: number;

  @Column
  nom!: string;

  @Column
  prenom!: string;

  @Column
  genre!: string;

  @Column
  date_naissance!: Date;

  @Column
  taille_cm!: number;

  @Column
  poids_kg!: number;

  @Column
  photo_recente_url!: string;

  @Column
  signes_distinctifs!: string;

  @Column
  donnees_protegees!: boolean; // Limite l'affichage public

  @Column
  created_at!: Date;

  @Column
  updated_at!: Date;
}
