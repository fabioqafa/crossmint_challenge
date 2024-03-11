import { Module } from '@nestjs/common';
import { ComethsService } from './comeths.service';
import { ComethsController } from './comeths.controller';

@Module({
  controllers: [ComethsController],
  providers: [ComethsService],
})
export class ComethsModule {}
