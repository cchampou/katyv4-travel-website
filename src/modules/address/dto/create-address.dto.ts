import { IsNumber, IsString } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  street: string;

  @IsString()
  complement: string;

  @IsString()
  zipCode: string;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;
}
