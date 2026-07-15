import { Module } from '@nestjs/common';
import { AppareilsMobilesService } from './appareils_mobiles.service';
import { AppareilsMobilesController } from './appareils_mobiles.controller';
import { DatabaseModule } from 'src/config/database/database.module';
import { appareilMobileProviders } from './appareils_mobiles';

@Module({
  controllers: [AppareilsMobilesController],
  providers: [AppareilsMobilesService, ...appareilMobileProviders],
})
export class AppareilsMobilesModule {}
