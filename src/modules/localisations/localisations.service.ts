import { Injectable } from '@nestjs/common';
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

  create(createLocalisationDto: CreateLocalisationDto) {
    return 'This action adds a new localisation';
  }

  findAll() {
    return this.localisationRepository.findAll<Localisation>();
  }

  findOne(id: number) {
    return `This action returns a #${id} localisation`;
  }

  update(id: number, updateLocalisationDto: UpdateLocalisationDto) {
    return `This action updates a #${id} localisation`;
  }

  remove(id: number) {
    return `This action removes a #${id} localisation`;
  }
}
