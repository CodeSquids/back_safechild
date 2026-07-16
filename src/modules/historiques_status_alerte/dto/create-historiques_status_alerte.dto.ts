export class CreateHistoriquesStatusAlerteDto {
  alerte_id!: number //[not null]
  statut!: string
  modifie_par! : number //[not null] // Ref utilisateurs.id
  note!: string
  created_at!: Date
}
