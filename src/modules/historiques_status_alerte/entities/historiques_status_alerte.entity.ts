import { AutoIncrement, Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table
export class HistoriquesStatusAlerte extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number; //[primary key]
  
  @Column
  alerte_id!: number //[not null]
  
  @Column
  statut!: string
  
  @Column
  modifie_par! : number //[not null] // Ref utilisateurs.id
  
  @Column
  note!: string
  
  @Column
  created_at!: Date
}
