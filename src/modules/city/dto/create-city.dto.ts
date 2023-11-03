import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { EntityId } from '../../../validations/common';

export class CreateCityDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @ValidateNested()
  @Type(() => EntityId)
  country: EntityId;
}
