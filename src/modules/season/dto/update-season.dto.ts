import { IntersectionType } from '@nestjs/swagger';
import { CreateSeasonDto } from './create-season.dto';
import { EntityId } from '../../../validations/common';

export class UpdateSeasonDto extends IntersectionType(CreateSeasonDto, EntityId) {}
