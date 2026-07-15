import { HistoriquesStatusAlerte } from './entities/historiques_status_alerte.entity';

export const historiquesStatusAlerteProviders = [
  {
    provide: 'HISTORIQUESTATUSALERTE_REPOSITORY',
    useValue: HistoriquesStatusAlerte,
  },
];
