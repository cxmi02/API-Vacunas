import { IsString, IsNumber, IsMongoId } from 'class-validator';

export class CreateChildDto {
  @IsString()
  identity: string;

  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsMongoId()
  municipality?: string;
}
