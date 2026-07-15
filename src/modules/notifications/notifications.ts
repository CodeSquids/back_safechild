import { Notification } from './entities/notification.entity';

export const notificationProviders = [
  {
    provide: 'NOTIFICATION_REPOSITORY',
    useValue: Notification,
  },
];
