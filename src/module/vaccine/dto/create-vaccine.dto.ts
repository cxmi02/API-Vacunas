import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateVaccineDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  maxAge: number;
}
