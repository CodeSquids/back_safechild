import { Module } from '@nestjs/common';
import { UtilisateursService } from './utilisateurs.service';
import { UtilisateursController } from './utilisateurs.controller';
import { DatabaseModule } from 'src/config/database/database.module';
import { utilisateursProviders } from './utilisateurs';

@Module({
  imports: [DatabaseModule],
  controllers: [UtilisateursController],
  providers: [UtilisateursService, ...utilisateursProviders],
})
export class UtilisateursModule {}
