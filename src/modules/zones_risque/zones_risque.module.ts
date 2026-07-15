import { Module } from '@nestjs/common';
import { ZonesRisqueService } from './zones_risque.service';
import { ZonesRisqueController } from './zones_risque.controller';
import { DatabaseModule } from 'src/config/database/database.module';
import { zonesRisqueProviders } from './zones_risque';

@Module({
  imports: [DatabaseModule],
  controllers: [ZonesRisqueController],
  providers: [ZonesRisqueService, ...zonesRisqueProviders],
})
export class ZonesRisqueModule {}
