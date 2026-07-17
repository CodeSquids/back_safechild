import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AlertesService } from './alertes.service';
import { CreateAlerteDto } from './dto/create-alerte.dto';
import { UpdateAlerteDto } from './dto/update-alerte.dto';

@Controller('alertes')
export class AlertesController {
  constructor(private readonly alertesService: AlertesService) {}

  @Post()
  async create(@Body() createAlerteDto: CreateAlerteDto) {
    return await this.alertesService.create(createAlerteDto);
  }

  @Get()
  async findAll() {
    return await this.alertesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.alertesService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAlerteDto: UpdateAlerteDto,
  ) {
    return await this.alertesService.update(+id, updateAlerteDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.alertesService.remove(+id);
  }
}
