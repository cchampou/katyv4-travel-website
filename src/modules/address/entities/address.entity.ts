import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { City } from '../../city/entities/city.entity';
import { Activity } from '../../activity/entities/activity.entity';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  street: string;

  @Column()
  complement: string;

  @Column()
  zipCode: string;

  @Column({
    type: 'float8',
  })
  latitude: number;

  @Column({
    type: 'float8',
  })
  longitude: number;

  @ManyToOne(() => City, (city) => city.addresses, { nullable: false })
  city: Relation<City>;

  @OneToMany(() => Activity, (activity) => activity.address)
  activities: Relation<Activity[]>;
}
