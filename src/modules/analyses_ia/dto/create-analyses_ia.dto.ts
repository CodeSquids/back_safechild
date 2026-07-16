export class CreateAnalysesIaDto {
  signalement_id!: number;
  score_correspondance!: number;
  traits_identifies!: any; // Permet de stocker les vecteurs ou caractéristiques de manière flexible
  date_analyse!: Date;
}
