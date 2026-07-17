import { PartialType } from '@nestjs/mapped-types';
import { CreateAppareilsMobileDto } from './create-appareils_mobile.dto';

export class UpdateAppareilsMobileDto extends PartialType(
  CreateAppareilsMobileDto,
) {}
