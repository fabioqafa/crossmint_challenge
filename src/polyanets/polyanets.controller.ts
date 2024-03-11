import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PolyanetsService } from './polyanets.service';
import { CreatePolyanetDto } from './dto/create-polyanet.dto';
import { ApiTags } from '@nestjs/swagger';
import { RemovePolyanetDto } from './dto/remove-polyanet.dto';

@ApiTags('polyanets')
@Controller('polyanets')
export class PolyanetsController {
  constructor(private readonly polyanetsService: PolyanetsService) {}

  @Post()
  create(@Body() createPolyanetDto: CreatePolyanetDto) {
    return this.polyanetsService.create(createPolyanetDto);
  }

  @Delete()
  remove(@Body() removePolyanetDto: RemovePolyanetDto) {
    return this.polyanetsService.remove(removePolyanetDto);
  }
}
