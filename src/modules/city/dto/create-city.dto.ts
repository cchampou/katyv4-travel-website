import { IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';
import { Country } from '../../country/entities/country.entity';

export class CreateCityDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsObject()
  @IsOptional()
  country: Pick<Country, 'id'>;
}
