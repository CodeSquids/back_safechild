import { Module } from '@nestjs/common';
import { ContactsUrgenceService } from './contacts_urgence.service';
import { ContactsUrgenceController } from './contacts_urgence.controller';
import { DatabaseModule } from 'src/config/database/database.module';
import { contactsUrgenceProviders } from './contacts_urgence';

@Module({
  imports: [DatabaseModule],
  controllers: [ContactsUrgenceController],
  providers: [ContactsUrgenceService, ...contactsUrgenceProviders],
})
export class ContactsUrgenceModule {}
