import { Alerte } from './entities/alerte.entity';
export const alerteProviders = [
  {
    provide: 'ALERTE_REPOSITORY',
    useValue: Alerte,
  },
];
