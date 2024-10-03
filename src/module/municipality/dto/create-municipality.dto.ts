import { IsString, IsMongoId } from 'class-validator';

export class CreateMunicipalityDto {
  @IsString()
  name: string;

  @IsMongoId()
  department: string;
}
