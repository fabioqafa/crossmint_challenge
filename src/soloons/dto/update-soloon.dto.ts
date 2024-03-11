import { PartialType } from '@nestjs/swagger';
import { CreateSoloonDto } from './create-soloon.dto';

export class UpdateSoloonDto extends PartialType(CreateSoloonDto) {}
