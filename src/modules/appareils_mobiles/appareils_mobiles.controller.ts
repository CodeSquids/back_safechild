import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AppareilsMobilesService } from './appareils_mobiles.service';
import { CreateAppareilsMobileDto } from './dto/create-appareils_mobile.dto';
import { UpdateAppareilsMobileDto } from './dto/update-appareils_mobile.dto';

@Controller('appareils-mobiles')
export class AppareilsMobilesController {
  constructor(private readonly appareilsMobilesService: AppareilsMobilesService) {}

  @Post()
  create(@Body() createAppareilsMobileDto: CreateAppareilsMobileDto) {
    return this.appareilsMobilesService.create(createAppareilsMobileDto);
  }

  @Get()
  findAll() {
    return this.appareilsMobilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appareilsMobilesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppareilsMobileDto: UpdateAppareilsMobileDto) {
    return this.appareilsMobilesService.update(+id, updateAppareilsMobileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appareilsMobilesService.remove(+id);
  }
}
