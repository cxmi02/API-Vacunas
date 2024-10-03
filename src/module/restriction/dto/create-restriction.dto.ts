import { IsMongoId, IsOptional, IsBoolean } from 'class-validator';

export class CreateRestrictionDto {
  @IsMongoId()
  child: string;

  @IsMongoId()
  municipality: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}
