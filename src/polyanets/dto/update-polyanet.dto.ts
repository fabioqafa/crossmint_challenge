import { PartialType } from '@nestjs/swagger';
import { CreatePolyanetDto } from './create-polyanet.dto';

export class UpdatePolyanetDto extends PartialType(CreatePolyanetDto) {}
