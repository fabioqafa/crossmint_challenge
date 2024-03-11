import { ApiProperty } from "@nestjs/swagger"

export class RemoveSoloonDto {
    @ApiProperty()
    row: number
    @ApiProperty()
    column: number
}
