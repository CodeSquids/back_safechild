import { ZonesRisque } from './entities/zones_risque.entity';

export const zonesRisqueProviders = [
  {
    provide: 'ZONESRISQUE_REPOSITORY',
    useValue: ZonesRisque,
  },
];
