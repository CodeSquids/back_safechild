import { Injectable ,NotFoundException } from '@nestjs/common';
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

  async create(createZonesRisqueDto: CreateZonesRisqueDto): Promise<ZonesRisque> {
    const zonesRisque = this.zonesRisqueRepository.build(createZonesRisqueDto as any);
    return await zonesRisque.save();
  }

  async findAll(): Promise<ZonesRisque[]> {
    return this.zonesRisqueRepository.findAll<ZonesRisque>();
  }

  async findOne(id: number): Promise<ZonesRisque> {
    const zonesRisque = await this.zonesRisqueRepository.findByPk(id);
    if (!zonesRisque) {
      throw new NotFoundException(`ZonesRisque with id ${id} not found`);
    }
    return zonesRisque;
  }

  async update(id: number, updateZonesRisqueDto: UpdateZonesRisqueDto): Promise<ZonesRisque> {
    const zonesRisque = await this.zonesRisqueRepository.findByPk(id);
    if (!zonesRisque) {
      throw new NotFoundException(`ZonesRisque with id ${id} not found`);
    }
    await zonesRisque.update(updateZonesRisqueDto);
    return zonesRisque;
  }

  async remove(id: number): Promise<ZonesRisque> {
    const zonesRisque = await this.zonesRisqueRepository.findByPk(id);
    if (!zonesRisque) {
      throw new NotFoundException(`ZonesRisque with id ${id} not found`);
    }
    await zonesRisque.destroy();
    return zonesRisque;
  }
}
