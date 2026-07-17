export class CreateContactsUrgenceDto {
  enfant_id!: number; //[not null]
  nom_complet!: string;
  relation!: string; // pere, mere, tuteur, autre
  telephone!: string;
  est_principal!: boolean;
  created_at?: Date;
}
