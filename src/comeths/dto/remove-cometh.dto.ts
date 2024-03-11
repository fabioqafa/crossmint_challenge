import { ApiProperty } from "@nestjs/swagger"

export class RemoveComethDto {
    @ApiProperty()
    row: number
    @ApiProperty()
    column: number
}   
