import { PartialType } from '@nestjs/mapped-types';
import { CreateAnalysesIaDto } from './create-analyses_ia.dto';

export class UpdateAnalysesIaDto extends PartialType(CreateAnalysesIaDto) {}
