import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ContactsUrgenceService } from './contacts_urgence.service';
import { CreateContactsUrgenceDto } from './dto/create-contacts_urgence.dto';
import { UpdateContactsUrgenceDto } from './dto/update-contacts_urgence.dto';

@Controller('contacts-urgence')
export class ContactsUrgenceController {
  constructor(
    private readonly contactsUrgenceService: ContactsUrgenceService,
  ) {}

  @Post()
  create(@Body() createContactsUrgenceDto: CreateContactsUrgenceDto) {
    return this.contactsUrgenceService.create(createContactsUrgenceDto);
  }

  @Get()
  findAll() {
    return this.contactsUrgenceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactsUrgenceService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateContactsUrgenceDto: UpdateContactsUrgenceDto,
  ) {
    return this.contactsUrgenceService.update(+id, updateContactsUrgenceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactsUrgenceService.remove(+id);
  }
}
