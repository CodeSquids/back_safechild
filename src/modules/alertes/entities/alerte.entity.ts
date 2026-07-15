import { AutoIncrement, Column, PrimaryKey, Model, Table } from "sequelize-typescript"

@Table
export class Alerte extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number
  
  @Column
  enfant_id! : number
  
  @Column
  declencheur_id! : number // ID du parent
  
  @Column
  agent_en_charge_id! : number // ID de l'autorité qui gère le dossier
  
  @Column
  localisation_depart_id! : number // Le dernier lieu vu
  
  @Column
  titre! : string
  
  @Column
  circonstances! : string
  
  @Column
  type! : string // enlevement, disparition, fugue
  
  @Column
  statut! : string // active, en_verification, resolue, fausse_alerte
  
  @Column
  niveau_urgence! : string // critique, elevee, standard
  
  @Column
  date_declenchement ! : Date
  
  @Column
  date_resolution ! : Date
  
  @Column
  created_at ! : Date
  
  @Column
  updated_at ! : Date
}
  