import { IntersectionType } from '@nestjs/swagger';
import { CreateThematicDto } from './create-thematic.dto';
import { EntityId } from '../../../validations/common';

export class UpdateThematicDto extends IntersectionType(CreateThematicDto, EntityId) {}
