import { IsNotEmpty } from 'class-validator';
import { IsRole } from '../validation/is-role';

export class RoleDto {
  @IsNotEmpty()
  @IsRole({ message: 'role do not exist' })
  role: string;
}
