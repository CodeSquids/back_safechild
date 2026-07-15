import { AutoIncrement, Column, Model, PrimaryKey, Table } from "sequelize-typescript"

@Table
export class Notification extends Model{
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number;// [primary key]
  
  @Column
  utilisateur_id !:number// [not null]
  
  @Column
  alerte_id !:number
  
  @Column
  titre1!: string
  
  @Column
  contenu!: string
  
  @Column
  lue!: boolean
  
  @Column
  date_envoi!: Date
}
