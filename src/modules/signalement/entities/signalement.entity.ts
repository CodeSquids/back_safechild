import { AutoIncrement, Column, Model, PrimaryKey, Table } from "sequelize-typescript"

@Table
export class Signalement extends Model{
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number;

  @Column
  alerte_id! : number // [not null]

  @Column
  citoyen_id !: number //[not null]

  @Column
  localisation_id !: number //[not null]

  @Column
  photo_observee_url !: string

  @Column
  commentaire !:string

  @Column
  statut_verification !: string // en_attente, valide_pertinent, rejete

  @Column
  fiabilite_estimee !: number

  @Column
  date_heure_observation !:Date

  @Column
  created_at !:Date
}
