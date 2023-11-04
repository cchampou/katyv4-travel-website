import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Address } from '../../address/entities/address.entity';
import { EntityId } from '../../../validations/common';
import { Type } from 'class-transformer';

export class CreateActivityDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @ValidateNested()
  @Type(() => EntityId)
  address: Address;
}
