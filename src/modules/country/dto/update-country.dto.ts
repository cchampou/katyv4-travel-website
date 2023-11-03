import { IntersectionType } from '@nestjs/swagger';
import { CreateCountryDto } from './create-country.dto';
import { EntityId } from '../../../validations/common';

export class UpdateCountryDto extends IntersectionType(CreateCountryDto, EntityId) {}
