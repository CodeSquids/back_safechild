import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import { Utilisateur } from './entities/utilisateur.entity';
import { Inject } from '@nestjs/common';

@Injectable()
export class UtilisateursService {
  constructor(
    @Inject('UTILISATEUR_REPOSITORY')
    private utilisateurRepository: typeof Utilisateur,
  ) {}

  async create(
    createUtilisateurDto: CreateUtilisateurDto,
  ): Promise<Utilisateur> {
    const utilisateur = this.utilisateurRepository.build(
      createUtilisateurDto as any,
    );
    return await utilisateur.save();
  }

  async findAll(): Promise<Utilisateur[]> {
    return this.utilisateurRepository.findAll<Utilisateur>();
  }

  async findOne(id: number): Promise<Utilisateur> {
    const utilisateur = await this.utilisateurRepository.findByPk(id);
    if (!utilisateur) {
      throw new NotFoundException(`Utilisateur with id ${id} not found`);
    }
    return utilisateur;
  }

  async findOneByEmail(email: string): Promise<Utilisateur> {
    const utilisateur = await this.utilisateurRepository.findOne({
      where: { email },
    });
    if (!utilisateur) {
      throw new NotFoundException(`Utilisateur with email ${email} not found`);
    }
    return utilisateur;
  }

  async update(
    id: number,
    updateUtilisateurDto: UpdateUtilisateurDto,
  ): Promise<Utilisateur> {
    const utilisateur = await this.utilisateurRepository.findByPk(id);
    if (!utilisateur) {
      throw new NotFoundException(`Utilisateur with id ${id} not found`);
    }
    await utilisateur.update(updateUtilisateurDto);
    return utilisateur;
  }

  async remove(id: number): Promise<Utilisateur> {
    const utilisateur = await this.utilisateurRepository.findByPk(id);
    if (!utilisateur) {
      throw new NotFoundException(`Utilisateur with id ${id} not found`);
    }
    await utilisateur.destroy();
    return utilisateur;
  }
}
