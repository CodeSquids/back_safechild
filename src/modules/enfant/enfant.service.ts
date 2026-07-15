import { Injectable } from '@nestjs/common';
import { CreateEnfantDto } from './dto/create-enfant.dto';
import { UpdateEnfantDto } from './dto/update-enfant.dto';
import { Enfant } from './entities/enfant.entity';
import { Inject } from '@nestjs/common';

@Injectable()
export class EnfantService {
  constructor(
    @Inject('ENFANT_REPOSITORY')
      private enfantRepository: typeof Enfant,
    ) {}

  create(createEnfantDto: CreateEnfantDto) {
    return 'This action adds a new enfant';
  }

  findAll() {
    return this.enfantRepository.findAll<Enfant>();
  }

  findOne(id: number) {
    return `This action returns a #${id} enfant`;
  }

  update(id: number, updateEnfantDto: UpdateEnfantDto) {
    return `This action updates a #${id} enfant`;
  }

  remove(id: number) {
    return `This action removes a #${id} enfant`;
  }
}
