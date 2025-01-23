import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber,IsArray, IsNotEmpty,IsOptional, IsString } from "class-validator";

export class SbsDTO{
    @IsArray() // Asegúrate de que es un arreglo
    @IsNotEmpty() // Asegúrate de que no esté vacío
    @IsNumber({}, { each: true }) // Valida que cada elemento sea un número
    documento: number[];
}