export class CreateNotificationDto {
  utilisateur_id!: number; // [not null]
  alerte_id!: number;
  titre1!: string;
  contenu!: string;
  lue!: boolean;
  date_envoi!: Date;
}
