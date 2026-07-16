import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSignalementDto } from './dto/create-signalement.dto';
import { UpdateSignalementDto } from './dto/update-signalement.dto';
import { Signalement } from './entities/signalement.entity';
import { Inject } from '@nestjs/common';

@Injectable()
export class SignalementService {
  constructor(
      @Inject('SIGNALEMENT_REPOSITORY')
        private signalementRepository: typeof Signalement,
      ) {}
  
  async create(CreateSignalementDto: CreateSignalementDto): Promise<Signalement> {
    const signalement = this.signalementRepository.build(CreateSignalementDto as any);
    return await signalement.save();
  }

  async findAll(): Promise<Signalement[]> {
    return this.signalementRepository.findAll<Signalement>();
  }

  async findOne(id: number): Promise<Signalement> {
    const signalement = await this.signalementRepository.findByPk(id);
    if (!signalement) {
      throw new NotFoundException(`Signalement with id ${id} not found`);
    }
    return signalement;
  }

  async update(id: number, UpdateSignalementDto: UpdateSignalementDto): Promise<Signalement> {
    const signalement = await this.signalementRepository.findByPk(id);
    if (!signalement) {
      throw new NotFoundException(`Signalement with id ${id} not found`);
    }
    await signalement.update(UpdateSignalementDto);
    return signalement;
  }

  async remove(id: number): Promise<Signalement> {
    const signalement = await this.signalementRepository.findByPk(id);
    if (!signalement) {
      throw new NotFoundException(`Signalement with id ${id} not found`);
    }
    await signalement.destroy();
    return signalement;
  }
}
