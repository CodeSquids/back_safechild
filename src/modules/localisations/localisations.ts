import { Localisation } from './entities/localisation.entity';

export const localisationProviders = [
  {
    provide: 'LOCALISATION_REPOSITORY',
    useValue: Localisation,
  },
];
