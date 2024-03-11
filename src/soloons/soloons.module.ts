import { Module } from '@nestjs/common';
import { SoloonsService } from './soloons.service';
import { SoloonsController } from './soloons.controller';

@Module({
  controllers: [SoloonsController],
  providers: [SoloonsService],
})
export class SoloonsModule {}
