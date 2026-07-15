import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseProviders } from './config/database/database';
import { UtilisateursModule } from './modules/utilisateurs/utilisateurs.module';
import { DatabaseModule } from './config/database/database.module';
import { EnfantModule } from './modules/enfant/enfant.module';
import { ContactsUrgenceModule } from './modules/contacts_urgence/contacts_urgence.module';
import { LocalisationsModule } from './modules/localisations/localisations.module';
import { AlertesModule } from './modules/alertes/alertes.module';
import { HistoriquesStatusAlerteModule } from './modules/historiques_status_alerte/historiques_status_alerte.module';
import { SignalementModule } from './modules/signalement/signalement.module';
import { AnalysesIaModule } from './modules/analyses_ia/analyses_ia.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { AppareilsMobilesModule } from './modules/appareils_mobiles/appareils_mobiles.module';
import { ZonesRisqueModule } from './modules/zones_risque/zones_risque.module';

@Module({
  imports: [
    DatabaseModule, 
    UtilisateursModule, 
    EnfantModule, ContactsUrgenceModule, LocalisationsModule, AlertesModule, HistoriquesStatusAlerteModule, SignalementModule, AnalysesIaModule, NotificationsModule, AppareilsMobilesModule, ZonesRisqueModule
  ],
  controllers: [AppController],
  providers: [AppService, ...databaseProviders],
})
export class AppModule {}
