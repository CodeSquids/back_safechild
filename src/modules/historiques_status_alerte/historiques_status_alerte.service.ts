import { Injectable } from '@nestjs/common';
import { CreateHistoriquesStatusAlerteDto } from './dto/create-historiques_status_alerte.dto';
import { UpdateHistoriquesStatusAlerteDto } from './dto/update-historiques_status_alerte.dto';
import { HistoriquesStatusAlerte } from './entities/historiques_status_alerte.entity';
import { Inject } from '@nestjs/common';

@Injectable()
export class HistoriquesStatusAlerteService {
  constructor(
      @Inject('HISTORIQUESTATUSALERTE_REPOSITORY')
        private historiquesStatusAlerteRepository: typeof HistoriquesStatusAlerte,
      ) {}

  create(createHistoriquesStatusAlerteDto: CreateHistoriquesStatusAlerteDto) {
    return 'This action adds a new historiquesStatusAlerte';
  }

  findAll() {
    return this.historiquesStatusAlerteRepository.findAll<HistoriquesStatusAlerte>();
  }

  findOne(id: number) {
    return `This action returns a #${id} historiquesStatusAlerte`;
  }

  update(id: number, updateHistoriquesStatusAlerteDto: UpdateHistoriquesStatusAlerteDto) {
    return `This action updates a #${id} historiquesStatusAlerte`;
  }

  remove(id: number) {
    return `This action removes a #${id} historiquesStatusAlerte`;
  }
}
