import { Module } from '@nestjs/common';
import { EnfantService } from './enfant.service';
import { EnfantController } from './enfant.controller';
import { DatabaseModule } from 'src/config/database/database.module';
import { enfantProviders } from './enfant';

@Module({
  imports: [DatabaseModule],
  controllers: [EnfantController],
  providers: [EnfantService, ...enfantProviders],
})
export class EnfantModule {}
