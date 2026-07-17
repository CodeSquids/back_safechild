import { PartialType } from '@nestjs/mapped-types';
import { CreateHistoriquesStatusAlerteDto } from './create-historiques_status_alerte.dto';

export class UpdateHistoriquesStatusAlerteDto extends PartialType(
  CreateHistoriquesStatusAlerteDto,
) {}
