import { IsNotEmpty, IsOptional, IsString, IsInt, Min } from 'class-validator';

export class CreateChildDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  age: number;

  @IsNotEmpty()
  @IsString()
  idCard: string;

  @IsOptional()
  @IsString()
  municipality?: string;

  @IsOptional()
  @IsString()
  vaccine?: string;
}
