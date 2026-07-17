import { Sequelize } from 'sequelize-typescript';
import { Utilisateur } from '../../modules/utilisateurs/entities/utilisateur.entity';
import { dataPath } from '../path';
import { Alerte } from 'src/modules/alertes/entities/alerte.entity';
import { AnalysesIa } from 'src/modules/analyses_ia/entities/analyses_ia.entity';
import { AppareilsMobile } from 'src/modules/appareils_mobiles/entities/appareils_mobile.entity';
import { ContactsUrgence } from 'src/modules/contacts_urgence/entities/contacts_urgence.entity';
import { Enfant } from 'src/modules/enfant/entities/enfant.entity';
import { HistoriquesStatusAlerte } from 'src/modules/historiques_status_alerte/entities/historiques_status_alerte.entity';
import { Localisation } from 'src/modules/localisations/entities/localisation.entity';
import { Notification } from 'src/modules/notifications/entities/notification.entity';
import { Signalement } from 'src/modules/signalement/entities/signalement.entity';
import { ZonesRisque } from 'src/modules/zones_risque/entities/zones_risque.entity';
export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: dataPath.host,
        port: dataPath.port,
        username: dataPath.username,
        password: dataPath.password,
        database: dataPath.database || 'nest',
      });
      sequelize.addModels([
        Utilisateur,
        Notification,
        Signalement,
        ZonesRisque,
        Alerte,
        AnalysesIa,
        AppareilsMobile,
        ContactsUrgence,
        Enfant,
        HistoriquesStatusAlerte,
        Localisation,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
