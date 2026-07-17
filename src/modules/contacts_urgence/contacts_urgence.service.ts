import { Injectable, NotFoundException } from '@nestjs/common';
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

  async create(
    createContactsUrgenceDto: CreateContactsUrgenceDto,
  ): Promise<ContactsUrgence> {
    const ContactsUrgence = this.contactsUrgenceRepository.build(
      createContactsUrgenceDto as any,
    );
    return await ContactsUrgence.save();
  }

  async findAll(): Promise<ContactsUrgence[]> {
    return this.contactsUrgenceRepository.findAll<ContactsUrgence>();
  }

  async findOne(id: number): Promise<ContactsUrgence> {
    const ContactsUrgence = await this.contactsUrgenceRepository.findByPk(id);
    if (!ContactsUrgence) {
      throw new NotFoundException(`ContactsUrgence with id ${id} not found`);
    }
    return ContactsUrgence;
  }

  async update(
    id: number,
    updateContactsUrgenceDto: UpdateContactsUrgenceDto,
  ): Promise<ContactsUrgence> {
    const ContactsUrgence = await this.contactsUrgenceRepository.findByPk(id);
    if (!ContactsUrgence) {
      throw new NotFoundException(`ContactsUrgence with id ${id} not found`);
    }
    await ContactsUrgence.update(updateContactsUrgenceDto);
    return ContactsUrgence;
  }

  async remove(id: number): Promise<ContactsUrgence> {
    const ContactsUrgence = await this.contactsUrgenceRepository.findByPk(id);
    if (!ContactsUrgence) {
      throw new NotFoundException(`ContactsUrgence with id ${id} not found`);
    }
    await ContactsUrgence.destroy();
    return ContactsUrgence;
  }
}
