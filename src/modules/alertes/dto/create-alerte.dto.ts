export class CreateAlerteDto {
  enfant_id!: number;
  declencheur_id!: number;
  agent_en_charge_id!: number;
  localisation_depart_id!: number;
  titre!: string;
  circonstances!: string;
  type!: string;
  statut!: string;
  niveau_urgence!: string;
  date_declenchement!: Date;
  date_resolution?: Date;
}
