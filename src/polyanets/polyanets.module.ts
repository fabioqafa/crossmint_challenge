import { Module } from '@nestjs/common';
import { PolyanetsService } from './polyanets.service';
import { PolyanetsController } from './polyanets.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [PolyanetsController],
  providers: [PolyanetsService],
})
export class PolyanetsModule {}
