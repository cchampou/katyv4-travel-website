import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { Address } from '../../address/entities/address.entity';
import { Season } from '../../season/entities/season.entity';

@Entity()
export class Activity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => Address, (address) => address.activities, { nullable: false })
  address: Relation<Address>;

  @ManyToMany(() => Season)
  @JoinTable()
  seasons: Season[];
}
