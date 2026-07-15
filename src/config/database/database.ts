import { Sequelize } from 'sequelize-typescript';
import { Utilisateur } from '../../modules/utilisateurs/entities/utilisateur.entity';
import { dataPath } from '../path';

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
      sequelize.addModels([Utilisateur]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
