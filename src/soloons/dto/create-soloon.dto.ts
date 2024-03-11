import { ApiProperty } from "@nestjs/swagger"

export class CreateSoloonDto {
    @ApiProperty()
    row: number
    @ApiProperty()
    column: number
    @ApiProperty()
    color: string
}
