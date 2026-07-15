import { Signalement } from './entities/signalement.entity';

export const signalementProviders = [
  {
    provide: 'SIGNALEMENT_REPOSITORY',
    useValue: Signalement,
  },
];
