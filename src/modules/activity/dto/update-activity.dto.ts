import { IntersectionType } from '@nestjs/swagger';
import { CreateActivityDto } from './create-activity.dto';
import { EntityId } from '../../../validations/common';

export class UpdateActivityDto extends IntersectionType(CreateActivityDto, EntityId) {}
