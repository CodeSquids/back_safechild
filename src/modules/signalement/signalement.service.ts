import { Injectable } from '@nestjs/common';
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
  
  create(createSignalementDto: CreateSignalementDto) {
    return 'This action adds a new signalement';
  }

  findAll() {
    return this.signalementRepository.findAll<Signalement>();
  }

  findOne(id: number) {
    return `This action returns a #${id} signalement`;
  }

  update(id: number, updateSignalementDto: UpdateSignalementDto) {
    return `This action updates a #${id} signalement`;
  }

  remove(id: number) {
    return `This action removes a #${id} signalement`;
  }
}
