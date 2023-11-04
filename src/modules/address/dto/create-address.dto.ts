import { IsLatitude, IsLongitude, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { EntityId } from '../../../validations/common';
import { Type } from 'class-transformer';

export class CreateAddressDto {
  @IsString()
  @IsNotEmpty()
  street: string;

  @IsString()
  complement: string;

  @IsString()
  @IsNotEmpty()
  zipCode: string;

  @IsLatitude()
  @IsNotEmpty()
  latitude: number;

  @IsLongitude()
  @IsNotEmpty()
  longitude: number;

  @ValidateNested()
  @Type(() => EntityId)
  city: EntityId;
}
