import { Module } from '@nestjs/common';
import { SignalementService } from './signalement.service';
import { SignalementController } from './signalement.controller';
import { DatabaseModule } from 'src/config/database/database.module';
import { signalementProviders } from './signalement';

@Module({
  imports: [DatabaseModule],
  controllers: [SignalementController],
  providers: [SignalementService, ...signalementProviders],
})
export class SignalementModule {}
