import { Module } from '@nestjs/common';
import { PhasetwoService } from './phasetwo.service';
import { PhasetwoController } from './phasetwo.controller';

@Module({
  controllers: [PhasetwoController],
  providers: [PhasetwoService],
})
export class PhasetwoModule {}
