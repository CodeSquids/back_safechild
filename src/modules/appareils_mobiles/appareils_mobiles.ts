import { AppareilsMobile } from './entities/appareils_mobile.entity';

export const appareilMobileProviders = [
  {
    provide: 'APPAREILMOBILE_REPOSITORY',
    useValue: AppareilsMobile,
  },
];
