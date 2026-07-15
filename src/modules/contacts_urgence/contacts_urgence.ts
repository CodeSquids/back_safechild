import { ContactsUrgence } from './entities/contacts_urgence.entity';

export const contactsUrgenceProviders = [
  {
    provide: 'CONTACTSURGENCE_REPOSITORY',
    useValue: ContactsUrgence,
  },
];
