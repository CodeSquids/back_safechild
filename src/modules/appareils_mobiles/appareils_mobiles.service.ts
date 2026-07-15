import { Injectable } from '@nestjs/common';
import { CreateAppareilsMobileDto } from './dto/create-appareils_mobile.dto';
import { UpdateAppareilsMobileDto } from './dto/update-appareils_mobile.dto';
import { AppareilsMobile } from './entities/appareils_mobile.entity';
import { Inject } from '@nestjs/common';

@Injectable()
export class AppareilsMobilesService {
  constructor(
      @Inject('APPAREILMOBILE_REPOSITORY')
        private appareilMobileRepository: typeof AppareilsMobile,
      ) {}

  create(createAppareilsMobileDto: CreateAppareilsMobileDto) {
    return 'This action adds a new appareilsMobile';
  }

  findAll() {
    return this.appareilMobileRepository.findAll<AppareilsMobile>();
  }

  findOne(id: number) {
    return `This action returns a #${id} appareilsMobile`;
  }

  update(id: number, updateAppareilsMobileDto: UpdateAppareilsMobileDto) {
    return `This action updates a #${id} appareilsMobile`;
  }

  remove(id: number) {
    return `This action removes a #${id} appareilsMobile`;
  }
}
