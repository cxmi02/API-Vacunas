import { IsString, IsMongoId, IsArray } from 'class-validator';

export class CreateDepartmentDto {
  @IsString()
  name: string; // Department name

  @IsArray()
  @IsMongoId({ each: true })
  municipalities: string[]; // References to associated municipalities
}
