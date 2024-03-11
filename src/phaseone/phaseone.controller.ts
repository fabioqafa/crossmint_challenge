import { Controller, Post } from '@nestjs/common';
import { PhaseoneService } from './phaseone.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('phaseOne')
@Controller('phaseone')
export class PhaseoneController {
  constructor(private readonly phaseoneService: PhaseoneService) {}

  @Post()
  async fillMap() {
    return this.phaseoneService.fillMap();
  }
}