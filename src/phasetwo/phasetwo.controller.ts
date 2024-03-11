import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhasetwoService } from './phasetwo.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('phaseTwo')
@Controller('phasetwo')
export class PhasetwoController {
  constructor(private readonly phasetwoService: PhasetwoService) {}

  @Post('/allComeths')
  createAllComeths() {
    return this.phasetwoService.fillMapWithComeths()
  }

  @Post('/allPolyanets')
  createAllPolyanets() {
    return this.phasetwoService.fillMapWithPolyanets()
  }

  @Post('/allSoloons')
  createAllSoloons() {
    return this.phasetwoService.fillMapWithSoloons()
  }

  @Delete('/allComeths')
  clearAllComeths() {
    return this.phasetwoService.clearAllComeths()
  }
}
