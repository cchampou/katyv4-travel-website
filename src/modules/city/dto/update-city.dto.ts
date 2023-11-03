import { CreateCityDto } from './create-city.dto';
import { IsNumber } from 'class-validator';

export class UpdateCityDto extends CreateCityDto {
  @IsNumber()
  id: number;
}
