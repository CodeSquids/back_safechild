import { Module } from '@nestjs/common';
import { AlertesService } from './alertes.service';
import { AlertesController } from './alertes.controller';
import { DatabaseModule } from 'src/config/database/database.module';
import { alerteProviders } from './alertes';
@Module({
  controllers: [AlertesController],
  providers: [AlertesService, ...alerteProviders],
})
export class AlertesModule {}
