import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HistoriquesStatusAlerteService } from './historiques_status_alerte.service';
import { CreateHistoriquesStatusAlerteDto } from './dto/create-historiques_status_alerte.dto';
import { UpdateHistoriquesStatusAlerteDto } from './dto/update-historiques_status_alerte.dto';

@Controller('historiques-status-alerte')
export class HistoriquesStatusAlerteController {
  constructor(private readonly historiquesStatusAlerteService: HistoriquesStatusAlerteService) {}

  @Post()
  create(@Body() createHistoriquesStatusAlerteDto: CreateHistoriquesStatusAlerteDto) {
    return this.historiquesStatusAlerteService.create(createHistoriquesStatusAlerteDto);
  }

  @Get()
  findAll() {
    return this.historiquesStatusAlerteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.historiquesStatusAlerteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHistoriquesStatusAlerteDto: UpdateHistoriquesStatusAlerteDto) {
    return this.historiquesStatusAlerteService.update(+id, updateHistoriquesStatusAlerteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historiquesStatusAlerteService.remove(+id);
  }
}
