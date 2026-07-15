import { Injectable } from '@nestjs/common';
import { CreateZonesRisqueDto } from './dto/create-zones_risque.dto';
import { UpdateZonesRisqueDto } from './dto/update-zones_risque.dto';
import { ZonesRisque } from './entities/zones_risque.entity';
import { Inject } from '@nestjs/common';

@Injectable()
export class ZonesRisqueService {
  constructor(
      @Inject('ZONESRISQUE_REPOSITORY')
        private zonesRisqueRepository: typeof ZonesRisque,
      ) {}

  create(createZonesRisqueDto: CreateZonesRisqueDto) {
    return 'This action adds a new zonesRisque';
  }

  findAll() {
    return this.zonesRisqueRepository.findAll<ZonesRisque>();
  }

  findOne(id: number) {
    return `This action returns a #${id} zonesRisque`;
  }

  update(id: number, updateZonesRisqueDto: UpdateZonesRisqueDto) {
    return `This action updates a #${id} zonesRisque`;
  }

  remove(id: number) {
    return `This action removes a #${id} zonesRisque`;
  }
}
