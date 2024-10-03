import { IsString, IsNumber, IsOptional, IsArray } from 'class-validator';

export class CreateVaccineDto {
  @IsString()
  name: string;

  @IsNumber()
  maxAge: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  child?: string[];
}
