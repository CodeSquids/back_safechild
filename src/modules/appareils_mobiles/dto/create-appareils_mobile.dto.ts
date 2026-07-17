export class CreateAppareilsMobileDto {
  utilisateur_id!: number;
  token_appareil!: string;
  plateforme!: string; // ios, android, web
  derniere_latitude!: number;
  derniere_longitude!: number;
  updated_at!: Date;
}
