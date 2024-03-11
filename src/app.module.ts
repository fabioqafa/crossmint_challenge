import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PolyanetsModule } from './polyanets/polyanets.module';
import { PhaseoneModule } from './phaseone/phaseone.module';
import { PhasetwoModule } from './phasetwo/phasetwo.module';
import { SoloonsModule } from './soloons/soloons.module';
import { ComethsModule } from './comeths/comeths.module';

@Module({
  imports: [PolyanetsModule, PhaseoneModule, PhasetwoModule, SoloonsModule, ComethsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
