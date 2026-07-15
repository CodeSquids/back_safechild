import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseProviders } from './config/database/database';
import { UtilisateursModule } from './modules/utilisateurs/utilisateurs.module';
import { DatabaseModule } from './config/database/database.module';
import { EnfantModule } from './modules/enfant/enfant.module';

@Module({
  imports: [
    DatabaseModule, 
    UtilisateursModule, 
    EnfantModule
  ],
  controllers: [AppController],
  providers: [AppService, ...databaseProviders],
})
export class AppModule {}
