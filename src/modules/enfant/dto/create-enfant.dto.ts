export class CreateEnfantDto {
  parent_id!: number;
  nom!: string;
  prenom!: string;
  genre!: string;
  date_naissance!: Date;
  taille_cm!: number;
  poids_kg!: number;
  photo_recente_url!: string;
  signes_distinctifs!: string;
  donnees_protegees!: boolean; // Limite l'affichage public
  created_at?: Date;
  updated_at?: Date;
}
