import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnfantService } from './enfant.service';
import { CreateEnfantDto } from './dto/create-enfant.dto';
import { UpdateEnfantDto } from './dto/update-enfant.dto';

@Controller('enfant')
export class EnfantController {
  constructor(private readonly enfantService: EnfantService) {}

  @Post()
  create(@Body() createEnfantDto: CreateEnfantDto) {
    return this.enfantService.create(createEnfantDto);
  }

  @Get()
  findAll() {
    return this.enfantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enfantService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnfantDto: UpdateEnfantDto) {
    return this.enfantService.update(+id, updateEnfantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enfantService.remove(+id);
  }
}
