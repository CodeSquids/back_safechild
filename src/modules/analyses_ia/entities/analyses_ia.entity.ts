import { AutoIncrement, Column, Model, PrimaryKey, Table } from "sequelize-typescript"

@Table
export class AnalysesIa extends Model{
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id : number 
  
  @Column
  signalement_id ! : number 
  
  @Column
  score_correspondance! : number
  
  @Column
  traits_identifies! : object // Permet de stocker les vecteurs ou caractéristiques de manière flexible
  
  @Column
  date_analyse ! : Date
}
