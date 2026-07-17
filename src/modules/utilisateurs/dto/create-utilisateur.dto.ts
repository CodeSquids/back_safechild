export class CreateUtilisateurDto {
  nom!: string;
  prenom!: string;
  email!: string;
  telephone!: string;
  mot_de_passe_hash!: string;
  role!: string;
  matricule?: string;
  unite_affectation?: string;
  fiabilite_globale?: number;
  consentement_actif?: boolean;
  created_at?: Date;
  updated_at?: Date;
}
