import { AutoIncrement, Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table
export class Localisation extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number; 
  
  @Column
  latitude!: number
  
  @Column
  longitude!: number
  
  @Column
  adresse_approximative!: string
  
  @Column
  precision_metres!: number
  
  @Column
  created_at!: Date
}
