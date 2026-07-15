import { PartialType } from '@nestjs/mapped-types';
import { CreateContactsUrgenceDto } from './create-contacts_urgence.dto';

export class UpdateContactsUrgenceDto extends PartialType(CreateContactsUrgenceDto) {}
