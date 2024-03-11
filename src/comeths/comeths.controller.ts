import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComethsService } from './comeths.service';
import { CreateComethDto } from './dto/create-cometh.dto';
import { UpdateComethDto } from './dto/update-cometh.dto';
import { RemoveComethDto } from './dto/remove-cometh.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('comeths')
@Controller('comeths')
export class ComethsController {
  constructor(private readonly comethsService: ComethsService) {}

  @Post()
  create(@Body() createComethDto: CreateComethDto) {
    return this.comethsService.create(createComethDto);
  }

  @Delete()
  remove(@Body() removeComethDto: RemoveComethDto) {
    return this.comethsService.remove(removeComethDto);
  }
}
