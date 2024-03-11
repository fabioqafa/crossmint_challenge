import { ApiProperty } from "@nestjs/swagger"

export class CreatePolyanetDto {
    @ApiProperty()
    row: number

    @ApiProperty()
    column: number
}
