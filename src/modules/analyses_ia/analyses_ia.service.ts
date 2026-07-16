import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnalysesIaDto } from './dto/create-analyses_ia.dto';
import { UpdateAnalysesIaDto } from './dto/update-analyses_ia.dto';
import { AnalysesIa } from './entities/analyses_ia.entity';
import { Inject } from '@nestjs/common';

@Injectable()
export class AnalysesIaService {
  constructor(
    @Inject('ANALYSEIA_REPOSITORY')
    private analyseIaRepository: typeof AnalysesIa,
  ) { }
  
  async create(createAnalysesIaDto: CreateAnalysesIaDto): Promise<AnalysesIa> {
    const analyseIa = this.analyseIaRepository.build(createAnalysesIaDto as any)
    return await analyseIa.save();
  }

  async findAll(): Promise<AnalysesIa[]> {
    return this.analyseIaRepository.findAll<AnalysesIa>();
  }

  async findOne(id: number): Promise<AnalysesIa> {
    const analyseIa = await this.analyseIaRepository.findByPk(id);
    if (!analyseIa) {
      throw new NotFoundException(`analyseIa with id ${id} not found`);
    }
    return analyseIa;
  }

  async update(id: number, updateAnalysesIaDto: UpdateAnalysesIaDto): Promise<AnalysesIa> {
    const analyseIa = await this.analyseIaRepository.findByPk(id);
    if (!analyseIa) {
      throw new NotFoundException(`Analyse IA with id ${id} not found`);
    }
    await analyseIa.update(updateAnalysesIaDto);
    return analyseIa;
  }

  async remove(id: number): Promise<AnalysesIa> {
    const analyseIa = await this.analyseIaRepository.findByPk(id);
    if (!analyseIa) {
      throw new NotFoundException(`analyseIa with id ${id} not found`);
    }
    await analyseIa.destroy();
    return analyseIa;
  }
}
