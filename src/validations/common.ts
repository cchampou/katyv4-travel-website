import { IsPositive } from 'class-validator';

export class EntityId {
  @IsPositive()
  id: number;
}
