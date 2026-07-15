import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table
export class Utilisateur extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number;

  @Column
  nom!: string;

  @Column
  prenom!: string;

  @Column
  email!: string; //[unique]

  @Column
  telephone!: string;

  @Column
  mot_de_passe_hash!: string;

  @Column
  role!: string; // parent, citoyen_observateur, agent_autorite, administrateur

  @Column
  matricule!: string; // Spécifique aux agents d'autorité

  @Column
  unite_affectation!: string; // Spécifique aux agents d'autorité

  @Column
  fiabilite_globale!: number; // Score pour les citoyens observateurs

  @Column
  consentement_actif!: boolean; // RGPD / Protection des données

  @Column
  created_at!: Date;

  @Column
  updated_at!: Date;
}
