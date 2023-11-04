import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { City } from '../../city/entities/city.entity';

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
}
