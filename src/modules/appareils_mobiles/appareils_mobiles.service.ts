import { Injectable, NotFoundException } from '@nestjs/common';
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

  async create(createAppareilsMobileDto: CreateAppareilsMobileDto): Promise<AppareilsMobile>  {
    const AppareilsMobile = this.appareilMobileRepository.build(createAppareilsMobileDto as any);
    return await AppareilsMobile.save();
  }

  async findAll(): Promise<AppareilsMobile[]>  {
    return this.appareilMobileRepository.findAll<AppareilsMobile>();
  }

  async findOne(id: number): Promise<AppareilsMobile> {
    const AppareilsMobile = await this.appareilMobileRepository.findByPk(id);
    if (!AppareilsMobile) {
      throw new NotFoundException(`AppareilsMobile with id ${id} not found`);
    }
    return AppareilsMobile;
  }

  async update(id: number, updateAppareilsMobileDto: UpdateAppareilsMobileDto): Promise<AppareilsMobile>  {
    const AppareilsMobile = await this.appareilMobileRepository.findByPk(id);
    if (!AppareilsMobile) {
      throw new NotFoundException(`AppareilsMobile with id ${id} not found`);
    }
    await AppareilsMobile.update(updateAppareilsMobileDto);
    return AppareilsMobile;
  }

  async remove(id: number): Promise<AppareilsMobile> {
const AppareilsMobile = await this.appareilMobileRepository.findByPk(id);
    if (!AppareilsMobile) {
      throw new NotFoundException(`AppareilsMobile with id ${id} not found`);
    }
    await AppareilsMobile.destroy();
    return AppareilsMobile;  }
}
