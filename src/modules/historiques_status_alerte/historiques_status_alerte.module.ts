import { Module } from '@nestjs/common';
import { HistoriquesStatusAlerteService } from './historiques_status_alerte.service';
import { HistoriquesStatusAlerteController } from './historiques_status_alerte.controller';
import { DatabaseModule } from 'src/config/database/database.module';
import { historiquesStatusAlerteProviders } from './historiques_status_alerte';

@Module({
  imports: [DatabaseModule],
  controllers: [HistoriquesStatusAlerteController],
  providers: [HistoriquesStatusAlerteService, ...historiquesStatusAlerteProviders],
})
export class HistoriquesStatusAlerteModule {}
