import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AnalysesIaService } from './analyses_ia.service';
import { CreateAnalysesIaDto } from './dto/create-analyses_ia.dto';
import { UpdateAnalysesIaDto } from './dto/update-analyses_ia.dto';

@Controller('analyses-ia')
export class AnalysesIaController {
  constructor(private readonly analysesIaService: AnalysesIaService) {}

  @Post()
  create(@Body() createAnalysesIaDto: CreateAnalysesIaDto) {
    return this.analysesIaService.create(createAnalysesIaDto);
  }

  @Get()
  findAll() {
    return this.analysesIaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.analysesIaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAnalysesIaDto: UpdateAnalysesIaDto,
  ) {
    return this.analysesIaService.update(+id, updateAnalysesIaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.analysesIaService.remove(+id);
  }
}
