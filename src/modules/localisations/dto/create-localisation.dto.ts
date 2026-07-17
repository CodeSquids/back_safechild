export class CreateLocalisationDto {
  latitude!: number;
  longitude!: number;
  adresse_approximative!: string;
  precision_metres!: number;
  created_at!: Date;
}
