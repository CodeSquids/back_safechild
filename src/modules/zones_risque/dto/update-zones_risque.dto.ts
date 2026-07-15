import { PartialType } from '@nestjs/mapped-types';
import { CreateZonesRisqueDto } from './create-zones_risque.dto';

export class UpdateZonesRisqueDto extends PartialType(CreateZonesRisqueDto) {}
