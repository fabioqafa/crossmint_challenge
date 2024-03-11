import { ApiProperty } from "@nestjs/swagger"

export class CreateComethDto {
    @ApiProperty()
    row: number
    @ApiProperty()
    column: number
    @ApiProperty()
    direction: string
}   
