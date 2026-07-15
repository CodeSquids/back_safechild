import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UtilisateursService } from '../../modules/utilisateurs/utilisateurs.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CreateUtilisateurDto } from '../../modules/utilisateurs/dto/create-utilisateur.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UtilisateursService,
    private jwtService: JwtService,
  ) {}

  async signUp(email: string, password: string): Promise<any> {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a user with default values for other required fields
    const userData: CreateUtilisateurDto = {
      nom: '',
      prenom: '',
      email,
      telephone: '',
      mot_de_passe_hash: hashedPassword,
      role: 'citoyen_observateur', // default role
      matricule: '',
      unite_affectation: '',
      fiabilite_globale: 0,
      consentement_actif: true,
      created_at: new Date(),
      updated_at: new Date(),
    };

    const user = await this.usersService.create(userData);
    // Remove the password hash from the returned user
    const { mot_de_passe_hash, ...result } = user;
    return {
      access_token: this.jwtService.sign({ email: result.email, sub: result.id }),
      user: result,
    };
  }

  async signIn(email: string, password: string): Promise<any> {
    // Find the user by email
    const user = await this.usersService.findOneByEmail(email);
    // Compare the password
    const passwordValid = await bcrypt.compare(password, user.mot_de_passe_hash);
    if (!passwordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    // Remove the password hash from the returned user
    const { mot_de_passe_hash, ...result } = user;
    return {
      access_token: this.jwtService.sign({ email: result.email, sub: result.id }),
      user: result,
    };
  }
}