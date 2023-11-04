import { Roles } from '../entities/roles.entity';

export type JwtPayload = {
  id: number;
  roles: Roles[];
};
