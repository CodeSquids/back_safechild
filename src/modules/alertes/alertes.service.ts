import { Injectable } from '@nestjs/common';
import { CreateAlerteDto } from './dto/create-alerte.dto';
import { UpdateAlerteDto } from './dto/update-alerte.dto';
import { Alerte } from './entities/alerte.entity';
import { Inject } from '@nestjs/common';

@Injectable()
export class AlertesService {
  constructor(
      @Inject('ENFANT_REPOSITORY')
        private alerteRepository: typeof Alerte,
      ) {}

  create(createAlerteDto: CreateAlerteDto) {
    return 'This action adds a new alerte';
  }

  findAll() {
    return this.alerteRepository.findAll<Alerte>();
  }

  findOne(id: number) {
    return `This action returns a #${id} alerte`;
  }

  update(id: number, updateAlerteDto: UpdateAlerteDto) {
    return `This action updates a #${id} alerte`;
  }

  remove(id: number) {
    return `This action removes a #${id} alerte`;
  }
}
