import { EntityId } from '../../../validations/common';
import { CreateCityDto } from './create-city.dto';
import { IntersectionType } from '@nestjs/swagger';

export class UpdateCityDto extends IntersectionType(CreateCityDto, EntityId) {}
