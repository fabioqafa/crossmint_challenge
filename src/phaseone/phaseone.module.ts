import { Module } from '@nestjs/common';
import { PhaseoneService } from './phaseone.service';
import { PhaseoneController } from './phaseone.controller';
import { PolyanetsService } from 'src/polyanets/polyanets.service';

@Module({
  controllers: [PhaseoneController],
  providers: [PhaseoneService],
})
export class PhaseoneModule {}
