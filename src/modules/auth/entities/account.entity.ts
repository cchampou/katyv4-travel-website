import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

import { Roles } from './roles.entity';

@Entity()
@Unique(['name'])
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  hashedPassword: string;

  @Column('enum', { enum: Roles, array: true, default: [Roles.USER] })
  roles: Roles[];
}
