export class CreateZonesRisqueDto {
  nom_zone!: string
  niveau_risque!: number
  latitude!: number
  longitude!: number
  rayon_couverture_km!: number
  nombre_alertes!: number
  created_at!: Date

}
