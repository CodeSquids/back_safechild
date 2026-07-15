import { AutoIncrement, Column, Model, PrimaryKey, Table } from "sequelize-typescript"

@Table
export class AppareilsMobile extends Model{
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id :number 
  
  @Column
  utilisateur_id !:number 
  
  @Column
  token_appareil !:string
  
  @Column
  plateforme !:string // ios, android, web
  
  @Column
  derniere_latitude ! : number
  
  @Column
  derniere_longitude ! : number
  
  @Column
  updated_at ! : Date
}