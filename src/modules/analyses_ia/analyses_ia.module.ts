import { Module } from '@nestjs/common';
import { AnalysesIaService } from './analyses_ia.service';
import { AnalysesIaController } from './analyses_ia.controller';
import { DatabaseModule } from 'src/config/database/database.module';
import { analysesIaProviders } from './analyses_ia';
@Module({
  imports: [DatabaseModule],
  controllers: [AnalysesIaController],
  providers: [AnalysesIaService, ...analysesIaProviders],
})
export class AnalysesIaModule {}
