import { AnalysesIa } from './entities/analyses_ia.entity';

export const analysesIaProviders = [
  {
    provide: 'ANALYSEIA_REPOSITORY',
    useValue: AnalysesIa,
  },
];
