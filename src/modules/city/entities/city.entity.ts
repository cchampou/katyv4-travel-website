import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { Country } from '../../country/entities/country.entity';
import { Address } from '../../address/entities/address.entity';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Country, (country) => country.cities, {
    nullable: false,
  })
  country: Relation<Country>;

  @OneToMany(() => Address, (address) => address.city)
  addresses: Relation<Address>[];
}
