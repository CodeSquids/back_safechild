import { Enfant } from './entities/enfant.entity';

export const enfantProviders = [
  {
    provide: 'ENFANT_REPOSITORY',
    useValue: Enfant,
  },
];
