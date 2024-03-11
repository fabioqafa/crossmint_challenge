import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SoloonsService } from './soloons.service';
import { CreateSoloonDto } from './dto/create-soloon.dto';
import { UpdateSoloonDto } from './dto/update-soloon.dto';
import { RemoveSoloonDto } from './dto/remove-soloon.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('soloons')
@Controller('soloons')
export class SoloonsController {
  constructor(private readonly soloonsService: SoloonsService) {}

  @Post()
  create(@Body() createSoloonDto: CreateSoloonDto) {
    return this.soloonsService.create(createSoloonDto);
  }

  @Delete()
  remove(@Body() removeSoloonDto: RemoveSoloonDto) {
    return this.soloonsService.remove(removeSoloonDto);
  }
}
