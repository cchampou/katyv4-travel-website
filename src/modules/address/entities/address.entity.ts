import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  addressLine1: string;

  @Column()
  addressLine2: string;

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
}
