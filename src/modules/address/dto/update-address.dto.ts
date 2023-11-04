import { CreateAddressDto } from './create-address.dto';
import { IntersectionType } from '@nestjs/swagger';
import { EntityId } from '../../../validations/common';

export class UpdateAddressDto extends IntersectionType(CreateAddressDto, EntityId) {}
