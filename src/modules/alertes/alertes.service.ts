import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAlerteDto } from './dto/create-alerte.dto';
import { UpdateAlerteDto } from './dto/update-alerte.dto';
import { Alerte } from './entities/alerte.entity';
import { Inject } from '@nestjs/common';

@Injectable()
export class AlertesService {
  constructor(
    @Inject('ALERTE_REPOSITORY')
    private alerteRepository: typeof Alerte,
  ) {}

  async create(createAlerteDto: CreateAlerteDto): Promise<Alerte> {
    const alerte = this.alerteRepository.build(createAlerteDto as any);
    return await alerte.save();
  }

  async findAll(): Promise<Alerte[]> {
    return this.alerteRepository.findAll<Alerte>();
  }

  async findOne(id: number): Promise<Alerte> {
    const alerte = await this.alerteRepository.findByPk<Alerte>(id);
    if (!alerte) {
      throw new NotFoundException(`Alerte with id ${id} not found`);
    }
    return alerte;
  }

  async update(id: number, updateAlerteDto: UpdateAlerteDto): Promise<Alerte> {
    const alerte = await this.alerteRepository.findByPk<Alerte>(id);
    if (!alerte) {
      throw new NotFoundException(`Alerte with id ${id} not found`);
    }
    await alerte.update(updateAlerteDto);
    return alerte;
  }

  async remove(id: number): Promise<Alerte> {
    const alerte = await this.alerteRepository.findByPk<Alerte>(id);
    if (!alerte) {
      throw new NotFoundException(`Alerte with id ${id} not found`);
    }
    await alerte.destroy();
    return alerte;
  }
}
