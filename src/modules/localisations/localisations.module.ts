import { Module } from '@nestjs/common';
import { LocalisationsService } from './localisations.service';
import { LocalisationsController } from './localisations.controller';
import { DatabaseModule } from 'src/config/database/database.module';
import { localisationProviders } from './localisations';

@Module({
  imports: [DatabaseModule],
  controllers: [LocalisationsController],
  providers: [LocalisationsService, ...localisationProviders],
})
export class LocalisationsModule {}
