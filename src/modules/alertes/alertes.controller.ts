import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlertesService } from './alertes.service';
import { CreateAlerteDto } from './dto/create-alerte.dto';
import { UpdateAlerteDto } from './dto/update-alerte.dto';

@Controller('alertes')
export class AlertesController {
  constructor(private readonly alertesService: AlertesService) {}

  @Post()
  create(@Body() createAlerteDto: CreateAlerteDto) {
    return this.alertesService.create(createAlerteDto);
  }

  @Get()
  findAll() {
    return this.alertesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alertesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlerteDto: UpdateAlerteDto) {
    return this.alertesService.update(+id, updateAlerteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alertesService.remove(+id);
  }
}
