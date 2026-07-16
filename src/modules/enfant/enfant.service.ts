import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEnfantDto } from './dto/create-enfant.dto';
import { UpdateEnfantDto } from './dto/update-enfant.dto';
import { Enfant } from './entities/enfant.entity';
import { Inject } from '@nestjs/common';

@Injectable()
export class EnfantService {
  constructor(
    @Inject('ENFANT_REPOSITORY')
    private enfantRepository: typeof Enfant,
  ) { }

  async create(CreateEnfantDto: CreateEnfantDto): Promise<Enfant> {
    const enfant = this.enfantRepository.build(CreateEnfantDto as any);
    return await enfant.save();
  }

  async findAll(): Promise<Enfant[]> {
    return this.enfantRepository.findAll<Enfant>();
  }

  async findOne(id: number): Promise<Enfant> {
    const enfant = await this.enfantRepository.findByPk(id);
    if (!enfant) {
      throw new NotFoundException(`Enfant with id ${id} not found`);
    }
    return enfant;
  }

  async update(id: number, UpdateEnfantDto: UpdateEnfantDto): Promise<Enfant> {
    const enfant = await this.enfantRepository.findByPk(id);
    if (!enfant) {
      throw new NotFoundException(`Enfant with id ${id} not found`);
    }
    await enfant.update(UpdateEnfantDto);
    return enfant;
  }

  async remove(id: number): Promise<Enfant> {
    const enfant = await this.enfantRepository.findByPk(id);
    if (!enfant) {
      throw new NotFoundException(`Enfant with id ${id} not found`);
    }
    await enfant.destroy();
    return enfant;
  }
}
