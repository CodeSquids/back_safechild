import { Injectable } from '@nestjs/common';
import { CreateAnalysesIaDto } from './dto/create-analyses_ia.dto';
import { UpdateAnalysesIaDto } from './dto/update-analyses_ia.dto';
import { AnalysesIa } from './entities/analyses_ia.entity';
import { Inject } from '@nestjs/common';

@Injectable()
export class AnalysesIaService {
  constructor(
      @Inject('ANALYSEIA_REPOSITORY')
        private analyseIaRepository: typeof AnalysesIa,
      ) {}
  create(createAnalysesIaDto: CreateAnalysesIaDto) {
    return 'This action adds a new analysesIa';
  }

  findAll() {
    return this.analyseIaRepository.findAll<AnalysesIa>();
  }

  findOne(id: number) {
    return `This action returns a #${id} analysesIa`;
  }

  update(id: number, updateAnalysesIaDto: UpdateAnalysesIaDto) {
    return `This action updates a #${id} analysesIa`;
  }

  remove(id: number) {
    return `This action removes a #${id} analysesIa`;
  }
}
