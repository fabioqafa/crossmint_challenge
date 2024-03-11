import { PartialType } from '@nestjs/swagger';
import { CreateComethDto } from './create-cometh.dto';

export class UpdateComethDto extends PartialType(CreateComethDto) {}
