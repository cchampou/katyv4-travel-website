import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Thematic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  name: string;
}
