import { PartialType } from '@nestjs/swagger';
import { CreateCityDto } from './create-city.dto';
import { IsOptional } from 'class-validator';

export class UpdateCityDto extends PartialType(CreateCityDto) {
  @IsOptional()
  name: string;

  @IsOptional()
  zipCode: string;
}
