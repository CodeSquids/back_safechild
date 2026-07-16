export class CreateSignalementDto {
  alerte_id! : number // [not null]
  citoyen_id !: number //[not null]
  localisation_id !: number //[not null]
  photo_observee_url !: string
  commentaire !:string
  statut_verification !: string // en_attente, valide_pertinent, rejete
  fiabilite_estimee !: number
  date_heure_observation !:Date
  created_at !:Date
}
