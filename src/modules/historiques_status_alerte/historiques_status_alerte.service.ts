import { Injectable, NotFoundException } from '@nestjs/common';
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

  async create(
    createHistoriquesStatusAlerteDto: CreateHistoriquesStatusAlerteDto,
  ): Promise<HistoriquesStatusAlerte> {
    const historiquesStatusAlerte =
      this.historiquesStatusAlerteRepository.build(
        createHistoriquesStatusAlerteDto as any,
      );
    return await historiquesStatusAlerte.save();
  }

  async findAll(): Promise<HistoriquesStatusAlerte[]> {
    return this.historiquesStatusAlerteRepository.findAll<HistoriquesStatusAlerte>();
  }

  async findOne(id: number): Promise<HistoriquesStatusAlerte> {
    const historiquesStatusAlerte =
      await this.historiquesStatusAlerteRepository.findByPk(id);
    if (!historiquesStatusAlerte) {
      throw new NotFoundException(
        `HistoriquesStatusAlerte with id ${id} not found`,
      );
    }
    return historiquesStatusAlerte;
  }

  async update(
    id: number,
    updateHistoriquesStatusAlerteDto: UpdateHistoriquesStatusAlerteDto,
  ): Promise<HistoriquesStatusAlerte> {
    const historiquesStatusAlerte =
      await this.historiquesStatusAlerteRepository.findByPk(id);
    if (!historiquesStatusAlerte) {
      throw new NotFoundException(
        `HistoriquesStatusAlerte with id ${id} not found`,
      );
    }
    await historiquesStatusAlerte.update(updateHistoriquesStatusAlerteDto);
    return historiquesStatusAlerte;
  }

  async remove(id: number): Promise<HistoriquesStatusAlerte> {
    const historiquesStatusAlerte =
      await this.historiquesStatusAlerteRepository.findByPk(id);
    if (!historiquesStatusAlerte) {
      throw new NotFoundException(
        `HistoriquesStatusAlerte with id ${id} not found`,
      );
    }
    await historiquesStatusAlerte.destroy();
    return historiquesStatusAlerte;
  }
}
