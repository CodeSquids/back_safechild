import { Injectable } from '@nestjs/common';
import { CreateContactsUrgenceDto } from './dto/create-contacts_urgence.dto';
import { UpdateContactsUrgenceDto } from './dto/update-contacts_urgence.dto';
import { ContactsUrgence } from './entities/contacts_urgence.entity';
import { Inject } from '@nestjs/common';

@Injectable()
export class ContactsUrgenceService {
  constructor(
      @Inject('CONTACTSURGENCE_REPOSITORY')
        private contactsUrgenceRepository: typeof ContactsUrgence,
      ) {}

  create(createContactsUrgenceDto: CreateContactsUrgenceDto) {
    return 'This action adds a new contactsUrgence';
  }

  findAll() {
    return this.contactsUrgenceRepository.findAll<ContactsUrgence>();
  }

  findOne(id: number) {
    return `This action returns a #${id} contactsUrgence`;
  }

  update(id: number, updateContactsUrgenceDto: UpdateContactsUrgenceDto) {
    return `This action updates a #${id} contactsUrgence`;
  }

  remove(id: number) {
    return `This action removes a #${id} contactsUrgence`;
  }
}
