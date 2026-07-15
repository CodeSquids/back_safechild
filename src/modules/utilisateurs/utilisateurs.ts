import { Utilisateur } from './entities/utilisateur.entity';

export const utilisateursProviders = [
  {
    provide: 'UTILISATEUR_REPOSITORY',
    useValue: Utilisateur,
  },
];
