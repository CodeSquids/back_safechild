import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLocalisationDto } from './dto/create-localisation.dto';
import { UpdateLocalisationDto } from './dto/update-localisation.dto';
import { Localisation } from './entities/localisation.entity';
import { Inject } from '@nestjs/common';

@Injectable()
export class LocalisationsService {
  constructor(
      @Inject('LOCALISATION_REPOSITORY')
        private localisationRepository: typeof Localisation,
      ) {}

  async create(CreateLocalisationDto: CreateLocalisationDto): Promise<Localisation> {
      const localisation = this.localisationRepository.build(CreateLocalisationDto as any);
      return await localisation.save();
    }
  
    async findAll(): Promise<Localisation[]> {
      return this.localisationRepository.findAll<Localisation>();
    }
  
    async findOne(id: number): Promise<Localisation> {
      const localisation = await this.localisationRepository.findByPk(id);
      if (!localisation) {
        throw new NotFoundException(`Localisation with id ${id} not found`);
      }
      return localisation;
    }
  
    async update(id: number, UpdateLocalisationDto: UpdateLocalisationDto): Promise<Localisation> {
      const localisation = await this.localisationRepository.findByPk(id);
      if (!localisation) {
        throw new NotFoundException(`Localisation with id ${id} not found`);
      }
      await localisation.update(UpdateLocalisationDto);
      return localisation;
    }
  
    async remove(id: number): Promise<Localisation> {
      const localisation = await this.localisationRepository.findByPk(id);
      if (!localisation) {
        throw new NotFoundException(`Localisation with id ${id} not found`);
      }
      await localisation.destroy();
      return localisation;
    }
}
