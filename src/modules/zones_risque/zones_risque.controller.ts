import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ZonesRisqueService } from './zones_risque.service';
import { CreateZonesRisqueDto } from './dto/create-zones_risque.dto';
import { UpdateZonesRisqueDto } from './dto/update-zones_risque.dto';

@Controller('zones-risque')
export class ZonesRisqueController {
  constructor(private readonly zonesRisqueService: ZonesRisqueService) {}

  @Post()
  create(@Body() createZonesRisqueDto: CreateZonesRisqueDto) {
    return this.zonesRisqueService.create(createZonesRisqueDto);
  }

  @Get()
  findAll() {
    return this.zonesRisqueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.zonesRisqueService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateZonesRisqueDto: UpdateZonesRisqueDto,
  ) {
    return this.zonesRisqueService.update(+id, updateZonesRisqueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.zonesRisqueService.remove(+id);
  }
}
