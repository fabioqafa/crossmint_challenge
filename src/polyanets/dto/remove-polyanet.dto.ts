import { ApiProperty } from "@nestjs/swagger"

export class RemovePolyanetDto {
    @ApiProperty()
    row: number

    @ApiProperty()
    column: number
}
